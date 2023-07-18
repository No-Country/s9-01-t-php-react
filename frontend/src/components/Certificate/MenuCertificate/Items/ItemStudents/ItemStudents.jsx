import { useDispatch, useSelector } from "react-redux";
import { useInputExcel } from "../../../../../hooks/useInputExcel";
import { useEffect, useRef, useState } from "react";
import { setStudentSelected, setStudents } from "../../../../../features/certificateSlice";

const ItemStudents = () => {
  const students = useSelector(state => state.certificate.students);
  const [studentsList, setStudentsList] = useState([]);

  const { dataExcel, handlerExcel } = useInputExcel();
  const fileInputRef = useRef(null);
  const previousDataExcel = useRef(dataExcel);

  const dispatch = useDispatch();

  useEffect(() => {
    if (previousDataExcel.current !== dataExcel) {
      dispatch(setStudents(dataExcel));
      previousDataExcel.current = dataExcel; // Actualiza el valor anterior de dataExcel
    }
    setStudentsList(students);
  }, [dataExcel, dispatch, students]);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  return (
    <div className="h-full">
      <section className="flex flex-col w-full overflow-y-auto pr-6 h-[85%]">
        <header>
          <h2 className=" font-bold text-xl">Datos de los alumnos</h2>
          <p>Total de estudiantes cargados: {dataExcel?.length}</p>
        </header>
        <div className="mt-2 border-2 rounded-lg border-slate-700">
          {studentsList?.map((student, index) => {
            return (
              <div
                key={index}
                className="mt-1 cursor-pointer hover:bg-orange-300 p-2 rounded-lg"
                onClick={() => dispatch(setStudentSelected(student))}
              >
                <p className="font-semibold">
                  ♦ {student?.name} {student?.lastname}{" "}
                </p>
                <span>({student?.email})</span>
              </div>
            );
          })}
        </div>
        <div className="hidden">
          <input type="file" name="fileExcel" ref={fileInputRef} onChange={handlerExcel} />
        </div>
        <button
          className="w-full mt-4 p-2 font-bold bg-blue-500 text-white rounded-lg hover:bg-blue-400 hover:text-black"
          onClick={handleButtonClick}
        >
          Cargar archivo
        </button>
        <a href="/data.xlsx" download>
          <button className="w-full mt-2 p-2 font-bold bg-white text-blue-500 border-blue-500 rounded-lg hover:bg-blue-300 hover:text-black">
            Descargar plantilla
          </button>
        </a>
        <section className="w-full mt-4 text-center text-sm">
          <span>Para conocer más, sobre como subir los datos de los alumnos haga </span>
          <span className="font-semibold cursor-pointer">click aquí.</span>
        </section>
      </section>
    </div>
  );
};

export default ItemStudents;
