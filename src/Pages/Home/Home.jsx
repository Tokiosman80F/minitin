import Banner from "../../components/Banner/Banner";
import Title from "../../components/Shared/Title/Title";
import Categories from "./Categories/Categories";
import Gallery from "./Gallery/Gallery";
import HotDeal from "./HotDeal/HotDeal";
import Poster from "./Poster/Poster";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <div className="max-width-container">
        <Title title="Shop By Categories"></Title>
        <Categories></Categories>
        <Title title="Hot Deal Limited Offer"></Title>
        <HotDeal></HotDeal>
        <Title title="Our Recent Products"></Title>
        <Poster></Poster>
      </div>
      <Title title="Our Gallery"></Title>
      <Gallery></Gallery>
    </>
  );
};

export default Home;
