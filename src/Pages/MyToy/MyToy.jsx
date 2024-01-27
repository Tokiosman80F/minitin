import React, { useContext, useEffect, useState } from "react";

import FilterButton from "./FilterButton";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToyCard from "./MyToyCard";
import Swal from "sweetalert2";
const MyToy = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [filter, setFilter] = useState("nothing");
  console.log(filter);
  const [myToy, setMyToy] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8000/mytoy/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("the data",data);
        setMyToy(data);
      });
  }, [user?.email]);

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
      fetch(`http://localhost:8000/mytoy/${id}`, {
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
        <div className="grid grid-cols-3 gap-10">
          {myToy.map((data) => (
            <MyToyCard
              key={data._id}
              handleDelete={handleDelete}
              myData={data}
            ></MyToyCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyToy;
