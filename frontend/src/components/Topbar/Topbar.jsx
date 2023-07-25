import { useState } from "react";
import { BiSolidUser } from "react-icons/bi";
import { FiBell } from "react-icons/fi";
import { Link } from "react-router-dom";

const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="h-[80px] w-full flex justify-between items-center lg:px-[57px] text-primary shadow-buttonshadow relative pl-5 pr-10">
      <button className="flex-col items-center justify-center flex lg:hidden" onClick={handleClick}>
        <span
          className={`bg-black  transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-black  transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-black  transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm  ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      <Link className="hidden lg:block" to="/">
        <p className="font-normal text-4xl leading-6">CertifyMe</p>
      </Link>
      <div className="h-full flex-1 lg:flex hidden items-center justify-end pr-[80px]">
        <ul className="flex gap-10 h-6">
          <Link to="/home">
            <li className="font-semibold text-sm leading-6">Inicio</li>
          </Link>
          <Link to="/templates">
            <li className="font-semibold text-sm leading-6">Plantillas</li>
          </Link>
          <li className="font-semibold text-sm leading-6">Historial</li>
        </ul>
      </div>
      <div className="flex items-center justify-center gap-4 text-secondary">
        <FiBell className="w-[30px] h-[34px]" />
        <Link to="/account">
          <div className="w-[37px] h-[37px] rounded-full shadow-buttonshadow flex justify-center items-center">
            <BiSolidUser className="w-[30px] h-[34px]" />
          </div>
        </Link>
      </div>
      {isOpen && (
        <section className="absolute w-[75vw] py-5 bg-primary left-0 top-[85px] pl-5 z-20">
          <Link className="" to="/">
            <p className="font-bold text-3xl leading-6 mb-8 text-white">CertifyMe</p>
          </Link>
          <div className="flex justify-start items-start ">
            <ul className="flex flex-col gap-5 text-white">
              <Link to="/about">
                <li className="font-semibold text-xl leading-8">Sobre nosotros</li>
              </Link>
              <Link to="/plans">
                <li className="font-semibold text-xl leading-8">Planes</li>
              </Link>
              <Link to="/templates">
                <li className="font-semibold text-xl leading-8">Plantillas</li>
              </Link>
              <Link to="/faq">
                <li className="font-semibold text-xl leading-8">Preguntas Frecuentes</li>
              </Link>
            </ul>
          </div>
        </section>
      )}
    </nav>
  );
};

export default Topbar;
