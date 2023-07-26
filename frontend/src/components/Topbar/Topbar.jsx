import { useState } from "react";
import { BiSolidUser } from "react-icons/bi";
import { FiBell } from "react-icons/fi";
import { Link } from "react-router-dom";
import ProfileImg1 from "../../../public/img/profile/profile-img1.svg";
import ProfileImg2 from "../../../public/img/profile/profile-img2.svg";
import ProfileImg3 from "../../../public/img/profile/profile-img3.svg";

const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [notification, setNotification] = useState(false);

  const handleNotification = () => {
    setNotification(!notification);
  };

  const handleMenu = () => {
    setMenu(!menu);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="h-[80px] w-full flex justify-between items-center lg:px-[57px] text-primary shadow-buttonshadow relative pl-5 pr-10">
      <button className="flex-col items-center justify-center flex lg:hidden" onClick={handleClick}>
        <span
          className={`bg-primary  transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-primary  transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-primary  transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm  ${
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
        <div onClick={handleNotification} className="relative cursor-pointer">
          <FiBell className="w-[30px] h-[34px]" />
          {notification && (
            <div className="w-[438px] h-[239px] bg-primary text-white absolute top-[62px] right-0 flex flex-col rounded-[10px] rounded-tr-none z-30">
              <ul className="font-semibold text-xl leading-[35px] pl-[27px] mt-[15px] flex flex-col gap-4">
                <li className="flex justify-start items-start">
                  <img className="mt-[4px]" src={ProfileImg1} alt="ProfileImg1" />
                  <div className="flex flex-col pl-[25px]">
                    <p className="font-semibold text-sm leading-6">Marketing digital</p>
                    <p className="font-medium text-base leading-6">
                      Javier Gonzales solicito una corrección
                    </p>
                  </div>
                </li>
                <li className="flex justify-start items-start">
                  <img className="mt-[4px]" src={ProfileImg2} alt="ProfileImg1" />
                  <div className="flex flex-col pl-[25px]">
                    <p className="font-semibold text-sm leading-6">Marketing digital</p>
                    <p className="font-medium text-base leading-6">
                      Javier Gonzales solicito una corrección
                    </p>
                  </div>
                </li>
                <li className="flex justify-start items-start">
                  <img className="mt-[4px]" src={ProfileImg3} alt="ProfileImg1" />
                  <div className="flex flex-col pl-[25px]">
                    <p className="font-semibold text-sm leading-6">Marketing digital</p>
                    <p className="font-medium text-base leading-6">
                      Javier Gonzales solicito una corrección
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div
          onClick={handleMenu}
          className="w-[37px] h-[37px] rounded-full shadow-buttonshadow flex justify-center items-center cursor-pointer"
        >
          <BiSolidUser className="w-[30px] h-[34px]" />
        </div>
      </div>
      {isOpen && (
        <section className="absolute w-[75vw] py-5 bg-primary left-0 top-[85px] pl-5 z-20 rounded-[10px]">
          <Link className="" to="/">
            <p onClick={handleClick} className="font-bold text-3xl leading-6 mb-8 text-white">
              CertifyMe
            </p>
          </Link>
          <div className="flex justify-start items-start ">
            <ul className="flex flex-col gap-2 text-white">
              <Link to="/home">
                <li onClick={handleClick} className="font-medium text-sm leading-6">
                  Inicio
                </li>
              </Link>
              <Link to="/home">
                <li onClick={handleClick} className="font-medium text-sm leading-6">
                  Plantillas
                </li>
              </Link>
              <li onClick={handleClick} className="font-medium text-sm leading-6">
                Historial
              </li>
              <li onClick={handleClick} className="font-semibold text-sm leading-6">
                Cerrar sesión
              </li>
            </ul>
          </div>
        </section>
      )}
      {menu && (
        <div className="w-[298px] h-[239px] bg-primary text-white absolute top-[85px] right-0 flex flex-col rounded-[10px] rounded-tr-none z-30">
          <ul className="font-semibold text-xl leading-[35px] pl-[35px] mt-[15px] gap-4">
            <Link to="/account">
              <li onClick={handleMenu}>Ir a mi cuenta</li>
            </Link>
            <li onClick={handleMenu}>Soporte</li>
            <li onClick={handleMenu}>Plan actual</li>
          </ul>
          <p className="font-semibold text-[15px] leading-[35px] underline pl-[35px] mt-[52px]">
            Cerrar sesión
          </p>
        </div>
      )}
    </nav>
  );
};

export default Topbar;
