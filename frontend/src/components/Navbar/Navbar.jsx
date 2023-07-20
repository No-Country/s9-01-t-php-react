import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isAuth } = useSelector(state => state.auth);
  return (
    <nav className="h-[80px] w-full bg-primary flex justify-between items-center pl-[80px] pr-[72px] text-white">
      <Link to="/">
        <p className="font-normal text-4xl leading-6">CertifyMe</p>
      </Link>
      <div className="h-full flex items-end pb-6">
        <ul className="flex gap-10 h-6">
          <Link to="/about">
            <li className="font-normal text-sm left-6">Sobre nosotros</li>
          </Link>
          <li className="font-normal text-sm left-6">Planes</li>
          <li className="font-normal text-sm left-6">Plantillas</li>
          <Link to="/faq">
            <li className="font-normal text-sm left-6">Preguntas Frecuentes</li>
          </Link>
        </ul>
      </div>
      <div className="flex justify-center w-[288px]">
        {/* {isAuth ? (
          <Link to="/home">
            <button className="w-[140px] h-8 bg-secondary border border-secondary rounded-[10px] font-bold text-sm leading-4 shadow-buttonshadow">
              Ingresar
            </button>
          </Link>
        ) : ( */}
        <div className="flex gap-2">
          <Link to="/login">
            <button className="w-[140px] h-8 border border-white rounded-[10px] font-bold text-sm leading-4">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="w-[140px] h-8 bg-secondary border border-secondary rounded-[10px] font-bold text-sm leading-4 shadow-buttonshadow">
              Register
            </button>
          </Link>
        </div>
        {/* )} */}
      </div>
    </nav>
  );
};

export default Navbar;
