import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { ThinRoundedStar } from "@smastrom/react-rating";
import "./style.css";
import { FcLike } from "react-icons/fc";
import { FaRegHeart } from "react-icons/fa";
import Modal from "../../../components/Modal/Modal";
import { useState } from "react";

const RecentProductCard = ({ toyInfo }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedToy, setSelectedToy] = useState(null);
  const [likeProduct, setLikeProduct] = useState(false);
  const toggleModal = (toy) => {
    setOpenModal(!openModal);
    console.log(openModal);
    console.log(toy);
    setSelectedToy(toy);
  };

  const customStyles = {
    itemShapes: ThinRoundedStar,
    activeFillColor: "#0062BD",
    inactiveFillColor: "#92cafe",
  };

  return (
    <div>
      <div className="card w-full rounded-none bg-base-100 shadow-2xl ">
        <figure className="h-56">
          <img src={toyInfo.imageUrl} className="h-full w-full object-cover hover:scale-110 transition duration-500 " />
        </figure>
        <div className="card-body">
          <div className="flex">
            <p>
              <Rating
                style={{ maxWidth: "100px", color: "red" }}
                value={toyInfo.rating}
                readOnly
                itemStyles={customStyles}
              />
            </p>
            <p className="text-sm">
              ( <span>{Math.floor(Math.random() * 40)}</span> customer reviewed)
            </p>
          </div>
          <h2 className="card-title">
            {toyInfo.toyName}
            <div className="badge badge-error text-white">NEW</div>
          </h2>
          <div className="flex gap-3 font-bold">
            <span className="text-blue-600 text-xl">${toyInfo.price}</span>
            <span className="line-through text-gray-500">
              ${toyInfo.price * 3}
            </span>
          </div>
          <div className="card-actions justify-end items-center gap-5">
            <div onClick={()=>setLikeProduct(!likeProduct)} className="cursor-pointer " >
              {likeProduct ? (
                <FcLike className="text-xl  "  />
              ) : (
                <FaRegHeart className="text-xl text-gray-400 "  />
              )}
            </div>
            <div
              onClick={() => toggleModal(toyInfo)}
              className="bg-[#0062BD] px-3 py-2 text-white font-medium cursor-pointer hover:bg-blue-400 transition duration-200 "
            >
              View Detail
            </div>
            {openModal && selectedToy && (
              <Modal
                toy={selectedToy}
                onClose={() => setOpenModal(!openModal)}
              ></Modal>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProductCard;
