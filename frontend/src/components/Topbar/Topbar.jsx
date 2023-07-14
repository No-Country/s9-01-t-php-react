import { BiSolidUser } from "react-icons/bi";

const Topbar = () => {
  return (
    <header className="h-[80px] w-full bg-[#D9D9D9] flex justify-between items-center pr-[80px] pl-[42px]">
      <div className="w-[143px] h-10 bg-[#E6E6E6]"></div>
      <ul className="flex-1 h-full flex justify-end items-end pb-4 gap-9 pr-[57px]">
        <li className="font-medium text-xl left-6 cursor-pointer">Plantillas</li>
        <li className="font-medium text-xl left-6 cursor-pointer">Certificados</li>
      </ul>
      <div className="w-10 h-10 flex justify-center items-center cursor-pointer">
        <BiSolidUser className="w-[30px] h-[34px]" />
      </div>
    </header>
  );
};

export default Topbar;
