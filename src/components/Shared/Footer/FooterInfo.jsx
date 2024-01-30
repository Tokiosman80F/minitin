import React from "react";
import {
  BsEnvelope,
  BsFillGeoAltFill,
  BsFillTelephoneFill,
} from "react-icons/bs";
const FooterInfo = () => {
  return (
    <footer className=" bg-[#EBEEFB] py-20">
      <div className="footer  max-width-container justify-between px-2">
        <nav>
          <header className=" font-bold text-xl capitalize text-gray-800  ">
            Buyer Center
            <p className="w-10 h-px bg-blue-500"></p>
          </header>
          <a className="">
            Home <p className="w-1/3 h-px bg-blue-500"></p>
          </a>
          <a className="">
            Contact <p className="w-1/3 h-px bg-blue-500"></p>
          </a>
          <a className="">
            Payment Option <p className="w-1/3 h-px bg-blue-500"></p>
          </a>
          <a className="">
            Shipping Policy <p className="w-1/3 h-px bg-blue-500"></p>
          </a>
          <a className="">
            Return Policy<p className="w-1/3 h-px bg-blue-500"></p>
          </a>
        </nav>

        <nav>
          <header className="font-bold text-xl capitalize text-gray-800">
            Popular Category
            <p className="w-10 h-px bg-blue-500"></p>
          </header>
          <a className="">
            Lego Toys <p className="w-10 h-px bg-blue-500"></p>
          </a>
          <a className="">
            Super Hero Toy <p className="w-10 h-px bg-blue-500"></p>
          </a>
          <a className="">
            Block Toys <p className="w-10 h-px bg-blue-500"></p>
          </a>
          <a className="">
            Car Toys <p className="w-10 h-px bg-blue-500"></p>
          </a>
          <a className="">
            Excluesive Toys <p className="w-10 h-px bg-blue-500"></p>
          </a>
        </nav>
        <nav>
          <header className="font-bold text-xl capitalize text-gray-800">
            Contact Info
            <p className="w-10 h-px bg-blue-500"></p>
          </header>
          {/* 1 */}
          <div className="flex items-center justify-between gap-3">
            <span className="p-2 bg-blue-500  text-center rounded-full text-white">
              <BsFillGeoAltFill />
            </span>
            <div>
              <p>Agrabaad,Chittangong</p>
              <p>Bangladesh</p>
            </div>
          </div>
          {/* 2 */}
          <div className="flex items-center justify-between gap-3">
            <span className="p-2 bg-blue-500  text-center rounded-full text-white">
              <BsFillTelephoneFill />
            </span>
            <div>
              <p>+880 01987556588</p>
              <p>+880 01987556588</p>
            </div>
          </div>
          {/* 3 */}
          <div className="flex items-center justify-between gap-3">
            <span className="p-2 bg-blue-500  text-center rounded-full text-white">
              <BsEnvelope />
            </span>
            <div>
              <p>Email: tokiosman@outlook.com</p>
              <p>9AM-11PM,Sat-Fri,GMT+6 </p>
            </div>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default FooterInfo;
