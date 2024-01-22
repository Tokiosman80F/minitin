import Banner from "../../components/Banner/Banner";
import Title from "../../components/Shared/Title/Title";
import Categories from "./Categories/Categories";
import Gallery from "./Gallery/Gallery";
import HotDeal from "./HotDeal/HotDeal";
import Poster from "./Poster/Poster";
import RecentProduct from "./RecentProduct/RecentProduct";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <div className="max-width-container">
        <Title title="Shop By Categories"></Title>
        <Categories></Categories>
        <Title title="Hot Deal Limited Offer"></Title>
        <HotDeal></HotDeal>
        <Poster></Poster>
        <Title title="Our Recent Products"></Title>
        <RecentProduct></RecentProduct>
      </div>
      <Title title="Our Gallery"></Title>
      <Gallery></Gallery>
    </>
  );
};

export default Home;
