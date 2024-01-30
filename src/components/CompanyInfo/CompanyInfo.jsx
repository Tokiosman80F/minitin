import CompanyInfoItem from "./CompanyInfoItem";
import {
  BsEnvelope,
  BsFillGeoAltFill,
  BsFillTelephoneFill,
  BsTruck,
} from "react-icons/bs";

const CompanyInfo = () => {
  return (
    <div className=" flex flex-col  items-center gap-2   md:flex-row  md:justify-between my-5 border-b-2 pb-2">
      {/* part-1 */}
      <div className="flex md:items-center gap-10">
        <CompanyInfoItem
          icon={<BsFillTelephoneFill className="text-blue-500 " />}
          text="+060 (800) 801-858"
        />
        <CompanyInfoItem
          icon={<BsEnvelope className="text-blue-500 " />}
          text="support@mintin.com"
        />
      </div>
      {/* part-2 */}
      <div className="flex  md:items-center gap-10">
        <CompanyInfoItem icon={<BsFillGeoAltFill />} text="Store Locator" />

        <CompanyInfoItem icon={<BsTruck />} text="Track Your Order" />
      </div>
    </div>
  );
};

export default CompanyInfo;
