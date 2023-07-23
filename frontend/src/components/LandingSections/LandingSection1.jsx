import landingSection1Img4 from "../../../public/img/landing/landing-section1-img4.svg";
import landingSection1Img1 from "../../../public/img/landing/landing-section1-img1.svg";
import landingImg2 from "../../../public/img/landing/landing-img2.svg";

const LandingSection1 = () => {
  return (
    <section className="w-full mt-[45px] relative">
      <img className="absolute top-[160px] -z-10 right-0" src={landingImg2} alt="landingImg2" />
      <h1 className="font-bold text-4xl leading-[56px] text-grey text-center">
        Transforma la manera en que otorgas reconocimientos
      </h1>
      <div className="mt-[38px] w-full flex justify-center">
        <div className="w-[1120px] h-[391px] border-primary border rounded-3xl flex flex-col justify-between items-center pt-8 pb-11 relative">
          <img
            className="absolute z-10 -right-6 -bottom-8"
            src={landingSection1Img4}
            alt="landingSection1Img4"
          />
          <p className="text-primary font-semibold text-2xl leading-[29px]">Elegí una plantilla</p>
          <img className="" src={landingSection1Img1} alt="landingSection1Img1" />
          <div className="flex gap-8">
            <button className="w-[50px] h-4 rounded-[10px] shadow-buttonshadow bg-secondary"></button>
            <button className="w-[50px] h-4 rounded-[10px] border border-secondary"></button>
            <button className="w-[50px] h-4 rounded-[10px] border border-secondary"></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingSection1;
