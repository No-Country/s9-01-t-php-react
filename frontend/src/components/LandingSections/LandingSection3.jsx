import landingSection3Img1 from "../../../public/img/landing/landing-section3-img1.svg";
import landingSection3Img2 from "../../../public/img/landing/landing-section3-img2.svg";
import landingSection3Img3 from "../../../public/img/landing/landing-section3-img3.svg";
import landingSection3Img4 from "../../../public/img/landing/landing-section3-img4.svg";
import landingSection3Img5 from "../../../public/img/landing/landing-section3-img5.svg";

const LandingSection3 = () => {
  return (
    <section className="w-full pt-[152px] bg-[#FBD59B]">
      <article className="w-full flex justify-between px-[112px]">
        <div className="w-[600px] h-[193px] rounded-[10px] bg-beige text-white py-6 px-8 shadow-buttonshadow">
          <p className="font-extrabold text-2xl leading-[29px]">
            ¿Tenes poco tiempo para entregar un reconocimiento?
          </p>
          <p className="font-medium text-2xl leading-[29px]">
            Nuestras plantillas de certificados ya están listas para usarlas - tan sólo tienes que
            adaptarlas a tus propios textos.
          </p>
        </div>
        <img src={landingSection3Img1} alt="landingSection3Img1" />
      </article>
      <article className="w-full flex justify-end items-center px-[112px] gap-[98px] mt-[146px]">
        <img src={landingSection3Img2} alt="landingSection3Img2" />
        <div className="relative w-[600px] h-[135px] rounded-[10px] bg-beige text-white py-6 px-8 shadow-buttonshadow">
          <img
            className="absolute -right-12 -top-[145px]"
            src={landingSection3Img4}
            alt="landingSection3Img4"
          />
          <p className="font-extrabold text-2xl leading-[29px] text-right">
            Crea cientos de certificados en minutos.
          </p>
          <p className="font-medium text-2xl leading-[29px] text-right">
            Podés subir tu archivo excel y el sistema cargar todos los datos de forma automática.
          </p>
        </div>
      </article>
      <article className="w-full flex justify-start items-center mt-[102px] px-[112px] gap-[83px] mb-[155px]">
        <div className="relative w-[600px] h-[135px] rounded-[10px] bg-beige text-white py-6 px-8 shadow-buttonshadow">
          <img
            className="absolute -left-[40px] -top-[135px]"
            src={landingSection3Img5}
            alt="landingSection3Img5"
          />
          <p className="font-extrabold text-2xl leading-[29px] text-left">
            Descarga tu certificado con calidad de impresión
          </p>
          <p className="font-medium text-2xl leading-[29px] text-left">
            Exporta tu certificado como un archivo PNG, JPG o PDF de alta calidad.
          </p>
        </div>
        <img src={landingSection3Img3} alt="landingSection3Img3" />
      </article>
    </section>
  );
};

export default LandingSection3;
