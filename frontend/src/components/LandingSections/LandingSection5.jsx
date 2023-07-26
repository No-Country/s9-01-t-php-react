/* eslint-disable react/prop-types */
import { BsChevronRight } from "react-icons/bs";
import landingSection5Img1 from "../../../public/img/landing/landing-section5-img1.svg";
import { useSelector } from "react-redux";

const Button = ({ text, primary }) => {
  return (
    <button
      className={`w-[200px] h-10 rounded-[10px] font-semibold text-sm leading-6 ${
        primary ? "bg-primary shadow-buttonshadow text-white" : "border border-primary text-grey"
      }`}
    >
      {text}
    </button>
  );
};

const Card = ({ title, description, btnText }) => {
  return (
    <div className="w-full md:w-[500px] h-[180px] rounded-[10px] border border-grey px-6 py-5">
      <p className="font-normal text-base md:text-xl leading-6 text-grey mb-[6px]">{title}</p>
      <p className="font-normal text-xs md:text-sm left-6 text-grey mb-5">{description}</p>
      <div className="w-full flex justify-end">
        <button className="rounded-[10px] w-[103px] h-[32px] bg-primary flex justify-center items-center text-white">
          <p className="font-bold text-sm leading-[17px]">{btnText}</p>
          <BsChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const LandingSection5 = () => {
  const language = useSelector(state => state.lang);
  const { sectionTitle, buttons, cards } = language.landingSection5;

  return (
    <section className="w-full relative pb-[200px]">
      <h2 className="md:text-left text-center md:pl-[78px] font-bold text-4xl leading-6 text-grey mt-[94px]">
        {sectionTitle}
      </h2>
      <article className="w-full flex flex-col items-center">
        <div className="flex flex-wrap gap-4 mt-[71px] justify-center">
          <Button text={buttons[0].buttonAboutCertifyMe} primary />
          <Button text={buttons[1].buttonAboutTemplates} />
          <Button text={buttons[2].buttonAboutPlans} />
          <Button text={buttons[3].buttonAboutSupport} />
        </div>

        <div className="w-full mt-8 flex items-center flex-col lg:flex-row justify-center gap-8">
          <Card
            title={cards[0].question}
            description={cards[0].answer}
            btnText={cards[0].buttonText}
          />
          <Card
            title={cards[1].question}
            description={cards[1].answer}
            btnText={cards[1].buttonText}
          />
        </div>
        <div className="w-full mt-8 flex items-center flex-col lg:flex-row justify-center gap-8">
          <Card
            title={cards[2].question}
            description={cards[2].answer}
            btnText={cards[2].buttonText}
          />
          <Card
            title={cards[3].question}
            description={cards[3].answer}
            btnText={cards[3].buttonText}
          />
        </div>
      </article>
      <img
        className="absolute -bottom-[5px] right-0 md:right-[50px] w-auto md:h-24 lg:h-auto h-16"
        src={landingSection5Img1}
        alt="landingSection5Img1"
      />
    </section>
  );
};

export default LandingSection5;
