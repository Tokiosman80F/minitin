import { MdOutlineDelete } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import MyToyModal from "./MyToyModal";
const MyToyCard = ({ myData, handleDelete, handleUpdate }) => {
  // for modal
  const [openModal, setOpenModal] = useState(false);
  const toogleModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <div className="card border-[1px] border-blue-500 w-80 bg-base-200 shadow-xl">
      <div className="card-body capitalize">
        <h2 className="font-bold capitalize text-3xl text-blue-500 ">
          {myData.toyName}
        </h2>
        <p>Sub-Category : {myData.subCategory}</p>
        <p>Price: $ {myData.price}</p>
        <p>Quantity Avaiable:{myData.availableQuantity} </p>
        <p>Describtion: {myData.description}</p>
        <div className="card-actions justify-end text-white">
          <button
            onClick={() => handleUpdate(myData?._id)}
            className="bg-blue-400 hover:bg-blue-500 px-3 py-1 flex items-center justify-center font-semibold rounded-lg gap-2 "
          >
            Update <RxUpdate />
          </button>
          {<MyToyModal></MyToyModal>}
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
