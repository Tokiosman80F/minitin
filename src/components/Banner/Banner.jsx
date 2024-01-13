import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../../assets/images/banner/banner-1.jpg";
import banner2 from "../../assets/images/banner/banner-2.jpg";
import banner3 from "../../assets/images/banner/banner-3.jpg";
import banner4 from "../../assets/images/banner/banner-4.jpg";
import banner5 from "../../assets/images/banner/banner-5.jpg";
import { GoDotFill } from "react-icons/go";
import "./style.css";

const Banner = () => {
  const settings = {
    
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    appendDots: (dots) => (
      <div
      >
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: () => <GoDotFill  />,
  };
  const imgStyle = {
    width: "100%",
    height: "80vh",
    objectFit: "cover", // Try using object-contain
  };

  return (
    <div>
      <Slider {...settings} className="">
        <div >
          <img src={banner1} style={imgStyle} alt="" />
        </div>
        <div >
          <img src={banner2} style={imgStyle} alt="" />
        </div>
        <div >
          <img src={banner3} style={imgStyle} alt="" />
        </div>
        <div >
          <img src={banner4} style={imgStyle} alt="" />
        </div>
        <div >
          <img src={banner5} style={imgStyle} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
