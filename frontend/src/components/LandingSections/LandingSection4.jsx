import { useSelector } from "react-redux";
import landingSection4Img1 from "../../../public/img/landing/landing-section4-img1.svg";
import landingSection4Img2 from "../../../public/img/landing/landing-section4-img2.svg";

const PlanCard = ({ title, price, featuresTitle, features, buttonLabel, disabled }) => {
  return (
    <div className="w-[320px] h-[526px] bg-[#797979] flex flex-col items-center pt-6 pb-7 rounded-[10px] shadow-buttonshadow">
      <p className="font-extrabold text-[17px] leading-6 mb-[21px]">{title}</p>
      <p className="font-extrabold text-base w-[101px] text-center">{price}</p>
      <span className="w-[130px] border border-white my-[21px]" />
      <div className="w-[220px] flex flex-col gap-[6px] flex-1">
        <p className="font-extrabold text-sm leading-[17px] text-left">{featuresTitle}</p>
        {features.map((feature, index) => (
          <p key={index} className="font-normal text-xs leading-[15px]">
            {feature}
          </p>
        ))}
      </div>
      <button
        className={`font-bold text-[17px] leading-6 w-full h-12 shadow-buttonshadow ${
          disabled ? "bg-gray-300" : "bg-beige"
        }`}
        disabled={disabled}
      >
        {buttonLabel}
      </button>
    </div>
  );
};

const LandingSection4 = () => {
  const { landingSection4: landingSection4Lang } = useSelector(state => state.lang);
  const { sectionTitle, description, selectPlanText, question, contact } = landingSection4Lang;

  const { plans: plansLang } = useSelector(state => state.lang);
  const { plan1, plan2, plan3 } = plansLang;

  return (
    <section className="w-full flex flex-col items-center text-white">
      <h2 className="font-semibold text-lg md:text-4xl leading-[45px] text-primary mt-[50px] ">
        {sectionTitle}
      </h2>
      <div className="w-full md:w-[526px] h-[96px] shadow-buttonshadow rounded-[10px] flex items-center justify-center px-[50px]">
        <p className="text-center font-semibold text-sm md:text-xl leading-6 text-grey">
          {description}
        </p>
      </div>
      <img className="w-full h-auto" src={landingSection4Img1} alt="landingSection4Img1" />
      <div className="w-full bg-[#95B8F6] flex flex-col items-center">
        <h3 className="font-extrabold text-lg md:text-[32px] leading-[39px] text-center mb-[50px]">
          {selectPlanText}
        </h3>
        <article className="mb-[41px] w-full flex flex-wrap justify-center gap-[38px]">
          <PlanCard {...plan1} />
          <PlanCard {...plan2} disabled={true} />
          <PlanCard {...plan3} disabled={true} />
        </article>
        <h4 className="font-bold text-lg md:text-2xl leading-[30px] text-center mb-5">
          {question}
        </h4>
        <button className="shadow-buttonshadow w-full md:w-[328px] h-[48px] bg-beige rounded-[10px] text-white font-bold text-[17px] leading-6 mb-2">
          {contact}
        </button>
      </div>
      <img
        className="w-full h-auto border-none"
        src={landingSection4Img2}
        alt="landingSection4Img2"
      />
    </section>
  );
};

export default LandingSection4;
