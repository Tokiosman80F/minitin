const DealCard = ({ info }) => {
  return (
    <div className="max-w-sm  bg-white border-y-8 border-x-2 border-gray-200  rounded-lg shadow-2xl">
      <div className="relative overflow-hidden">
        <img
          className="  w-full max-h-96 object-cover "
          src={info.img}
          alt=""
        />
        {/* discount percentage */}
        <p className=" absolute top-5 right-2">
          <span className="bg-yellow-400 font-bold rounded-full  p-3">90%</span>
        </p>

        {/* hover part */}
        <div className="bg-black/40 absolute h-full w-full -bottom-10 flex items-center justify-center font-extrabold text-white text-3xl hover:bottom-0 opacity-0 hover:opacity-100 transition-all duration-500">ON SALE!!</div>
      </div>
      <div className="p-5 text-center">
        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-700">
          {info.title}
        </h5>

        {/* price */}
        <div className="flex items-center justify-center gap-3">
          <p className="mb-3 line-through font-bold text-gray-700">
            ${info.mainPrice}
          </p>
          <p className="mb-3 font-bold text-2xl text-blue-500">
            ${info.discoutPrice}
          </p>
        </div>

        {/* btn */}
        <div className="flex  justify-center gap-5 pb-5">
          <button className="capitalize px-5 py-2 text-sm font-semibold  text-white bg-blue-500 rounded-md hover:bg-white hover:text-blue-700 hover:border-blue-500 border">
            Add to cart
          </button>
          <button className="text-black font-semibold border border-gray-300 px-5 rounded-md">
            Avaiable
          </button>
        </div>
      </div>
    </div>
  );
};

export default DealCard;
