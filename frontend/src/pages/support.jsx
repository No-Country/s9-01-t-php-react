import Layout from "../components/Layout/Layout";
import LayoutAccount from "../components/Layout/LayoutAccount";

const Support = () => {
  return (
    <Layout>
      <LayoutAccount>
        <div className="flex flex-col w-full h-full">
          <h1 className="font-semibold text-2xl leading-6 pl-[56px]">Soporte</h1>
          <form className="mt-[35px]">
            <div className="w-full flex flex-col gap-3">
              <label htmlFor="problem" className="pl-[53px]">
                Problema
              </label>
              <div className="pl-[94px]">
                <input
                  id="problem"
                  type="text"
                  placeholder="Placeholder Text"
                  className="w-[602px] h-[53px] rounded-[10px] border-[3px] border-[#E4E4E4] pl-4 focus:outline-[#E4E4E4]"
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-3 mt-[19px]">
              <label htmlFor="message" className="pl-[53px]">
                Mensaje
              </label>
              <div className="pl-[94px]">
                <textarea
                  id="message"
                  className="w-[602px] rounded-[10px] border-[3px] border-[#E4E4E4] pl-4 resize-none focus:outline-[#E4E4E4] pt-3"
                />
              </div>
            </div>
            <div className="w-[696px] mt-[31px] flex justify-end">
              <button className="w-[328px] h-[48px] bg-[#7F807F] text-white rounded-[10px] font-bold text-[17px] leading-6">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </LayoutAccount>
    </Layout>
  );
};

export default Support;
