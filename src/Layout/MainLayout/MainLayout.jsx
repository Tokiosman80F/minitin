import { Outlet } from "react-router-dom";
import CompanyInfo from "../../components/CompanyInfo/CompanyInfo";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Footer from "../../components/Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <div className="max-w-screen-xl container mx-auto">
      <CompanyInfo />
      <Navbar />
      </div>
      <Outlet/>
      {/* <Footer /> */}
    </>
  );
};

export default MainLayout;
