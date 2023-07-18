import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";

const Account = () => {
  return (
    <Layout>
      <section className="px-[80px] my-[80px] w-full h-[503px] flex">
        <div className="w-[357px] h-[full] bg-[#E6E6E6] rounded-[30px] pt-[47px] pl-[57px]">
          <div className="flex flex-col justify-between items-start gap-6">
            <Link to="/account">
              <p className="font-semibold text-sm leading-6">Mi cuenta</p>
            </Link>
            <p className="font-semibold text-sm leading-6">Plan actual</p>
            <p className="font-semibold text-sm leading-6">Historial de pagos</p>
            <p className="font-semibold text-sm leading-6">Soporte</p>
          </div>
        </div>
        <div className="flex-1 flex flex-col w-full h-full">
          <h1 className="font-semibold text-2xl leading-6 pl-[56px]">Mi cuenta</h1>
          <div className="flex items-center justify-between px-[85px] mt-[45px]">
            <p className="font-normal text-sm left-6">Editar mail</p>
            <input
              type="text"
              placeholder="Placeholder Text"
              className="w-[486px] h-[48px] rounded-[10px] border-[3px] border-[#E4E4E4] pl-4"
            />
          </div>
          <div className="flex items-center justify-between px-[85px] mt-[24px]">
            <p className="font-normal text-sm left-6">Cambiar contraseña</p>
            <input
              type="text"
              placeholder="Placeholder Text"
              className="w-[486px] h-[48px] rounded-[10px] border-[3px] border-[#E4E4E4] pl-4"
            />
          </div>
          <div className="w-full flex justify-end pr-[85px]">
            <button className="w-[328px] h-[48px] bg-[#7F807F] rounded-[10px] font-bold text-[17px] leading-6 text-white mt-[60px]">
              Guardar cambios
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Account;
