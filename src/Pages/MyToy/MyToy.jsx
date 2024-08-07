import  { useContext, useEffect, useState } from "react";

import FilterButton from "./FilterButton";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToyCard from "./MyToyCard";
import Swal from "sweetalert2";
const MyToy = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  const [filter, setFilter] = useState("nothing");
  // console.log(filter);
  const [myToy, setMyToy] = useState([]);
  // this one is for real time update in ui
  const [control, setControl] = useState(false);
  // for modal
  const [openModal, setOpenModal] = useState(false);
  
  useEffect(() => {
    fetch(`https://minitin-server-sint-h0pki7li2-tokiosman0135gmailcoms-projects.vercel.appmytoy/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("the data", data);
        setMyToy(data);
      });
  }, [user?.email, control]);

  const handleUpdate = (data) => {
    setOpenModal(!openModal);

    console.log("the handle Update data ", data);
    fetch(`https://minitin-server-sint-h0pki7li2-tokiosman0135gmailcoms-projects.vercel.appmytoy-edit/${data._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          setControl(!control);
        }
      });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Do you want to delete the Toy?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No I don't`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
      }
      fetch(`https://minitin-server-sint-h0pki7li2-tokiosman0135gmailcoms-projects.vercel.appmytoy/${id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            // Corrected typo in 'deletedCount'
            const remaining = myToy.filter((myToy) => myToy._id !== id);
            console.log("the remain", remaining);
            setMyToy(remaining);
          }
        });
    });
  };

  return (
    <>
      {/* header part */}
      <div className="relative">
        <div className="absoulte bg-gradient-to-r from-blue-500 to-blue-700 sm:p-8 p-4 h-[320px]  z-[-1]">
          <div className="max-width-container text-white">
            <h3 className="stoke "> My Toy </h3>
            <ul>
              <li>You can see all the product you have added.</li>
              <li>You can Filter the toy according to price.</li>
            </ul>
          </div>
        </div>
        <div className="max-w-lg mt-16 px-6 "></div>
      </div>
      {/* filter btn */}
      <div className="max-width-container">
        <div className="flex justify-end border-2 mb-28">
          <FilterButton setFilter={setFilter} />
        </div>
        {/* card */}
        <div className="grid md:grid-cols-3  items-center justify-center gap-10">
          {myToy.map((data) => (
            <MyToyCard
              key={data._id}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
              myData={data}
              openModal={openModal}
              setOpenModal={setOpenModal}
              
            ></MyToyCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyToy;
