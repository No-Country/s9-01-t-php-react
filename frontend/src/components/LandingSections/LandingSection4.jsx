import landingSection4Img1 from "../../../public/img/landing/landing-section4-img1.svg";
import landingSection4Img2 from "../../../public/img/landing/landing-section4-img2.svg";

const LandingSection4 = () => {
  return (
    <section className="w-full flex flex-col items-center text-white">
      <h2 className="font-semibold text-lg md:text-4xl leading-[45px] text-primary mt-[50px] ">
        ¡Celebra logros con estilo!
      </h2>
      <div className="w-full md:w-[526px] h-[96px] shadow-buttonshadow rounded-[10px] flex items-center justify-center px-[50px]">
        <p className="text-center font-semibold text-sm md:text-xl leading-6 text-grey">
          Fácil, seguro y confiable. Ahorra tiempo y crea algo verdaderamente especial.
        </p>
      </div>
      <img className="w-full h-auto" src={landingSection4Img1} alt="landingSection4Img1" />
      <div className="w-full bg-[#95B8F6] flex flex-col items-center">
        <h3 className="font-extrabold text-lg md:text-[32px] leading-[39px] text-center mb-[50px]">
          Selecciona tu plan ideal
        </h3>
        <article className="mb-[41px] w-full flex flex-wrap justify-center gap-[38px]">
          <div className="w-[320px] h-[526px] bg-[#797979] flex flex-col items-center pt-6 pb-7 rounded-[10px] shadow-buttonshadow">
            <p className="font-extrabold text-[17px] leading-6 mb-[21px]">Plan de prueba</p>
            <p className="font-extrabold text-base w-[101px] text-center mb-[]">Gratis</p>
            <span className="w-[130px] border border-white my-[21px]" />
            <div className="w-[220px] flex flex-col gap-[6px] flex-1">
              <p className="font-extrabold text-sm leading-[17px] text-left">
                Hasta 25 certificados personalizados
              </p>
              <div>
                <p className="font-normal text-xs leading-[15px]">Carga de hasta 4 imágenes</p>
                <p className="font-normal text-xs leading-[15px]">(logos incluidos)</p>
              </div>
              <div>
                <p className="font-normal text-xs leading-[15px]">Carga de datos en .xsl</p>
                <p className="font-normal text-xs leading-[15px]">
                  (ver más sobre la carga de datos)
                </p>
              </div>
              <p className="font-normal text-xs leading-[15px]">Envío instantáneo </p>
              <p className="font-normal text-xs leading-[15px]">Descarga disponible en PDF y JPG</p>
            </div>
            <button className="font-bold text-[17px] leading-6 w-full h-12 shadow-buttonshadow bg-beige">
              Suscribirse
            </button>
          </div>
          <div className="w-[320px] h-[526px] bg-[#797979] flex flex-col items-center pt-6 pb-7 rounded-[10px] shadow-buttonshadow">
            <p className="font-extrabold text-[17px] leading-6 mb-[21px]">Plan profesional</p>
            <p className="font-extrabold text-base w-[101px] text-center mb-[]">
              $ 10.000 ARS por mes
            </p>
            <span className="w-[130px] border border-white my-[21px]" />
            <div className="w-[220px] flex flex-col gap-[6px] flex-1">
              <p className="font-extrabold text-sm leading-[17px] text-left">
                Hasta 250 certificados personalizados
              </p>
              <div>
                <p className="font-normal text-xs leading-[15px]">Carga de hasta 500 imágenes</p>
                <p className="font-normal text-xs leading-[15px]">(logos incluidos)</p>
              </div>
              <div>
                <p className="font-normal text-xs leading-[15px]">Carga de datos en .xsl</p>
                <p className="font-normal text-xs leading-[15px]">
                  (ver más sobre la carga de datos)
                </p>
              </div>
              <p className="font-normal text-xs leading-[15px]">Envío instantáneo </p>
              <p className="font-normal text-xs leading-[15px]">Descarga disponible en PDF y JPG</p>
              <p className="font-normal text-xs leading-[15px]">
                Ordenamiento de certificados por carpetas
              </p>
              <p className="font-normal text-xs leading-[15px]">Almacenaje en la nube</p>
            </div>
            <button className="font-bold text-[17px] leading-6 w-full h-12 shadow-buttonshadow bg-beige">
              Comprar
            </button>
          </div>
          <div className="w-[320px] h-[526px] bg-[#797979] flex flex-col items-center pt-6 pb-7 rounded-[10px] shadow-buttonshadow">
            <p className="font-extrabold text-[17px] leading-6 mb-[21px]">Plan profesional</p>
            <p className="font-extrabold text-base w-[101px] text-center mb-[]">
              $ 25.000 ARS por mes
            </p>
            <span className="w-[130px] border border-white my-[21px]" />
            <div className="w-[220px] flex flex-col gap-[6px] flex-1">
              <p className="font-extrabold text-sm leading-[17px] text-left">
                Hasta 1000 certificados personalizados
              </p>
              <div>
                <p className="font-normal text-xs leading-[15px]">Carga de hasta 2000 imágenes</p>
                <p className="font-normal text-xs leading-[15px]">(logos incluidos)</p>
              </div>
              <div>
                <p className="font-normal text-xs leading-[15px]">Carga de datos en .xsl</p>
                <p className="font-normal text-xs leading-[15px]">
                  (ver más sobre la carga de datos)
                </p>
              </div>
              <p className="font-normal text-xs leading-[15px]">Envío instantáneo </p>
              <p className="font-normal text-xs leading-[15px]">Descarga disponible en PDF y JPG</p>
              <p className="font-normal text-xs leading-[15px]">
                Ordenamiento de certificados por carpetas
              </p>
              <p className="font-normal text-xs leading-[15px]">Almacenaje en la nube</p>
              <p className="font-normal text-xs leading-[15px]">Soporte las 24 horas</p>
              <p className="font-normal text-xs leading-[15px]">
                Servicio personalizado de hasta 2 diseños
              </p>
            </div>
            <button className="font-bold text-[17px] leading-6 w-full h-12 shadow-buttonshadow bg-beige">
              Comprar
            </button>
          </div>
        </article>
        <h4 className="font-bold text-lg md:text-2xl leading-[30px] text-center mb-5">
          ¿Ningún plan se ajusta a tus necesidades?
        </h4>
        <button className="shadow-buttonshadow w-full md:w-[328px] h-[48px] bg-beige rounded-[10px] text-white font-bold text-[17px] leading-6 mb-2">
          ¡Contactanos!
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
