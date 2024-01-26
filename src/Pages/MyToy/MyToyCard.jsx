import { MdOutlineDelete } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
const MyToyCard = ({myData}) => {
  return (
    <div className="card w-80 bg-base-200 shadow-xl">
      <div className="card-body capitalize">
        <h2 className="card-title capitalize text-2xl text-blue-500 ">{myData.toyName}</h2>
        <p>Sub category : {myData.subCategory}</p>
        <p>Price: {myData.price}</p>
        <p>Quantity:{myData.availableQuantity} </p>
        <div className="card-actions justify-end text-white">
          <button className="bg-blue-400 hover:bg-blue-500 px-3 py-1 flex items-center justify-center font-semibold rounded-lg gap-2 ">
            Update <RxUpdate />{" "}
          </button>
          <button className="bg-red-400 hover:bg-red-500 px-3 py-1 flex items-center justify-center font-semibold rounded-lg gap-2 ">
            Delete <MdOutlineDelete />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyToyCard;
