import React, { useEffect } from "react";
import "../../components/Modal/style.css";

const MyToyModal = ({ data,onClose,handleUpdate }) => {
  
  const {_id}=data
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  const handleUpdateForm=(event)=>{
    event.preventDefault()
    const form=event.target
    const toyName=form.toyName.value
    const price=form.price.value
    const description=form.description.value
    const availableQuantity=form.quantity.value
    const updatedToyInfo={toyName,price,description,availableQuantity,_id}
    console.log("From the modal form =>",updatedToyInfo);
    return handleUpdate(updatedToyInfo)
  }

  return (
    <>
      <div className="modal-wrapper">
        <div className="modal-container">
          <div className="bg-white text-black border-2  my-4 rounded-xl sm:px-6 px-4 py-8 max-w-2xl w-full h-max  max-lg:mx-auto z-10">
            <div className="mb-10 flex justify-between">
              <h3 className="text-3xl font-extrabold">Update Your Product</h3>
              <button
                onClick={onClose}
                className="bg-red-500 text-white p-1 rounded-lg font-bold"
              >
                X Close
              </button>
            </div>
            <form onSubmit={handleUpdateForm}>
              {/* toyname*/}
              <div className="flex justify-between gap-2">
                {/* toyname */}
                <div className="w-full">
                  <label className="addProduct-label  ">Toy Name</label>
                  <div>
                    <input
                      name="toyName"
                      type="text"
                      className="addProduct-input"
                      placeholder=" Enter toy name"
                      defaultValue={data.toyName}
                    />
                  </div>
                </div>
              </div>

              {/*  available quantity & price */}
              <div className=" flex justify-between gap-4">
                {/* quantity */}
                <div className="">
                  <label className="addProduct-label  ">Quantity</label>
                  <div className="relative flex items-center">
                    <input
                      name="quantity"
                      type="number"
                      className="addProduct-input"
                      defaultValue={data.availableQuantity}
                    />
                  </div>
                </div>
                {/* price */}
                <div className="">
                  <label className="addProduct-label  ">Price</label>
                  <div>
                    <input
                      name="price"
                      type="text"
                      className="addProduct-input"
                      placeholder="Price"
                      defaultValue={data.price}
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
                      className="addProduct-input"
                      placeholder="Write Description about Product"
                      defaultValue={data.description}
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
