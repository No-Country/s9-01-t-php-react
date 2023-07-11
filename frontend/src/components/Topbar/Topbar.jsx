import { BellIcon } from "../Icons/Icons";

const Topbar = () => {
  return (
    <header className="max-w-[360px] w-full h-10 flex justify-between items-center px-4 bg-[#BBBBBB]">
      <p className="font-bold text-base leading-6">Home</p>
      <div className="w-6 h-6">
        <BellIcon />
      </div>
    </header>
  );
};

export default Topbar;
