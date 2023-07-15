import { useState } from "react";
import { BsDatabaseAdd } from "react-icons/bs";
import { RiArticleLine, RiImageEditFill } from "react-icons/ri";
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
    <div className="w-[22.3125rem] max-w-[22.3125rem] border rounded-3xl bg-orange-200">
      <header className=" bg-orange-400 rounded-t-3xl">
        <ul className="flex w-full justify-between text-xs font-semibold">
          <li
            onClick={() => handleSelectItem("template")}
            className={`${
              isSelected.template ? "border border-b-0 rounded-t-3xl bg-orange-200" : null
            } flex flex-col items-center cursor-pointer p-2 w-[7.375rem]`}
          >
            <RiImageEditFill size={30} />
            <span>Plantilla</span>
          </li>
          <li
            onClick={() => handleSelectItem("data")}
            className={`${
              isSelected.data ? "border border-b-0 rounded-t-3xl bg-orange-200" : null
            } flex flex-col items-center cursor-pointer p-2 w-[7.375rem]`}
          >
            <RiArticleLine size={30} />
            <span>Datos</span>
          </li>
          <li
            onClick={() => handleSelectItem("students")}
            className={`${
              isSelected.students ? "border border-b-0 rounded-t-3xl bg-orange-200" : null
            } flex flex-col items-center cursor-pointer p-2 w-[7.375rem]`}
          >
            <BsDatabaseAdd size={30} />
            <span>Alumnos</span>
          </li>
        </ul>
      </header>
      <div className="py-4 pl-6 h-[100%]">
        {isSelected.template && <ItemTemplates />}
        {isSelected.data && <ItemData />}
        {isSelected.students && <ItemStudents />}
      </div>
    </div>
  );
};

export default MenuCertificate;
