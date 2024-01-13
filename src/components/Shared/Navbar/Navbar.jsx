import Logo from "../../../assets/images/logo/logo.png";
import { Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center my-5  ">
      <div className="flex items-center ">
        <img src={Logo} alt="MiniTin Logo" className="w-16 h-16"/>
        <div className="text-center text-3xl font-bold">MiniTin</div>
      </div>
      {/* nav link */}
      <div className="flex gap-10 ">
        <Link to="">Home</Link>
        <Link to="">All Toy</Link>
        <Link to="">My Toys</Link>
        <Link to="">Add Toy</Link>
        <Link to="">Blogs</Link>
        <Link to=""></Link>
      </div>
      {/* user & login */}
      <div>
        <div></div>
        <div className="flex items-center gap-1 font-bold text-blue-500">
          <BsFillPersonFill /> Login
        </div>
      </div>
    </div>
  );
};

export default Navbar;
