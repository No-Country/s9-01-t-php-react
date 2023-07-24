import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import certificadodemo from "../../../public/certificado-carousel.png";
import ArrowRight from "../../assets/icons/arrow-right.svg";
import ArrowLeft from "../../assets/icons/arrow-left.svg";

const Carousel = () => {
  const NextButton = ({ onClick }) => {
    return (
      <button onClick={onClick} className="absolute top-1/2 -translate-y-1/2 right-0 z-10">
        <img src={ArrowRight} alt="arrow right" />
      </button>
    );
  };
  const PrevButton = ({ onClick }) => {
    return (
      <button onClick={onClick} className="absolute top-1/2 -translate-y-1/2 left-0 z-10">
        <img src={ArrowLeft} alt="arrow right" />
      </button>
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className="w-full relative">
      <Slider {...settings}>
        <div>
          <img src={certificadodemo} alt="" />
        </div>
        <div>
          <img src={certificadodemo} alt="" />
        </div>
        <div>
          <img src={certificadodemo} alt="" />
        </div>
        <div>
          <img src={certificadodemo} alt="" />
        </div>
        <div>
          <img src={certificadodemo} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
