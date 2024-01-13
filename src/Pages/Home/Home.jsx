import Banner from "../../components/Banner/Banner";
import Title from "../../components/Shared/Title/Title";
import Categories from "./Categories/Categories";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <div className='className="max-w-screen-xl container mx-auto'>
        <Title
          subtitle="Hot items. Affordable prices"
          title="Shop By Categories"
        ></Title>
        <Categories></Categories>
      </div>
    </>
  );
};

export default Home;
