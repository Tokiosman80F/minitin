import { useEffect } from "react";
import "./style.css"
const Modal = ({onClose,toy}) => {
  console.log("from Modal =>",toy);

  useEffect(()=>{
    document.body.style.overflowY="hidden"
    return ()=>{ document.body.style.overflowY='scroll'}
  },[])
 
  return (
    <div >
      <div className="modal-wrapper ">
      <div className="modal-container ">
        <div className="card lg:card-side bg-base-100 w-full">
          <figure>
            <img
              src={toy.imageUrl}
              alt="Album"
              className="h-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl"> {toy.toyName}</h2>
            <hr  className="bg-blue-500 h-[2px]"/>
            <p> <span className="">Seller Name: </span> {toy.seller}</p>
            <p> <span className="">Email: </span>{toy.sellerEmail} </p>
            <p> <span className="">Price: </span>{toy.price}</p>
            <p> <span className="">Rating: </span>{toy.rating} </p>
            <p> <span className="">Available Quantity: </span>{toy.availableQuantity} </p>
            <p>Description :{toy.description}</p>
            <div className="card-actions justify-end">
              <button onClick={onClose} className="btn bg-red-400  font-bold text-white hover:bg-red-500">X Close </button>
            </div>
          </div>
        </div>
        </div>
    </div>
    </div>
  );
};

export default Modal;

