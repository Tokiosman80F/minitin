import { Outlet } from "react-router-dom";
import CompanyInfo from "../../components/CompanyInfo/CompanyInfo";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <div className="max-w-screen-xl container mx-auto">
      <CompanyInfo />
      <Navbar />
      </div>
      <Outlet/>
      <Footer />
    </>
  );
};

export default MainLayout;
