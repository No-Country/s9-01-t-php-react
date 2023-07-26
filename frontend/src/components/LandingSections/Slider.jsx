import Slider from "react-slick";

import img1 from "../../../public/img/landing/section1-img2.svg";
import img2 from "../../../public/img/landing/section1-img1.svg";
import img3 from "../../../public/img/landing/section1-img3.svg";
import img4 from "../../../public/img/landing/landing-section1-img4.svg";

export const SliderLanding = ({ title }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: false
  };
  return (
    <div className=" h-full w-[90%] text-center p-10 border  border-primary rounded-3xl relative">
      <p className="text-primary font-semibold text-2xl leading-[29px] mb-8">{title}</p>
      <Slider {...settings} className="">
        <div className=" px-4">
          <img src={img1} alt="certificate" className=" object-contain mx-auto  " />
        </div>
        <div className=" px-4">
          <img src={img2} alt=" certificate" className=" object-contain mx-auto" />
        </div>
        <div className=" px-4">
          <img src={img3} alt=" certificate" className=" object-contain mx-auto" />
        </div>
      </Slider>
      <img src={img4} alt="minion" width="80px" className=" absolute bottom-[-20px] right-0" />
    </div>
  );
};
