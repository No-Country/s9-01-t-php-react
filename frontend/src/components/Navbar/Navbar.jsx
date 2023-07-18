import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isAuth } = useSelector(state => state.auth);
  return (
    <nav className="h-[80px] w-full bg-[#D9D9D9] flex justify-between items-end pb-3 pr-[80px] pl-[42px]">
      <Link to="/">
        <div className="w-[143px] h-10 bg-[#E6E6E6]"></div>
      </Link>
      <ul className="flex gap-10 pb-2">
        <li className="font-normal text-sm left-6">Sobre nosotros</li>
        <li className="font-normal text-sm left-6">Planes</li>
        <li className="font-normal text-sm left-6">Plantillas</li>
        <Link to="/faq">
          <li className="font-normal text-sm left-6">Preguntas Frecuentes</li>
        </Link>
      </ul>
      <div className="flex gap-2 text-white">
        {isAuth ? (
          <Link to="/home">
            <button className="w-[140px] h-8 border border-[#959595] rounded-[10px] font-normal text-sm leading-6">
              Ingresar
            </button>
          </Link>
        ) : (
          <>
            <Link to="/login">
              <button className="w-[140px] h-8 border border-[#959595] rounded-[10px] font-normal text-sm leading-6">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="w-[140px] h-8 bg-[#7F807F] border border-[#959595] rounded-[10px] font-normal text-sm leading-6">
                Register
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
