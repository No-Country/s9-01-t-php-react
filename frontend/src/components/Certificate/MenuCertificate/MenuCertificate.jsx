import { useState } from "react";
import { RiArticleLine, RiImageEditFill } from "react-icons/ri";
import { PiStudentFill } from "react-icons/pi";
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
    <div className=" w-[80%] p-2 max-h-[100vh] h-full lg:max-w-[22.3125rem] border-[3px] mx-auto lg:mx-0 rounded-3xl border-secondary bg-gray-100">
      <header className=" bg-white rounded-t-3xl">
        <ul className="flex w-full justify-between text-xs font-semibold">
          <li
            onClick={() => handleSelectItem("template")}
            className={`${
              isSelected.template
                ? "border-[2px] border-b-0 rounded-t-3xl  border-secondary bg-gray-100"
                : null
            } flex flex-col items-center cursor-pointer p-2 w-[7.375rem]`}>
            <RiImageEditFill size={30} color="#797979" />
            <span className=" text-primary">Plantilla</span>
          </li>
          <li
            onClick={() => handleSelectItem("data")}
            className={`${
              isSelected.data
                ? "border-[2px] border-b-0 rounded-t-3xl border-secondary bg-gray-100"
                : null
            } flex flex-col items-center cursor-pointer p-2 w-[7.375rem]`}>
            <RiArticleLine size={30} color="#797979" />
            <span className=" text-primary">Datos</span>
          </li>
          <li
            onClick={() => handleSelectItem("students")}
            className={`${
              isSelected.students
                ? "border-[2px] border-b-0 rounded-t-3xl border-secondary bg-gray-100"
                : null
            } flex flex-col items-center cursor-pointer p-2 w-[7.375rem]`}>
            <PiStudentFill size={30} color="#797979" />
            <span className=" text-primary">Alumnos</span>
          </li>
        </ul>
      </header>
      <div className="py-6 px-5 h-[80vh]">
        {isSelected.template && <ItemTemplates />}
        {isSelected.data && <ItemData />}
        {isSelected.students && <ItemStudents />}
      </div>
    </div>
  );
};

export default MenuCertificate;
