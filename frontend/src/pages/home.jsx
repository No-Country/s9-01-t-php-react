import { Link } from "react-router-dom";
import Carousel from "../components/Carousel/Carousel";

const Home = () => {
  return (
    <>
      <div className="h-[127px] w-full flex justify-end items-center pr-[80px]">
        <Link to="/dashboard">
          <button className="w-[264px] h-[47px] bg-[#7F807F] text-white font-bold text-xl leading-6 rounded-[10px]">
            Crear un certificado
          </button>
        </Link>
      </div>
      <section className="w-full flex-col items-center">
        <div className="flex justify-between pr-[80px] pl-[80px]">
          <p className="font-bold text-2xl leading-6">Últimas plantillas agregadas</p>
          <button className="h-[34px] w-[127px] border-[1px] rounded-[10px]">Ver más</button>
        </div>
        <div className="mt-[34px]">
          <Carousel />
        </div>
      </section>
      <section className="w-full pl-[80px] flex-col items-center mt-[76px]">
        <p className="font-bold text-2xl leading-6">Mis plantillas</p>
        <div className="h-[245px] w-[980px] flex justify-between mt-10">
          <div className="h-[245px] w-[300px] bg-[#E6E6E6] rounded-[25px]"></div>
          <div className="h-[245px] w-[300px] bg-[#E6E6E6] rounded-[25px]"></div>
          <div className="h-[245px] w-[300px] bg-[#E6E6E6] rounded-[25px]"></div>
        </div>
      </section>
      <section className="w-full pl-[80px] flex-col items-center mt-[76px] mb-[140px]">
        <p className="font-bold text-2xl leading-6">Certificados recientes</p>
        <div className="h-[245px] w-[980px] flex justify-between mt-10">
          <div className="h-[245px] w-[300px] bg-[#E6E6E6] rounded-[25px]"></div>
          <div className="h-[245px] w-[300px] bg-[#E6E6E6] rounded-[25px]"></div>
          <div className="h-[245px] w-[300px] bg-[#E6E6E6] rounded-[25px]"></div>
        </div>
      </section>
    </>
  );
};

export default Home;
