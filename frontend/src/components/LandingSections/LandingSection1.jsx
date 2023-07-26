import landingSection1Img4 from "../../../public/img/landing/landing-section1-img4.svg";
import landingSection1Img1 from "../../../public/img/landing/landing-section1-img1.svg";
import landingImg2 from "../../../public/img/landing/landing-img2.svg";

import { useSelector } from "react-redux";
import { SliderLanding } from "./Slider";

const LandingSection1 = () => {
  const { landingSection1: landingSection1Lang } = useSelector(state => state.lang);
  const { title, buttonText } = landingSection1Lang;

  return (
    <section className="w-full mt-5 md:mt-[45px] relative">
      <img
        className="absolute top-[250px] md:top-[160px] -z-10 right-0 w-auto md:h-auto h-[250px]"
        src={landingImg2}
        alt="landingImg2"
      />
      <h1 className="font-bold text-lg md:text-4xl md:leading-[56px] text-grey text-center">
        {title}
      </h1>
      <div className="mt-5 md:mt-[38px] w-full flex   justify-center items-center">
        <SliderLanding title={buttonText} />
      </div>
    </section>
  );
};

export default LandingSection1;
