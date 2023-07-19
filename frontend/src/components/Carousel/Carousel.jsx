import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import certificadodemo from "../../../public/certificado-carousel.png";

const Carousel = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      loop={true}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper w-full"
    >
      <SwiperSlide>
        <img className="" src={certificadodemo} alt="certificado-demo" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="" src={certificadodemo} alt="certificado-demo" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="" src={certificadodemo} alt="certificado-demo" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="" src={certificadodemo} alt="certificado-demo" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="" src={certificadodemo} alt="certificado-demo" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="" src={certificadodemo} alt="certificado-demo" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="" src={certificadodemo} alt="certificado-demo" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="" src={certificadodemo} alt="certificado-demo" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
