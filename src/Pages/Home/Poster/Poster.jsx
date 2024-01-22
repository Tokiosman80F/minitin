import bannerImg from "../../../assets/images/banner/starwar_banner-1.jpeg";
const Poster = () => {
  return (
    <div className="relative my-32">
      <img src={bannerImg} alt="" className="w-full h-full object-cover " />
      <div className="absolute bg-black/20 top-0 w-full h-full  text-white  p-20 ">
        <h1 className="text-4xl font-bold w-1/3 ">Top toys available online and in-store</h1>
        <p className="my-5 font-medium">Selected lines only whilte stocks last. Offers subject to change.</p>
        <button className="border-2 font-medium border-white rounded-3xl px-5 py-1 bg-white text-blue-500">Start Shopping</button>
      </div>
    </div>
  );
};

export default Poster;
