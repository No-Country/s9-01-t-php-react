import { Link } from "react-router-dom";
import Carousel from "../components/Carousel/Carousel";

const Home = () => {
  return (
    <main className="w-full">
      <div className="h-[127px] w-full flex justify-center md:justify-end items-center md:pr-[80px]">
        <Link to="/dashboard">
          <button className="w-full w-[262px] h-[47px] bg-secondary text-white font-bold text-xl leading-6 rounded-[10px] shadow-buttonshadow">
            Crear un certificado
          </button>
        </Link>
      </div>
      <section className=" flex justify-center">
        <article className="w-full md:w-[90vw] lg:w-[1120px] flex-col items-center bg-[#95B8F6] rounded-[20px] py-5 md:px-[20px]">
          <div className="flex items-center md:justify-between md:flex-row flex-col gap-2 md:gap-0">
            <h4 className="font-bold text-2xl leading-[29px] text-white">
              Últimas plantillas agregadas
            </h4>
            <button className="h-[34px] w-[127px] border-[1px] rounded-[10px] bg-white shadow-buttonshadow">
              Ver más
            </button>
          </div>
          <div className="mt-[34px]">
            <Carousel />
          </div>
        </article>
      </section>
      <section className="w-full flex justify-center mt-[31px]">
        <article className="w-full md:w-[90vw] lf:w-[1120px]">
          <p className="font-semibold text-2xl leading-[29px] md:pl-6 mb-6 text-primary text-center md:text-left">
            Historial
          </p>
          <div className="w-full">
            <Carousel />
          </div>
        </article>
      </section>
      <section className="w-full flex justify-center mt-[60px] mb-12">
        <article className="w-full md:w-[90vw] lf:w-[1120px]">
          <p className="font-semibold text-2xl leading-[29px] md:pl-6 mb-6 text-primary text-center md:text-left">
            Certificados en curso
          </p>
          <div className="w-full">
            <Carousel />
          </div>
        </article>
      </section>
    </main>
  );
};

export default Home;
