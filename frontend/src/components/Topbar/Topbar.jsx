import { BiSolidUser } from "react-icons/bi";
import { FiBell } from "react-icons/fi";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <nav className="h-[80px] w-full bg-[#D9D9D9] flex justify-between items-end pr-[80px] pl-[42px]">
      <Link to="/">
        <div className="w-[143px] h-10 bg-[#E6E6E6] mb-[22px]"></div>
      </Link>
      <ul className="flex-1 h-full flex justify-end items-end gap-9 pr-[57px] pb-[13px]">
        <Link to="/home">
          <li className="font-medium text-xl left-6 cursor-pointer">Inicio</li>
        </Link>
        <li className="font-medium text-xl left-6 cursor-pointer">Plantillas</li>
        <li className="font-medium text-xl left-6 cursor-pointer">Historial</li>
      </ul>
      <div className="flex pb-2">
        <div className="w-10 h-10 flex justify-center items-center cursor-pointer">
          <FiBell className="w-[30px] h-[34px]" />
        </div>

        <Link to="/profile">
          <div className="w-10 h-10 flex justify-center items-center cursor-pointer">
            <BiSolidUser className="w-[30px] h-[34px]" />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Topbar;
