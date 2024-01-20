import minecraft from "../../assets/images/form/addProduct.png";
const AddProduct = () => {
  const onhandleAddtoy=(event)=>{
    event.preventDefault()
    let form=event.target
    let price=form.price.value 
    let toyName=form.toyName.value
    let subCategory= form.subCategory.value
    // let sellerEmail= form..value
    // let sellerName= form..value
    let imageUrl =form.imageUrl.value

  }
  return (
    <div>
      <div>
        <div className="relative" >
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 sm:p-8 p-4 h-[320px] absolute w-full z-[-1]"></div>
          <div className="max-width-container grid lg:grid-cols-2 gap-4  ">
            <div className="">
              <div className="max-w-lg mt-16 px-6 max-lg:hidden ">
                <h3 className="stoke">Add Product </h3>
              </div>
              <div>
                <img src={minecraft} alt="" />
              </div>
            </div>
            {/* ---form  div----*/}
            <div className="bg-white  border-2  my-4 rounded-xl sm:px-6 px-4 py-8 max-w-2xl w-full h-max  max-lg:mx-auto z-10">
              <form onSubmit={onhandleAddtoy}>
                <div className="mb-10">
                  <h3 className="text-3xl font-extrabold">Add Your Product</h3>
                </div>
                {/* toyname and price */}
                <div className="flex justify-between gap-2">
                  {/* toyname */}
                  <div className="w-full">
                    <label className="addProduct-label  ">
                      Toy Name
                    </label>
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
                    <label className="addProduct-label  ">
                      Price
                    </label>
                    <div>
                      <input
                        name="price"
                        type="number"
                        required
                        className="addProduct-input"
                        placeholder="Price"
                      />
                    </div>
                  </div>
                </div>
                {/* user & email */}
                <div className="flex justify-between gap-2">
                  {/* user */}
                  <div className="mt-4 w-full">
                    <label className="addProduct-label  ">
                      seller name
                    </label>
                    <div className="relative flex items-center">
                      <input
                        name="sellerName"
                        type="text"
                        required
                        className="addProduct-input"
                        placeholder="Enter user email"
                      />
                    </div>
                  </div>
                  {/* email */}
                  <div className="mt-4 w-full">
                    <label className="addProduct-label  ">
                      Seller Email
                    </label>
                    <div className="relative flex items-center">
                      <input
                        name="sellerEmail"
                        type="email"
                        required
                        className="addProduct-input"
                        placeholder="Enter user email"
                      />
                    </div>
                  </div>
                </div>
                {/* rating , available & sub-category */}
                <div className="flex justify-between">
                  {/* rating */}
                  <div className="mt-4">
                    <label className="addProduct-label  ">
                      Rating
                    </label>
                    <div className="relative flex items-center">
                      <input
                        name="rating"
                        type="number"
                        required
                        className="addProduct-input"
                        placeholder="Enter user email"
                      />
                    </div>
                  </div>
                  {/* quantity */}
                  <div className="mt-4">
                    <label className="addProduct-label  ">
                      Quantity
                    </label>
                    <div className="relative flex items-center">
                      <input
                        name="quantity"
                        type="number"
                        required
                        className="addProduct-input"
                        placeholder="Enter user email"
                      />
                    </div>
                  </div>
                  {/* sub */}
                  <div className="mt-4">
                    <label className="addProduct-label  ">
                      Sub-Category
                    </label>
                    <div className="relative flex items-center">
                      <input
                        name="subCategory"
                        type=""
                        required
                        className="addProduct-input"
                        placeholder="Enter user email"
                      />
                    </div>
                  </div>
                </div>
                {/* photo url*/}
                <div>
                  <div className="mt-4">
                    <label className="addProduct-label  ">
                      Photo Url
                    </label>
                    <div className="relative flex items-center">
                      <input
                        name="imageUrl"
                        type="url"
                        required
                        className="addProduct-input"
                        placeholder="Enter user email"
                      />
                    </div>
                  </div>
                </div>
                {/* description*/}
                <div>
                  <div className="mt-4">
                    <label className="addProduct-label  ">
                      Description
                    </label>
                    <div className="relative flex items-center">
                      <textarea
                        name="description"
                        rows="5"
                        type="email"
                        required
                        className="addProduct-input"
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
