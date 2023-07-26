import landingSection3Img1 from "../../../public/img/landing/landing-section3-img1.svg";
import landingSection3Img2 from "../../../public/img/landing/landing-section3-img2.svg";
import landingSection3Img3 from "../../../public/img/landing/landing-section3-img3.svg";
import landingSection3Img4 from "../../../public/img/landing/landing-section3-img4.svg";
import landingSection3Img5 from "../../../public/img/landing/landing-section3-img5.svg";

import { useSelector } from "react-redux";

const LandingSection3 = () => {
  const { landingSection3: landingSection3Lang } = useSelector(state => state.lang);
  const { paragraph1, paragraph2, paragraph3, paragraph4, paragraph5, paragraph6 } =
    landingSection3Lang;

  return (
    <section className="w-full pt-[152px] bg-[#FBD59B] pb-[155px]">
      <article className="w-full flex justify-between flex-col items-center lg:flex-row md:px-[112px]">
        <div className="w-full md:w-[600px] xl:h-[193px] rounded-[10px] bg-beige text-white py-6 px-8 shadow-buttonshadow z-10">
          <p className="font-extrabold text-lg md:text-2xl leading-[29px]">{paragraph1}</p>
          <p className="font-medium text-lg md:text-2xl leading-[29px]">{paragraph2}</p>
        </div>
        <img src={landingSection3Img1} alt="landingSection3Img1" />
      </article>
      <article className="w-full flex flex-col-reverse lg:flex-row md:justify-end items-center md:px-[112px] md:gap-[98px] mt-[146px]">
        <img src={landingSection3Img2} alt="landingSection3Img2" />
        <div className="relative w-full md:w-[600px] xl:h-[135px] rounded-[10px] bg-beige text-white py-6 px-8 shadow-buttonshadow">
          <img
            className="absolute right-0 md:-right-12 md:-top-[145px] -top-[90px] w-auto md:h-auto h-28"
            src={landingSection3Img4}
            alt="landingSection3Img4"
          />
          <p className="font-extrabold text-lg md:text-2xl leading-[29px] text-right">
            {paragraph3}
          </p>
          <p className="font-medium text-lg md:text-2xl leading-[29px] text-right">{paragraph4}</p>
        </div>
      </article>
      <article className="w-full flex flex-col lg:flex-row justify-center md:justify-start items-center mt-[102px] md:px-[112px] md:gap-[83px]">
        <div className="relative w-full md:w-[600px] xl:h-[135px] rounded-[10px] bg-beige text-white py-6 px-8 shadow-buttonshadow">
          <img
            className="absolute left-0 md:-left-[40px] -top-[80px] md:-top-[135px] w-auto md:h-auto h-20"
            src={landingSection3Img5}
            alt="landingSection3Img5"
          />
          <p className="font-extrabold text-lg md:text-2xl leading-[29px] text-left">
            {paragraph5}
          </p>
          <p className="font-medium text-lg md:text-2xl leading-[29px] text-left">{paragraph6}</p>
        </div>
        <img src={landingSection3Img3} alt="landingSection3Img3" />
      </article>
    </section>
  );
};

export default LandingSection3;
