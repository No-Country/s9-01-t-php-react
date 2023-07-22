const LandingSection2 = () => {
  return (
    <section className="w-full mt-[122px] mb-[175px]">
      <h2 className="font-bold text-[64px] leading-[77px] text-primary text-start pl-[79px]">
        CertifyMe
      </h2>
      <div className="w-full flex justify-center mt-10">
        <div className="w-[994px] h-[319px] flex">
          <div className="flex-1">
            <div className="text-grey w-[439px] h-full flex flex-col justify-between items-center">
              <div className="h-[247px] w-full flex flex-col justify-center items-center px-10">
                <p className="font-bold text-[17px] leading-6 text-center">
                  Diseña, comparte, celebra.
                </p>
                <p className="font-medium text-[17px] leading-6 text-center">
                  Transforma la manera en que otorgas reconocimientos con nuestra página de
                  generación de certificados en línea.
                </p>
                <p className="font-bold text-[17px] leading-6 text-center">
                  Ahorra tiempo y crea algo especial.
                </p>
              </div>
              <button className="shadow-buttonshadow w-[328px] h-[48px] bg-beige rounded-[10px] text-white font-bold text-[17px] leading-6">
                Inicia tu versión de prueba
              </button>
            </div>
          </div>
          <div className="w-[515px] bg-[#E6E6E6]"></div>
        </div>
      </div>
    </section>
  );
};

export default LandingSection2;
