import CompanyInfoItem from "./CompanyInfoItem";
import {
  BsEnvelope,
  BsFillGeoAltFill,
  BsFillTelephoneFill,
  BsTruck,
} from "react-icons/bs";

const CompanyInfo = () => {
  return (
    <div className="flex justify-between my-5">
      <div className="flex items-center gap-10">
        <CompanyInfoItem
          icon={<BsFillTelephoneFill className="text-blue-500 " />}
          text="+060 (800) 801-858"
        />
        <CompanyInfoItem
          icon={<BsEnvelope className="text-blue-500 " />}
          text="support@mintin.com"
        />
      </div>

      <div className="flex items-center gap-10">
        <CompanyInfoItem icon={<BsFillGeoAltFill />} text="Store Locator" />

        <CompanyInfoItem icon={<BsTruck />} text="Track Your Order" />
      </div>
    </div>
  );
};

export default CompanyInfo;
