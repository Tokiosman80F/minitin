import { MdOutlineDelete } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
const MyToyCard = ({ myData,handleDelete }) => {
  
  return (
    <div className="card border-[1px] border-blue-500 w-80 bg-base-200 shadow-xl">
      <div className="card-body capitalize">
        <h2 className="font-bold capitalize text-3xl text-blue-500 ">
          {myData.toyName}
        </h2>
        <p>Sub category : {myData.subCategory}</p>
        <p>Price: $ {myData.price}</p>
        <p>Quantity:{myData.availableQuantity} </p>
        <div className="card-actions justify-end text-white">
          <button className="bg-blue-400 hover:bg-blue-500 px-3 py-1 flex items-center justify-center font-semibold rounded-lg gap-2 ">
            Update <RxUpdate />
          </button>
          <button
            onClick={() => handleDelete(myData?._id)}
            className="bg-red-400 hover:bg-red-500 px-3 py-1 flex items-center justify-center font-semibold rounded-lg gap-2 "
          >
            Delete <MdOutlineDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyToyCard;
