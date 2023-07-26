import { useState } from "react";
import { RiArticleLine, RiImageEditFill } from "react-icons/ri";
import { BsCloudArrowUp } from "react-icons/bs";
import { LiaCertificateSolid } from "react-icons/lia";
import ItemTemplates from "./Items/ItemTemplate/ItemTemplates";
import ItemData from "./Items/ItemData/ItemData";
import ItemStudents from "./Items/ItemStudents/ItemStudents";

const MenuCertificate = () => {
  const [isSelected, setIsSelected] = useState({
    template: true,
    data: false,
    students: false
  });
  const handleSelectItem = itemSelected => {
    if (itemSelected === "template") {
      setIsSelected({
        template: true,
        data: false,
        students: false
      });
    } else if (itemSelected === "data") {
      setIsSelected({
        template: false,
        data: true,
        students: false
      });
    } else {
      setIsSelected({
        template: false,
        data: false,
        students: true
      });
    }
  };
  return (
    <div className=" w-[80%] min-w-[22.3125rem] p-2 max-h-[100vh] h-full lg:max-w-[22.3125rem] border-[3px] mx-auto lg:mx-0 rounded-3xl border-secondary bg-[#F7F7F7]">
      <header>
        <ul className="flex w-full justify-between text-xs font-semibold gap-2">
          <li
            onClick={() => handleSelectItem("template")}
            className={`${
              isSelected.template
                ? " border-secondary bg-secondary text-white"
                : "bg-[#F0F0F0] text-[#797979]"
            } flex flex-col items-center justify-center rounded-3xl cursor-pointer p-2 w-[6.25rem] h-[5rem] shadow-md`}
          >
            <RiImageEditFill size={40} />
            <span>Plantilla</span>
          </li>
          <li
            onClick={() => handleSelectItem("data")}
            className={`${
              isSelected.data
                ? "border-secondary bg-secondary text-white"
                : "bg-[#F0F0F0] text-[#797979]"
            } flex flex-col items-center justify-center rounded-3xl cursor-pointer p-2 w-[6.25rem] h-[5rem] shadow-md`}
          >
            <LiaCertificateSolid size={40} />
            <span>Certificá</span>
          </li>
          <li
            onClick={() => handleSelectItem("students")}
            className={`${
              isSelected.students
                ? "border-secondary bg-secondary text-white"
                : "bg-[#F0F0F0] text-[#797979]"
            } flex flex-col items-center justify-center rounded-3xl cursor-pointer p-2 w-[6.25rem] h-[5rem] shadow-md`}
          >
            <BsCloudArrowUp size={40} />
            <span>Destinatarios</span>
          </li>
        </ul>
      </header>
      <div className="py-6 px-1 h-[80vh]">
        {isSelected.template && <ItemTemplates />}
        {isSelected.data && <ItemData />}
        {isSelected.students && <ItemStudents />}
      </div>
    </div>
  );
};

export default MenuCertificate;
