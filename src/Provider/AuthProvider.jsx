import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../Firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // signup user
  const signUpUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // login user
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // logout user
  const signOutUser = () => {
    return signOut(auth);
  };
  // google sign
  const googleProvider = new GoogleAuthProvider();

  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // observer
  useEffect(() => {
    const unsubscribe = () => {
      onAuthStateChanged(auth, (cuurentUser) => {
        setUser(cuurentUser);
      });
    };
    return () => {
      unsubscribe();
    };
  }, []);
  const authInfo = {
    user,
    loginWithGoogle,
    signOutUser,
    loginUser,
    signUpUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
