
import FooterInfo from "./FooterInfo";
import FooterContact from "./FooterContact";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <div className="mt-10">
      <FooterInfo></FooterInfo>
      <FooterContact></FooterContact>
      <Copyright></Copyright>
    </div>
  );
};

export default Footer;
