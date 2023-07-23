import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuth } = useSelector(state => state.auth);

  const handleLogin = () => {
    if (isAuth) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  };

  return (
    <nav className="h-[80px] w-full flex justify-between items-center pl-[57px] pr-[72px] text-primary shadow-buttonshadow">
      <Link to="/">
        <p className="font-normal text-4xl leading-6">CertifyMe</p>
      </Link>
      <div className="h-full flex items-center">
        <ul className="flex gap-10 h-6">
          <Link to="/about">
            <li className="font-semibold text-sm leading-6">Sobre nosotros</li>
          </Link>
          <Link to="/plans">
            <li className="font-semibold text-sm leading-6">Planes</li>
          </Link>
          <li className="font-semibold text-sm leading-6">Plantillas</li>
          <Link to="/faq">
            <li className="font-semibold text-sm leading-6">Preguntas Frecuentes</li>
          </Link>
        </ul>
      </div>
      <div className="flex justify-center w-[288px]">
        <div className="flex gap-2">
          <button
            onClick={handleLogin}
            className="w-[140px] h-8 border border-secondary rounded-[10px] font-bold text-sm leading-4 text-secondary"
          >
            Ingresar
          </button>
          <Link to="/register">
            <button className="w-[140px] h-8 bg-secondary border border-secondary rounded-[10px] font-bold text-sm leading-4 shadow-buttonshadow text-white">
              Register
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
