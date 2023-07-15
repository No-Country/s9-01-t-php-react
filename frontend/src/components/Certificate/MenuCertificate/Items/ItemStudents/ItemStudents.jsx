import { useDispatch } from "react-redux";
import { useInputExcel } from "../../../../../hooks/useInputExcel";
import { useEffect, useRef } from "react";
import { setStudents } from "../../../../../features/certificateSlice";

const ItemStudents = () => {
  const { dataExcel, handlerExcel } = useInputExcel();
  const fileInputRef = useRef(null);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setStudents(dataExcel));
  }, [dataExcel]);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  return (
    <div className="h-full">
      <section className="flex flex-col w-full overflow-y-auto pr-6 h-[85%]">
      <h2 className=" font-bold text-xl">Datos de los alumnos</h2>
        <p>Total de estudiantes cargados: {dataExcel?.length}</p>
        <div className="hidden">
          <input type="file" name="fileExcel" ref={fileInputRef} onChange={handlerExcel} />
        </div>
        <button
          className="w-full mt-4 p-2 bg-blue-500 text-white rounded-md"
          onClick={handleButtonClick}>
          Cargar archivo
        </button>
        <a href="/data.xlsx" download>
          <button className="w-full mt-2 p-2 bg-blue-500 text-white rounded-lg">
            Descargar plantilla
          </button>
        </a>
      </section>
    </div>
  );
};

export default ItemStudents;
