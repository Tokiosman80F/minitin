import Banner from "../../components/Banner/Banner";
import Title from "../../components/Shared/Title/Title";
import Categories from "./Categories/Categories";
import HotDeal from "./HotDeal/HotDeal";
import Poster from "./Poster/Poster";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <div className="max-w-screen-xl container mx-auto">
        <Title title="Shop By Categories"></Title>
        <Categories></Categories>
        <Title title="Hot Deal Limited Offer"></Title>
        <HotDeal></HotDeal>
        <Title title="Our Recent Products"></Title>

        <Poster></Poster>
      </div>
    </>
  );
};

export default Home;
