import landingSection5Img1 from "../../../public/img/landing/landing-section5-img1.svg";
import { BsChevronRight } from "react-icons/bs";

const LandingSection5 = () => {
  return (
    <section className="w-full relative pb-[200px]">
      <h2 className="text-left pl-[78px] font-bold text-4xl leading-6 text-grey mt-[94px]">
        Preguntas frecuentes
      </h2>
      <article className="w-full flex flex-col items-center">
        <div className="flex gap-4 mt-[71px]">
          <button className="w-[200px] h-10 rounded-[10px] font-semibold text-sm leading-6 bg-primary shadow-buttonshadow text-white">
            Sobre CertifyMe
          </button>
          <button className="w-[200px] h-10 rounded-[10px] font-semibold text-sm leading-6 border border-primary text-grey">
            Sobre las plantillas
          </button>
          <button className="w-[200px] h-10 rounded-[10px] font-semibold text-sm leading-6 border border-primary text-grey">
            Sobre los planes
          </button>
          <button className="w-[200px] h-10 rounded-[10px] font-semibold text-sm leading-6 border border-primary text-grey">
            Soporte
          </button>
        </div>
        <div className="w-full mt-[53px] flex justify-center gap-8">
          <div className="w-[500px] h-[180px] rounded-[10px] border border-grey px-6 pt-5">
            <p className="font-normal text-xl leading-6 text-grey mb-[6px]">
              ¿Qué es este servicio de generación de certificados online?
            </p>
            <p className="font-normal text-sm left-6 text-grey mb-5">
              Conoce como se creo iCertify y al equipo detrás de la plataforma.
            </p>
            <div className="w-full flex justify-end">
              <button className="rounded-[10px] w-[103px] h-[32px]  bg-primary flex justify-center items-center text-white">
                <p className="font-bold text-sm leading-[17px]">Ver más</p>
                <BsChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="w-[500px] h-[180px] rounded-[10px] border border-grey px-6 pt-5">
            <p className="font-normal text-xl leading-6 text-grey mb-[6px]">
              ¿Qué es este servicio de generación de certificados online?
            </p>
            <p className="font-normal text-sm left-6 text-grey mb-5">
              Conoce como se creo iCertify y al equipo detrás de la plataforma.
            </p>
            <div className="w-full flex justify-end">
              <button className="rounded-[10px] w-[103px] h-[32px]  bg-primary flex justify-center items-center text-white">
                <p className="font-bold text-sm leading-[17px]">Ver más</p>
                <BsChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="w-full mt-8 flex justify-center gap-8">
          <div className="w-[500px] h-[180px] rounded-[10px] border border-grey px-6 pt-5">
            <p className="font-normal text-xl leading-6 text-grey mb-[6px]">
              ¿Qué es este servicio de generación de certificados online?
            </p>
            <p className="font-normal text-sm left-6 text-grey mb-5">
              Conoce como se creo iCertify y al equipo detrás de la plataforma.
            </p>
            <div className="w-full flex justify-end">
              <button className="rounded-[10px] w-[103px] h-[32px]  bg-primary flex justify-center items-center text-white">
                <p className="font-bold text-sm leading-[17px]">Ver más</p>
                <BsChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="w-[500px] h-[180px] rounded-[10px] border border-grey px-6 pt-5">
            <p className="font-normal text-xl leading-6 text-grey mb-[6px]">
              ¿Qué es este servicio de generación de certificados online?
            </p>
            <p className="font-normal text-sm left-6 text-grey mb-5">
              Conoce como se creo iCertify y al equipo detrás de la plataforma.
            </p>
            <div className="w-full flex justify-end">
              <button className="rounded-[10px] w-[103px] h-[32px]  bg-primary flex justify-center items-center text-white">
                <p className="font-bold text-sm leading-[17px]">Ver más</p>
                <BsChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </article>
      <img
        className="absolute -bottom-[5px] right-[50px]"
        src={landingSection5Img1}
        alt="landingSection5Img1"
      />
    </section>
  );
};

export default LandingSection5;
