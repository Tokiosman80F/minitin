import React from "react";

const Table = () => {
  return (
    <div className="overflow-x-auto ">
      <table className="table table-xl text-center ">
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
        <tbody className="text-lg text-black">
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Littel, Schaden and Vandervort</td>
            <td>Canada</td>
            <td>12/16/2020</td>
            <td>
              <button className="rounded    py-3 px-5 bg-blue-500 hover:bg-blue-400 text-white font-semibold">
                View Detail <FaEye className="inline" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
