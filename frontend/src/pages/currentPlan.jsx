import Layout from "../components/Layout/Layout";
import LayoutAccount from "../components/Layout/LayoutAccount";

const CurrentPlan = () => {
  return (
    <Layout>
      <LayoutAccount>
        <div className="flex flex-col w-full h-full">
          <h1 className="font-semibold text-2xl leading-6 pl-[56px]">Plan actual</h1>
          <div className="w-[712px] h-[192px] rounded-[20px] bg-[#D9D9D9] ml-[56px] mt-[36px]">
            <p className="mt-[29px] ml-[42px]">Plan profesional</p>
          </div>

          <div className="w-[712px] flex flex-col items-end ml-[56px] gap-4 mt-[35px]">
            <button className="w-[328px] h-[48px] bg-[#7F807F] rounded-[10px] font-bold text-[17px] leading-6 text-white">
              Guardar cambios
            </button>
            <button className="w-[328px] h-[48px] bg-[#7F807F] rounded-[10px] font-bold text-[17px] leading-6 text-white">
              Eliminar cuenta
            </button>
          </div>
        </div>
      </LayoutAccount>
    </Layout>
  );
};

export default CurrentPlan;
