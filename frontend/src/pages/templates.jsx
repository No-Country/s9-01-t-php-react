import { useNavigate } from "react-router";
import TemplatesImg1 from "../../public/img/templates/templates-img1.svg";
import Carousel from "../components/Carousel/Carousel";
import { useSelector } from "react-redux";

const Templates = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/dashboard");
  };
  const { template: templateLang } = useSelector(state => state.lang);
  const { heading, buttonText, sections } = templateLang;
  return (
    <main className="w-full">
      <div className="w-[95%] md:w-[90%] max-w-[1120px] h-auto md:h-[356px] bg-secondary rounded-[20px] flex text-white mt-[43px] mx-auto md:flex-row flex-col gap-2 md:gap-0 py-2 md:py-0">
        <div className="w-full md:w-[45%] md:max-w-[505px] h-auto flex justify-center items-center">
          <div className="w-full md:w-[68%] max-w-[346px]">
            <h1 className="font-medium text-2xl md:text-4xl md:leading-[44px] md:text-left text-center">
              {heading}
            </h1>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-between items-center md:items-end md:py-[26px] md:pr-[80px] gap-2 md:gap-0 px-2 md:px-0">
          <img src={TemplatesImg1} alt="TemplatesImg1" />
          <button
            onClick={handleClick}
            className="shadow-buttonshadow w-full max-w-[328px] h-[48px] bg-beige rounded-[10px] text-white font-bold text-[17px] leading-6"
          >
            {buttonText}
          </button>
        </div>
      </div>
      <section className="w-full flex flex-col items-center my-[45px]">
        <article className="w-full md:w-[90%] max-w-[1120px]">
          <h4 className="font-semibold text-xl md:text-2xl leading-[29px] text-primary text-center md:text-left">
            {sections.education}
          </h4>
          <div className="w-full mt-6">
            <Carousel />
          </div>
        </article>
        <article className="w-full md:w-[90%] max-w-[1120px] mt-[60px]">
          <h4 className="font-semibold text-xl md:text-2xl leading-[29px] text-primary text-center md:text-left">
            {sections.professionalDevelopment}
          </h4>
          <div className="w-full mt-6">
            <Carousel />
          </div>
        </article>
        <article className="w-full md:w-[90%] max-w-[1120px] mt-[60px]">
          <h4 className="font-semibold text-xl md:text-2xl leading-[29px] text-primary text-center md:text-left">
            {sections.eventParticipation}
          </h4>
          <div className="w-full mt-6">
            <Carousel />
          </div>
        </article>
        <article className="w-full md:w-[90%] max-w-[1120px] mt-[60px]">
          <h4 className="font-semibold text-xl md:text-2xl leading-[29px] text-primary text-center md:text-left">
            {sections.otherActivities}
          </h4>
          <div className="w-full mt-6">
            <Carousel />
          </div>
        </article>
      </section>
    </main>
  );
};

export default Templates;
