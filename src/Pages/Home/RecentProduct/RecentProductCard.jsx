import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { ThinRoundedStar } from '@smastrom/react-rating';
import "./style.css"

import { FaRegHeart } from "react-icons/fa";
import Modal from "../../../components/Modal/Modal";
import { useState } from "react";

const RecentProductCard = ({toyInfo}) => {

  const [openModal, setOpenModal] = useState(false);
  const [selectedToy,setSelectedToy]=useState(null)

  const toggleModal = (toy) => {
    setOpenModal(!openModal);
    console.log(openModal);
    console.log(toy);
    setSelectedToy(toy)
  };


  const customStyles = {
    itemShapes: ThinRoundedStar,
    activeFillColor: '#0062BD',
    inactiveFillColor: '#92cafe',
  };

  return (
    <div style={{zIndex:"0"}}>
      <div className="card w-full rounded-none bg-base-100 shadow-2xl " style={{zIndex:"0"}}>
        <figure className="h-56">
          <img
            style={{zIndex:"0"}}
            src={toyInfo.imageUrl}
            className="h-full w-full object-cover"

          />
        </figure>
        <div className="card-body" style={{zIndex:"0"}}>
          <div className="flex">
            <p>
              <Rating style={{ maxWidth: "100px",color:"red" }} value={toyInfo.rating} readOnly itemStyles={customStyles}  />
            </p>
            <p className="text-sm">( <span>{Math.floor(Math.random() * 40)}</span> customer reviewed)</p>
          </div>
          <h2 className="card-title" style={{zIndex:"0"}}>
            {toyInfo.toyName}
            <div className="badge badge-secondary" style={{zIndex:"0"}}>NEW</div>
          </h2>
          <div className="flex gap-3 font-bold">
            <span className="text-blue-600 text-xl">${toyInfo.price}</span>
            <span className="line-through text-gray-500">${toyInfo.price *3}</span>
          </div>
          <div className="card-actions justify-end items-center gap-5">
            <div className=" "><FaRegHeart className="text-xl text-gray-400" /></div>
            <div   onClick={()=>toggleModal(toyInfo)}  className="bg-[#0062BD] px-3 py-2 text-white font-medium ">View Detail</div>
            {openModal && selectedToy && <Modal toy={selectedToy} onClose={()=>setOpenModal(!openModal)}></Modal>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProductCard;
