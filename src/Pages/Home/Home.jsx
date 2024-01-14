import Banner from "../../components/Banner/Banner";
import Title from "../../components/Shared/Title/Title";
import Categories from "./Categories/Categories";
import HotDeal from "./HotDeal/HotDeal";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <div className="max-w-screen-xl container mx-auto">
        <Title title="Shop By Categories"></Title>
        <Categories></Categories>
        <Title title="Hot Deal Limited Offer"></Title>
        <HotDeal></HotDeal>
      </div>
    </>
  );
};

export default Home;
