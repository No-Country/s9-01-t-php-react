import landingImg1 from "../../../public/img/landing/landing-img1.svg";

import { useSelector } from "react-redux";

const LandingSection2 = () => {
  const { landingSection2: landingSection2Lang } = useSelector((state) => state.lang);
  const { title,
    paragraph1,
    paragraph2,
    paragraph3,
    buttonText } = landingSection2Lang;

  return (
    <section className="w-full mt-5 md:mt-[122px] mb-5 md:mb-[175px] relative">
      <img
        className="absolute top-[170px] z-0 left-0 w-auto md:h-auto h-[400px]"
        src={landingImg1}
        alt="landingImg1"
      />
      <h2 className="font-bold text-4xl md:text-[64px] leading-[77px] text-primary text-center md:text-start md:pl-[79px]">
        {title}
      </h2>
      <div className="w-full flex justify-center mt-5 md:mt-10">
        <div className="w-full lg:w-[994px] md:h-[319px] flex flex-col justify-center items-center md:flex-row z-10">
          <div className="flex-1">
            <div className="text-grey w-full md:w-[439px] h-full flex flex-col justify-between items-center">
              <div className="md:h-[247px] w-full flex flex-col justify-center items-center md:px-10 px-2">
                <p className="font-bold text-sm md:text-[17px] leading-6 text-center">
                  {paragraph1}
                </p>
                <p className="font-medium text-sm md:text-[17px] leading-6 text-center">
                  {paragraph2}
                </p>
                <p className="font-bold text-sm md:text-[17px] leading-6 text-center">
                  {paragraph3}
                </p>
              </div>
              <button className="shadow-buttonshadow w-full md:w-[328px] h-[48px] bg-beige rounded-[10px] text-white font-bold text-[17px] leading-6">
                {buttonText}
              </button>
            </div>
          </div>
          <div className="w-full md:w-[515px] h-[319px] bg-[#E6E6E6]"></div>
        </div>
      </div>
    </section>
  );
};

export default LandingSection2;
