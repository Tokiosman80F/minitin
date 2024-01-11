import { BsEnvelope, BsFillGeoAltFill, BsFillTelephoneFill, BsTruck } from "react-icons/bs";
const CompanyInfo = () => {
    return (
        <div>
            <div className="flex">
            <div className="flex">
                <div><BsFillTelephoneFill /> <span>+060 (800) 801-858</span> </div>
                <div><BsEnvelope /> <span>support@minitin.com</span> </div>
            </div>
            <div className="flex">
                <div><BsFillGeoAltFill /><span>Store Locator</span></div>
                <div><BsTruck /><span>Track Your Order</span></div>
            </div>
            </div>
        </div>
    );
};

export default CompanyInfo;