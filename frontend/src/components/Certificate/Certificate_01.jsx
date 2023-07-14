import { useEffect, useRef } from "react";
import { useInputExcel } from "../../hooks/useInputExcel";
import { useDispatch } from "react-redux";
import { setStudents } from "../../features/certificateSlice";

const Certificate_01 = () => {
  const { dataExcel, handlerExcel } = useInputExcel();
  const fileInputRef = useRef(null);

  const dispatch = useDispatch();

  const dateObj = new Date();
  const formattedDate = `${dateObj.getDate()}/${dateObj.getMonth() + 1}/${dateObj.getFullYear()}`;

  useEffect(() => {
    dispatch(setStudents(dataExcel));
  }, [dataExcel]);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="flex flex-col w-full md:max-w-[46.1875rem] ">
      <div className="flex w-full justify-center items-center">
        <div className="flex w-full bg-red h-[11.25rem] rounded-lg relative md:h-[26.125rem]">
          <img
            src="https://res.cloudinary.com/dtfjbprru/image/upload/v1688607722/jkdpbelegizwxaktiixg.jpg"
            alt=""
            className="w-full object-cover rounded-lg md:h-[26.125rem]"
          />
          {dataExcel && (
            <>
              <span className="absolute left-0 right-0 text-left ml-4 mt-4 font-bold text-xs">
                Institución
              </span>
              <span className="absolute left-0 right-0 text-right mr-4 mt-4 font-bold text-xs">
                {formattedDate}
              </span>
              <span className="absolute left-0 right-0 text-center font-bold top-14 text-lg">
                {dataExcel[0]?.name} {dataExcel[0]?.lastname}
              </span>
              <span className="flex absolute left-0 right-0 text-center top-[80px] text-xs justify-center">
                <p className="max-w-[200px]">
                  por terminar la carrera de Administración y Manejo de Equipo
                </p>
              </span>
              <span className="absolute text-left bottom-0 ml-8 mb-6 text-xs">
                <section className="flex flex-col justify-center items-center">
                  <span className="font-bold">Autoridad</span>
                  <span>Jorge Topera</span>
                </section>
              </span>
              <span className="absolute text-right bottom-0 right-0 mr-8 mb-6 text-xs">
                <section className="flex flex-col justify-center items-center">
                  <span className="font-bold">Autoridad</span>
                  <span>Antonio Solis</span>
                </section>
              </span>
            </>
          )}
        </div>
      </div>
      <section className="flex flex-col w-full ">
        <p>Total de estudiantes cargados: {dataExcel?.length}</p>
        <div className="hidden">
          <input type="file" name="fileExcel" ref={fileInputRef} onChange={handlerExcel} />
        </div>
        <button
          className="w-full mt-4 p-2 bg-blue-500 text-white rounded-md"
          onClick={handleButtonClick}
        >
          Subir archivo
        </button>
        <a href="/data.xlsx" download>
          <button className="w-full mt-2 p-2 bg-blue-500 text-white rounded-md">
            Descargar plantilla
          </button>
        </a>
      </section>
    </div>
  );
};

export default Certificate_01;
