import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { changeLang } from "../../features/langSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuth } = useSelector(state => state.auth);
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const handleChangeLang = (event) => {
    dispatch(changeLang(event.target.value));
  };


  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLogin = () => {
    if (isAuth) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  };

  const { navbar: navbarLang } = useSelector((state) => state.lang);
  const {
    aboutUs,
    plans,
    templates,
    faqs,
    login,
    register} = navbarLang;

  return (
    <nav className="h-[80px] w-full flex justify-between items-center px-5 lg:px-[57px] text-primary shadow-buttonshadow relative">
      <button className="flex-col items-center justify-center flex lg:hidden" onClick={handleClick}>
        <span
          className={`bg-primary  transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm  ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
        ></span>
        <span
          className={`bg-primary  transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"
            }`}
        ></span>
        <span
          className={`bg-primary  transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm  ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
        ></span>
      </button>
      <Link className="hidden lg:block" to="/">
        <p className="font-normal text-4xl leading-6">CertifyMe</p>
      </Link>
      <div className="h-full items-center hidden lg:flex">
        <ul className="flex gap-10 h-6">
          <Link to="/about">
            <li className="font-semibold text-sm leading-6">{aboutUs}</li>
          </Link>
          <Link to="/plans">
            <li className="font-semibold text-sm leading-6">{plans}</li>
          </Link>
          <Link to="/templates">
            <li className="font-semibold text-sm leading-6">{templates}</li>
          </Link>
          <Link to="/faq">
            <li className="font-semibold text-sm leading-6">{faqs}</li>
          </Link>

          {/* Selector para los idiomas */}
          <select
            onChange={handleChangeLang}
            className="hover:bg-slate-50 p-0"
          >
            <option value="es">ES</option>
            <option value="en">EN</option>
            <option value="br">BR</option>
          </select>
        </ul>
      </div>
      <div className="flex justify-center">
        <div className="flex gap-2">
          <button
            onClick={handleLogin}
            className="w-[140px] md:px-0 h-8 border border-secondary rounded-[10px] font-bold text-sm leading-4 text-secondary"
          >
            {login}
          </button>
          {!isAuth && (
            <Link to="/register">
              <button className="w-[140px] h-8 bg-secondary border border-secondary rounded-[10px] font-bold text-sm leading-4 shadow-buttonshadow text-white">
                {register}
              </button>
            </Link>
          )}
        </div>
      </div>
      {isOpen && (
        <section className="absolute w-[75vw] py-5 bg-primary left-0 top-[85px] pl-5 z-30 rounded-[10px]">
          <Link className="" to="/">
            <p onClick={handleClick} className="font-bold text-3xl leading-6 mb-8 text-white">
              CertifyMe
            </p>
          </Link>
          <div className="flex justify-start items-start ">
            <ul className="flex flex-col gap-2 text-white">
              <Link to="/about">
                <li onClick={handleClick} className="font-medium text-sm leading-6">
                  Sobre nosotros
                </li>
              </Link>
              <Link to="/plans">
                <li onClick={handleClick} className="font-medium text-sm leading-6">
                  Planes
                </li>
              </Link>
              <Link to="/templates">
                <li onClick={handleClick} className="font-medium text-sm leading-6">
                  Plantillas
                </li>
              </Link>
              <Link to="/faq">
                <li onClick={handleClick} className="font-medium text-sm leading-6">
                  Preguntas Frecuentes
                </li>
              </Link>
            </ul>
          </div>
        </section>
      )}
    </nav>
  );
};

export default Navbar;
