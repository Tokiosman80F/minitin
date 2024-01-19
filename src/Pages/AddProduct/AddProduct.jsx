import minecraft from "../../assets/images/form/addProduct.png";
const AddProduct = () => {
  return (
    <div>
      <div>
        <div className="relative" >
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 sm:p-8 p-4 h-[320px] absolute w-full z-[-1]"></div>
          <div className="max-w-screen-xl container mx-auto grid lg:grid-cols-2 gap-4  ">
            <div className="">
              <div className="max-w-lg mt-16 px-6 max-lg:hidden ">
                <h3 className="text-6xl font-bold text-white stoke">Add Product </h3>
              </div>
              <div>
                <img src={minecraft} alt="" />
              </div>
            </div>
            {/* ---form  div----*/}
            <div className="bg-white  border-2  my-4 rounded-xl sm:px-6 px-4 py-8 max-w-2xl w-full h-max  max-lg:mx-auto z-10">
              <form onSubmit="">
                <div className="mb-10">
                  <h3 className="text-3xl font-extrabold">Add Your Product</h3>
                </div>
                {/* toyname and price */}
                <div className="flex justify-between gap-2">
                  {/* toyname */}
                  <div className="w-full">
                    <label className="text-base font-bold mb-2 block  ">
                      Toy Name
                    </label>
                    <div>
                      <input
                        name="toyname"
                        type="text"
                        required
                        className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                        placeholder=" Enter toy name"
                      />
                    </div>
                  </div>
                  {/* price */}
                  <div className="w-full">
                    <label className="text-base font-bold mb-2 block  ">
                      Price
                    </label>
                    <div>
                      <input
                        name="price"
                        type="number"
                        required
                        className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                        placeholder="Price"
                      />
                    </div>
                  </div>
                </div>
                {/* user & email */}
                <div className="flex justify-between gap-2">
                  {/* user */}
                  <div className="mt-4 w-full">
                    <label className="text-base font-bold mb-2 block  ">
                      seller name
                    </label>
                    <div className="relative flex items-center">
                      <input
                        name="sellerName"
                        type="text"
                        required
                        className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                        placeholder="Enter user email"
                      />
                    </div>
                  </div>
                  {/* email */}
                  <div className="mt-4 w-full">
                    <label className="text-base font-bold mb-2 block  ">
                      Seller Email
                    </label>
                    <div className="relative flex items-center">
                      <input
                        name="sellerEmail"
                        type="email"
                        required
                        className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                        placeholder="Enter user email"
                      />
                    </div>
                  </div>
                </div>
                {/* rating , available & sub-category */}
                <div className="flex justify-between">
                  {/* rating */}
                  <div className="mt-4">
                    <label className="text-base font-bold mb-2 block  ">
                      Rating
                    </label>
                    <div className="relative flex items-center">
                      <input
                        name="rating"
                        type="number"
                        required
                        className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                        placeholder="Enter user email"
                      />
                    </div>
                  </div>
                  {/* quantity */}
                  <div className="mt-4">
                    <label className="text-base font-bold mb-2 block  ">
                      Quantity
                    </label>
                    <div className="relative flex items-center">
                      <input
                        name="quantity"
                        type="number"
                        required
                        className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                        placeholder="Enter user email"
                      />
                    </div>
                  </div>
                  {/* sub */}
                  <div className="mt-4">
                    <label className="text-base font-bold mb-2 block  ">
                      Sub-Category
                    </label>
                    <div className="relative flex items-center">
                      <input
                        name="subcategory"
                        type=""
                        required
                        className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                        placeholder="Enter user email"
                      />
                    </div>
                  </div>
                </div>
                {/* photo url*/}
                <div>
                  <div className="mt-4">
                    <label className="text-base font-bold mb-2 block  ">
                      Photo Url
                    </label>
                    <div className="relative flex items-center">
                      <input
                        name="photoUrl"
                        type="url"
                        required
                        className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                        placeholder="Enter user email"
                      />
                    </div>
                  </div>
                </div>
                {/* description*/}
                <div>
                  <div className="mt-4">
                    <label className="text-base font-bold mb-2 block  ">
                      Description
                    </label>
                    <div className="relative flex items-center">
                      <textarea
                        name="description"
                        rows="5"
                        type="email"
                        required
                        className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                        placeholder="Enter user email"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <button
                    type="submit"
                    className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                  >
                    Add Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
