const Title = ({title}) => {
  return (
    <div className="  my-10">
      <div className="flex justify-center relative ">
        <div className="w-24 h-[1px] bg-gray-500 ">
          <p className="w-5 h-[5px] bg-blue-500  absolute transform left-[49%] -top-[2px]"></p>
        </div>
      </div>
      <div className="text-center py-5">
        <p className="text-base text-gray-400 font-bold">
        Hot items. Affordable prices
        </p>
        <h1 className="text-4xl font-bold mt-3">{title}</h1>
      </div>
    </div>
  );
};

export default Title;
