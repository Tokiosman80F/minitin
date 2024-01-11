
import Logo from "../../assets/images/logo/logo.png"
import { Link } from 'react-router-dom';
import { BsFillPersonFill } from "react-icons/bs";
const Navbar = () => {
    return (
        <div className='flex'>
            <div> <img src={Logo} alt="" /> Mini Tin</div>
            {/* nav link */}
            <div className='flex '>
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
                <div><BsFillPersonFill /></div>
            </div>
        </div>
    );
};

export default Navbar;