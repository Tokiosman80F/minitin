import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
const FooterContact = () => {
  return (
    <div className="bg-[#0062BD] py-10">
      <div className=" max-width-container">
        <div className="footer justify-between items-center">
          <div className="join gap-5">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered "
            />
            <button className="btn border-0 bg-black  text-white">Subscribe</button>
          </div>

          <div className="flex items-center text-white justify-center gap-5 ">
            <TfiHeadphoneAlt className="text-4xl font-bold " />
            <div>
              <p className="text-xs">Got questions? Call us 24/7!</p>
              <p className="text-2xl">+880 01987556588</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-5">
            <span className="p-2 bg-blue-500  text-center rounded-full text-white">
              <FaFacebook />
            </span>
            <span className="p-2 bg-blue-500  text-center rounded-full text-white">
              <FaTwitter />
            </span>
            <span className="p-2 bg-blue-500  text-center rounded-full text-white">
              <FaInstagramSquare />
            </span>
            <span className="p-2 bg-blue-500  text-center rounded-full text-white">
              <FaLinkedin />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
