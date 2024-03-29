import Logo from "../../../assets/images/logo/logo.png";
import { Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { PiSignOutBold } from "react-icons/pi";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
// icon
import { HiMiniBars3 } from "react-icons/hi2";
import { GrClose } from "react-icons/gr";
import { useState } from "react";
const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [toogleNav, setToogleNav] = useState(false);

  const navItem = (
    <>
      <Link to="/" className="hover:text-blue-500">Home</Link>
      <Link to="/all-toys" className="hover:text-blue-500">All Toy</Link>
      <Link to="/my-toy" className="hover:text-blue-500">My Toys</Link>
      <Link to="/addproduct" className="hover:text-blue-500">Add Toy</Link>
      <Link to="/blogs" className="hover:text-blue-500">Blogs</Link>
    </>
  );

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
    <div className="flex justify-around md:justify-between items-center my-5 ">
      <div className="flex items-center ">
        <img src={Logo} alt="MiniTin Logo" className="w-16 h-16" />
        <div className="text-center md:text-3xl font-bold">MiniTin</div>
      </div>
      {/* nav link */}
      <div className="md:flex gap-10  hidden">
        {navItem}
      </div>
      {/* nav icon for small device */}
      <div
        onClick={() => setToogleNav(!toogleNav)}
        className="cursor-pointer text-xl md:hidden"
      >
        {toogleNav ? <GrClose /> : <HiMiniBars3 />}
      </div>
      {
        toogleNav && <div className="flex flex-col bg-slate-100 gap-5 w-full items-center absolute top-40 z-10 font-bold p-5 md:hidden ">{navItem}</div>
      }
      {/* user & login */}
      <div className="flex justify-between items-center gap-2">
        <div>
          {user?.email ? (
            <div className="flex gap-5">
              {/* image */}
              <div
                className="w-10 h-10 border border-blue-500 bg-yellow-300  rounded-full lg:tooltip  lg:tooltip-left  "
                data-tip={user?.displayName}
              >
                <img src={user?.photoURL} alt="hi" />
              </div>
              {/* link */}
              <Link
                onClick={handleSignOutUser}
                className="flex items-center gap-1 font-bold text-blue-500"
              >
                <PiSignOutBold /> Sign-Out
              </Link>
            </div>
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
