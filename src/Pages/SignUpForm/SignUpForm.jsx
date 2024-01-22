import { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import avatar from "../../assets/images/avatar/avatar.svg";
import {updateProfile} from 'firebase/auth'
const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signUpUser } = useContext(AuthContext);

  const handleSignup = (event) => {
    event.preventDefault();
    let form = event.target;
    let email = form.useremail.value;
    let password = form.password.value;
    let username = form.username.value;
    console.log("user name =", username);
    signUpUser(email, password)
      .then( async (userCredential) => {
        console.log("Sign-in successfull");
        const user = userCredential.user;
      
        console.log(user);
        // inserting username and photo in firebase
         await updateProfile(user,{
          displayName:username,
          photoURL:avatar
        })
      })
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sign-Up Successful ",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div>
      <div>
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 sm:p-8 p-4 h-[320px]">
          <div className="max-width-container grid lg:grid-cols-2 gap-4  ">
            <div>
              <div className="max-w-lg mt-16 px-6 max-lg:hidden ">
                <h3 className="stoke">Register </h3>
                <p className="text-sm mt-4 text-white">
                  Using
                  <span className="text-yellow-300 font-bold px-1">
                    Firebase Authentication
                  </span>
                  which allows users to signin to our app using more than one
                  signin method,including email address and password sign-in and
                  google sign-in
                </p>
              </div>
            </div>
            {/* ---form  div----*/}
            <div className="bg-white  border-2  my-4 rounded-xl sm:px-6 px-4 py-8 max-w-md w-full h-max  max-lg:mx-auto">
              <form onSubmit={handleSignup}>
                <div className="mb-10">
                  <h3 className="text-3xl font-extrabold">Sign in</h3>
                </div>

                <div>
                  <label className="text-base font-bold mb-2 block  ">
                    Name
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name="username"
                      type="text"
                      required
                      className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                      placeholder="Enter user name"
                    />
                    <FaUser className="absolute right-4 text-gray-400" />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="text-base font-bold mb-2 block  ">
                    Email
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name="useremail"
                      type="email"
                      required
                      className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                      placeholder="Enter user email"
                    />
                    <MdOutlineMail className="absolute right-4 text-gray-400" />
                  </div>
                </div>
                <div className="mt-6">
                  <label className="text-base mb-2 block font-bold">
                    Password
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                      className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                      placeholder="Enter password"
                    />
                    <div
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 text-gray-400"
                    >
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <button
                    type="submit"
                    className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                  >
                    Sign Up
                  </button>
                </div>
                <p className="text-sm mt-6 text-center">
                  Already have an account
                  <Link
                    to="/signin"
                    className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
