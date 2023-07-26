import landingSection1Img4 from "../../../public/img/landing/landing-section1-img4.svg";
import landingSection1Img1 from "../../../public/img/landing/landing-section1-img1.svg";
import landingImg2 from "../../../public/img/landing/landing-img2.svg";

import { useSelector } from "react-redux";

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
      <div className="mt-5 md:mt-[38px] w-full flex justify-center">
        <div className="w-[1120px] h-[250px] md:h-[391px] border-primary border rounded-3xl flex flex-col justify-between items-center pt-8 pb-11 relative">
          <img
            className="absolute z-10 xl:-right-6 right-2 bottom-0 xl:-bottom-8 w-auto md:h-auto h-20"
            src={landingSection1Img4}
            alt="landingSection1Img4"
          />
          <p className="text-primary font-semibold text-2xl leading-[29px]">{buttonText}</p>
          <img className="" src={landingSection1Img1} alt="landingSection1Img1" />
          <div className="flex gap-8">
            <button className="w-8 md:w-[50px] h-2 md:h-4 rounded-[10px] shadow-buttonshadow bg-secondary"></button>
            <button className="w-8 md:w-[50px] h-2 md:h-4 rounded-[10px] border border-secondary"></button>
            <button className="w-8 md:w-[50px] h-2 md:h-4 rounded-[10px] border border-secondary"></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingSection1;
