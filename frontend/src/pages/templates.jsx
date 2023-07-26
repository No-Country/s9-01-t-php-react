import { useNavigate } from "react-router";
import TemplatesImg1 from "../../public/img/templates/templates-img1.svg";
import Carousel from "../components/Carousel/Carousel";

import { useSelector } from "react-redux";

const Templates = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/dashboard");
  };

  const { template: templateLang } = useSelector((state) => state.lang);
  const { heading, buttonText, sections } = templateLang;


  return (
    <main>
      <div className="w-[1120px] h-[356px] bg-secondary rounded-[20px] flex text-white mt-[43px]">
        <div className="w-[494px] h-full flex justify-center items-center">
          <div className="w-[346px]">
            <h1 className="font-medium text-4xl leading-[44px]">{heading}
            </h1>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-between items-end py-[26px] pr-[80px]">
          <img src={TemplatesImg1} alt="TemplatesImg1" />
          <button
            onClick={handleClick}
            className="shadow-buttonshadow w-[328px] h-[48px] bg-beige rounded-[10px] text-white font-bold text-[17px] leading-6"
          >
            {buttonText}
          </button>
        </div>
      </div>
      <section className="w-full flex flex-col items-center my-[45px]">
        <article className="w-[1120px]">
          <h4 className="font-semibold text-2xl leading-[29px] text-primary">
          {sections.education}
          </h4>
          <div className="w-full mt-6">
            <Carousel />
          </div>
        </article>
        <article className="w-[1120px] mt-[60px]">
          <h4 className="font-semibold text-2xl leading-[29px] text-primary">
            {sections.professionalDevelopment}
          </h4>
          <div className="w-full mt-6">
            <Carousel />
          </div>
        </article>
        <article className="w-[1120px] mt-[60px]">
          <h4 className="font-semibold text-2xl leading-[29px] text-primary">
          {sections.eventParticipation}
          </h4>
          <div className="w-full mt-6">
            <Carousel />
          </div>
        </article>
        <article className="w-[1120px] mt-[60px]">
          <h4 className="font-semibold text-2xl leading-[29px] text-primary">{sections.otherActivities}</h4>
          <div className="w-full mt-6">
            <Carousel />
          </div>
        </article>
      </section>
    </main>
  );
};

export default Templates;
