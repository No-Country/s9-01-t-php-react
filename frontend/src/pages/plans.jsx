const Plans = () => {
  return (
    <main className="w-full">
      <section className="w-full my-[74px]">
        <article className="flex justify-center gap-[38px]">
          <div className="w-[320px] h-[462px] border-2 border-[#86E3CE] rounded-[10px] pt-6 pb-[33px] flex flex-col justify-between items-center shadow-buttonshadow">
            <h4 className="font-extrabold text-xl leading-6 text-[#86E3CE]">Plan de prueba</h4>
            <p className="font-extrabold text-base text-grey my-[21px]">Gratis</p>
            <span className="w-[272px] border-[#86E3CE] border mb-[21px]" />
            <div className="flex flex-col flex-1 text-grey gap-2">
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
            <button className="w-full h-12 bg-[#86E3CE] shadow-buttonshadow font-bold text-[17px] leading-6 text-white">
              Suscribirse
            </button>
          </div>
          <div className="w-[320px] h-[462px] border-2 border-[#95B8F6] rounded-[10px] pt-6 pb-[33px] flex flex-col justify-between items-center shadow-buttonshadow">
            <h4 className="font-extrabold text-xl leading-6 text-[#95B8F6]">Plan profesional</h4>
            <p className="font-extrabold text-base text-grey my-[21px]">$ 10.000 ARS por mes</p>
            <span className="w-[272px] border-[#95B8F6] border mb-[21px]" />
            <div className="flex flex-col gap-2 flex-1 text-grey">
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
            <button className="w-full h-12 bg-[#95B8F6] shadow-buttonshadow font-bold text-[17px] leading-6 text-white">
              Suscribirse
            </button>
          </div>
          <div className="w-[320px] h-[462px] border-2 border-[#FA7865] rounded-[10px] pt-6 pb-[33px] flex flex-col justify-between items-center shadow-buttonshadow">
            <h4 className="font-extrabold text-xl leading-6 text-[#FA7865]">Plan profesional</h4>
            <p className="font-extrabold text-base text-grey my-[21px]"> $ 25.000 ARS por mes</p>
            <span className="w-[272px] border-[#FA7865] border mb-[21px]" />
            <div className="flex flex-col gap-2 flex-1 text-grey">
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
            <button className="w-full h-12 bg-[#FA7865] shadow-buttonshadow font-bold text-[17px] leading-6 text-white">
              Suscribirse
            </button>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Plans;
