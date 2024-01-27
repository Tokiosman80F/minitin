import React, { useEffect } from "react";
import "../../components/Modal/style.css";

const MyToyModal = () => {
  useEffect(() => {
    document.body.style.overflowY='hidden'
    return ()=>{document.body.style.overflowY='scroll'}
  }, []);
  return (
    <>
      <div className="modal-wrapper">
        <div className="modal-container">
          <div className="bg-white  border-2  my-4 rounded-xl sm:px-6 px-4 py-8 max-w-2xl w-full h-max  max-lg:mx-auto z-10">
            <form>
              <div className="mb-10">
                <h3 className="text-3xl font-extrabold">Add Your Product</h3>
              </div>
              {/* toyname and price */}
              <div className="flex justify-between gap-2">
                {/* toyname */}
                <div className="w-full">
                  <label className="addProduct-label  ">Toy Name</label>
                  <div>
                    <input
                      name="toyName"
                      type="text"
                      required
                      className="addProduct-input"
                      placeholder=" Enter toy name"
                    />
                  </div>
                </div>
                {/* price */}
                <div className="w-full">
                  <label className="addProduct-label  ">Price</label>
                  <div>
                    <input
                      name="price"
                      type="text"
                      required
                      className="addProduct-input"
                      placeholder="Price"
                    />
                  </div>
                </div>
              </div>
             
              {/* rating , available & sub-category */}
              <div className="flex justify-between">
           
                {/* quantity */}
                <div className="mt-4">
                  <label className="addProduct-label  ">Quantity</label>
                  <div className="relative flex items-center">
                    <input
                      name="quantity"
                      type="number"
                      required
                      className="addProduct-input"
                      placeholder="Enter Quantity Number"
                    />
                  </div>
                </div>
             
              </div>
            
              {/* description*/}
              <div>
                <div className="mt-4">
                  <label className="addProduct-label  ">Description</label>
                  <div>
                    <textarea
                      name="description"
                      rows="5"
                      type="email"
                      required
                      className="addProduct-input"
                      placeholder="Write Description about Product"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                >
                  Update Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyToyModal;
