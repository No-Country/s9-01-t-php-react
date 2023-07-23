import { BiSolidUser } from "react-icons/bi";
import { FiBell } from "react-icons/fi";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <nav className="h-[80px] w-full flex justify-between items-center pl-[57px] pr-[72px] text-primary shadow-buttonshadow">
      <Link to="/">
        <p className="font-normal text-4xl leading-6">CertifyMe</p>
      </Link>
      <div className="h-full flex-1 flex items-center justify-end pr-[80px]">
        <ul className="flex gap-10 h-6">
          <Link to="/home">
            <li className="font-semibold text-sm leading-6">Inicio</li>
          </Link>
          <li className="font-semibold text-sm leading-6">Plantillas</li>
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
    </nav>
  );
};

export default Topbar;
