import { useEffect, useState } from "react";
import Search from "./Search";
import { FaEye } from "react-icons/fa";
import Modal from "../../components/Modal/Modal";

const AllToys = () => {
  const [searchText, setSearchText] = useState("");
  const [toysData, setToysData] = useState([]);

  const [openModal, setOpenModal] = useState(false);
  const [selectedToy,setSelectedToy]=useState(null)

  const toggleModal = (toy) => {
    setOpenModal(!openModal);
    console.log(openModal);
    console.log(toy);
    setSelectedToy(toy)
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(searchText);
    console.log("Search Btn is working");
  };

  useEffect(() => {
    fetch(`http://localhost:8000/all-toys`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToysData(data);
      });
  }, []);

  return (
    <div className="max-w-screen-xl container mx-auto ">
      <Search
        setSearchText={setSearchText}
        handleSearch={handleSearch}
      ></Search>
      <div className="overflow-x-auto my-10">
        <table className="table table-xl  ">
          <thead className="text-3xl  text-gray-700 border-2 bg-blue-400/30">
            <tr>
              <th>Sl</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Seller</th>
              <th>Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          {toysData.map((toy, index) => (
            <tbody key={index} className="text-lg text-black">
              <tr
                className={` ${
                  index % 2 === 0 ? `` : `bg-sky-100 `
                } rounded-2xl`}
              >
                <th>{index + 1}</th>
                <td className=" font-medium">{toy.toyName}</td>
                <td className="capitalize text-center">{toy.subCategory}</td>
                <td>{toy.seller}</td>
                <td className="text-center">${toy.price}</td>
                <td className="text-center">{toy.availableQuantity}</td>
                <td>
                  <button
                    onClick={()=>toggleModal(toy)}
                    className="rounded py-3 px-5 bg-blue-500 hover:bg-blue-400 text-white font-semibold"
                  >
                    View Detail <FaEye className="inline" />
                  </button>
                   {openModal && selectedToy && <Modal toy={selectedToy} onClose={()=>setOpenModal(!openModal)}></Modal>}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllToys;
