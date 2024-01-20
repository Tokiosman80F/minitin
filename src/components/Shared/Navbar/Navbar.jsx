import Logo from "../../../assets/images/logo/logo.png";
import { Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { PiSignOutBold } from "react-icons/pi";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const handleSignOutUser = () => {
    signOutUser()
      .then(() => {
        console.log("Sign-Out Successfully");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Signout successful",
          showConfirmButton: false,
          timer: 2500,
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className="flex justify-between items-center my-5  ">
      <div className="flex items-center ">
        <img src={Logo} alt="MiniTin Logo" className="w-16 h-16" />
        <div className="text-center text-3xl font-bold">MiniTin</div>
      </div>
      {/* nav link */}
      <div className="flex gap-10 ">
        <Link to="/">Home</Link>
        <Link to="/all-toys">All Toy</Link>
        <Link to="">My Toys</Link>
        <Link to="/addproduct">Add Toy</Link>
        <Link to="">Blogs</Link>
        <Link to=""></Link>
      </div>
      {/* user & login */}
      <div>
        <div>{user?.email}</div>
        <div>
          {user?.email ? (
            <Link
              onClick={handleSignOutUser}
              className="flex items-center gap-1 font-bold text-blue-500"
            >
              <PiSignOutBold /> Sign-Out
            </Link>
          ) : (
            <Link
              to="/signin"
              className="flex items-center gap-1 font-bold text-blue-500"
            >
              <BsFillPersonFill /> Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
