import LayoutLanding from "../components/Layout/LayoutLanding";

const Landing = () => {
  return (
    <LayoutLanding>
      <section className="w-full h-[430px] bg-[#EFEFEF] flex mt-2">
        <div className="w-1/2 h-full pt-[82px] pr-[52px] flex justify-end items-start">
          <div className="w-[465px] h-[203px] flex flex-col justify-between">
            <p className="text-center font-normal text-[32px] left-6">
              ¡Crea tus certificados en 3 pasos!
            </p>
            <div className="w-full flex justify-between">
              <div className="flex flex-col items-center">
                <span className="w-[35px] h-[35px] flex justify-center items-center font-normal text-base left-6 rounded-full border-[1px] border-[#646464]">
                  1
                </span>
                <p className="font-normal text-base mt-4">Elegí tu diseño</p>
                <p className="font-medium text-xl leading-6 mt-8">Fácil</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="w-[35px] h-[35px] flex justify-center items-center font-normal text-base left-6 rounded-full border-[1px] border-[#646464]">
                  1
                </span>
                <p className="font-normal text-base mt-4">Carga tu base datos</p>
                <p className="font-medium text-xl leading-6 mt-8">Rápido</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="w-[35px] h-[35px] flex justify-center items-center font-normal text-base left-6 rounded-full border-[1px] border-[#646464]">
                  1
                </span>
                <p className="font-normal text-base mt-4">Envía tus cerficados</p>
                <p className="font-medium text-xl leading-6 mt-8">Seguro</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full pt-[82px]">
          <div className="bg-[#E6E6E6] w-[504px] h-[292px]"></div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center">
        <h1 className="font-normal text-4xl leading-6 py-[61px] text-center">Nombre del sitio</h1>
        <div className="h-[245px] w-full flex gap-4 justify-between">
          <div className="w-[300px] h-full bg-[#E6E6E6]"></div>
          <div className="w-[300px] h-full bg-[#E6E6E6]"></div>
          <div className="w-[300px] h-full bg-[#E6E6E6]"></div>
          <div className="w-[300px] h-full bg-[#E6E6E6]"></div>
        </div>
      </section>
      <section className="mt-[132px] flex justify-center">
        <div className="w-[885px] h-[319px] flex justify-between">
          <div className="h-full w-[439px] flex flex-col justify-between items-center">
            <div className="w-full h-[247px] flex justify-center items-center px-8">
              <p className="text-center font-normal text-xl leading-6">
                Lorem ipsum dolor sit amet consectetur. Non nec amet pharetra lobortis enim in. Diam
                blandit sem morbi auctor augue interdum integer sem eget. Nunc tellus sit malesuada
                in eget semper quis quis pellentesque. Eget massa laoreet diam ultrices integer.{" "}
              </p>
            </div>
            <button className="w-[328px] h-[48px] rounded-[10px] bg-[#7F807F] text-white font-bold text-[17px] leading-6">
              Inicia tu versión de prueba
            </button>
          </div>
          <div className="h-full w-[386px] bg-[#E6E6E6]"></div>
        </div>
      </section>
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
    </LayoutLanding>
  );
};

export default Landing;
