import { Outlet } from "react-router-dom";
import CompanyInfo from "../../components/CompanyInfo/CompanyInfo";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <CompanyInfo />
      <Navbar />
      <Outlet/>
      <Footer />
    </>
  );
};

export default MainLayout;
