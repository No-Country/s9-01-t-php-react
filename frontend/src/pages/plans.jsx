import { useSelector } from "react-redux";

const Plans = () => {
  const { plans: plansLang } = useSelector((state) => state.lang);
  const { plan1, plan2, plan3 } = plansLang;

  return (
    <main className="w-full">
      <section className="w-full my-[74px]">
        <article className="flex justify-center gap-[38px] flex-wrap">
          <div className="w-[320px] h-[462px] border-2 border-[#86E3CE] rounded-[10px] pt-6 pb-[33px] flex flex-col justify-between items-center shadow-buttonshadow">
            <h4 className="font-extrabold text-xl leading-6 text-[#86E3CE]">{plan1.title}</h4>
            <p className="font-extrabold text-base text-grey my-[21px]">{plan1.price}</p>

            <span className="w-[272px] border-[#86E3CE] border mb-[21px]" />

            <div className="flex flex-col flex-1 text-grey gap-2">
              <p className="font-extrabold text-sm leading-[17px] text-left">
                {plan1.features_title}
              </p>
              {plan1.features.map((feature, index) => (
                <p key={index} className="font-normal text-xs leading-[15px]">
                  {feature}
                </p>
              ))}
            </div>

            <button className="w-full h-12 bg-[#86E3CE] shadow-buttonshadow font-bold text-[17px] leading-6 text-white">
              {plan1.buttonLabel}
            </button>
          </div>

          {/* Plan Profesional */}
          <div className="w-[320px] h-[462px] border-2 border-[#95B8F6] rounded-[10px] pt-6 pb-[33px] flex flex-col justify-between items-center shadow-buttonshadow">
            <h4 className="font-extrabold text-xl leading-6 text-[#95B8F6]">{plan2.title}</h4>
            <p className="font-extrabold text-base text-grey my-[21px]">{plan2.price}</p>
            <span className="w-[272px] border-[#95B8F6] border mb-[21px]" />
            <div className="flex flex-col gap-2 flex-1 text-grey">
              <p className="font-extrabold text-sm leading-[17px] text-left">
                {plan2.features_title}
              </p>
              {plan2.features.map((feature, index) => (
                <p key={index} className="font-normal text-xs leading-[15px]">
                  {feature}
                </p>
              ))}
            </div>
            <button className="w-full h-12 bg-[#95B8F6] shadow-buttonshadow font-bold text-[17px] leading-6 text-white">
              {plan2.buttonLabel}
            </button>
          </div>

          {/* Plan Premium */}
          <div className="w-[320px] h-[462px] border-2 border-[#FA7865] rounded-[10px] pt-6 pb-[33px] flex flex-col justify-between items-center shadow-buttonshadow">
            <h4 className="font-extrabold text-xl leading-6 text-[#FA7865]">{plan3.title}</h4>
            <p className="font-extrabold text-base text-grey my-[21px]">{plan3.price}</p>
            <span className="w-[272px] border-[#FA7865] border mb-[21px]" />
            <div className="flex flex-col gap-2 flex-1 text-grey">
              <p className="font-extrabold text-sm leading-[17px] text-left">
                {plan3.features_title}
              </p>
              {plan3.features.map((feature, index) => (
                <p key={index} className="font-normal text-xs leading-[15px]">
                  {feature}
                </p>
              ))}
            </div>
            <button className="w-full h-12 bg-[#FA7865] shadow-buttonshadow font-bold text-[17px] leading-6 text-white">
              {plan3.buttonLabel}
            </button>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Plans;
