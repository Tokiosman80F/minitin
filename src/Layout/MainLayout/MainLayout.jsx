import { Outlet } from "react-router-dom";
import CompanyInfo from "../../components/CompanyInfo/CompanyInfo";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Footer from "../../components/Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <div className="max-width-container">
        <CompanyInfo />
        <Navbar />
      </div>
      <div className="min-h-[85vh]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
