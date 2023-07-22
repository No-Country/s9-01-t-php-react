import LandingSection1 from "../components/LandingSections/LandingSection1";
import LandingSection2 from "../components/LandingSections/LandingSection2";
import LandingSection3 from "../components/LandingSections/LandingSection3";
import LandingSection5 from "../components/LandingSections/LandingSection5";

const Landing = () => {
  return (
    <>
      <LandingSection1 />
      <LandingSection2 />
      <LandingSection3 />
      <section className="w-full mt-[195px] flex justify-center">
        <div className="w-[1006px] h-[404px] flex">
          <div className="h-full w-1/2 flex justify-start">
            <div className="w-[458px] h-[404px] bg-[#E6E6E6] rounded-[10px]"></div>
          </div>
          <div className="h-full w-1/2 flex flex-col justify-between items-end">
            <div className="h-[108px] w-[468px] bg-[#D9D9D9] rounded-[10px] flex justify-center items-center px-4">
              <p className="font-light text-base text-center">
                Lorem ipsum dolor sit amet consectetur. Vulputate arcu aliquet vehicula sed aliquet
                mattis pellentesque in iaculis. Risus amet natoque elit magna ac sem in.
              </p>
            </div>
            <div className="h-[108px] w-[468px] bg-[#D9D9D9] rounded-[10px] flex justify-center items-center px-4">
              <p className="font-light text-base text-center">
                Lorem ipsum dolor sit amet consectetur. Vulputate arcu aliquet vehicula sed aliquet
                mattis pellentesque in iaculis. Risus amet natoque elit magna ac sem in.
              </p>
            </div>
            <div className="h-[108px] w-[468px] bg-[#D9D9D9] rounded-[10px] flex justify-center items-center px-4">
              <p className="font-light text-base text-center">
                Lorem ipsum dolor sit amet consectetur. Vulputate arcu aliquet vehicula sed aliquet
                mattis pellentesque in iaculis. Risus amet natoque elit magna ac sem in.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full mt-[125px] h-[548px] bg-[#EFEFEF] flex flex-col items-center">
        <p className="font-medium text-2xl leading-6 text-center my-[51px]">Elegí tu plan</p>
        <div className="w-[910px] h-[300px] flex justify-between">
          <div className="h-[300px] w-[250px] bg-[#D9D9D9] rounded-[10px] shadow-lg shadow-black/25"></div>
          <div className="h-[300px] w-[250px] bg-[#D9D9D9] rounded-[10px] shadow-lg shadow-black/25"></div>
          <div className="h-[300px] w-[250px] bg-[#D9D9D9] rounded-[10px] shadow-lg shadow-black/25"></div>
        </div>
      </section>
      <LandingSection5 />
    </>
  );
};

export default Landing;
