import { useDispatch, useSelector } from "react-redux";
import { useInputExcel } from "../../../../../hooks/useInputExcel";
import { useEffect, useRef, useState } from "react";
import {
  setRemoveStudent,
  setStudentSelected,
  setStudents
} from "../../../../../features/certificateSlice";
import { AiOutlineCloseCircle } from "react-icons/ai";

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

  const removeStudent = dni => {
    dispatch(setRemoveStudent(dni));
  };
  return (
    <div className="h-full">
      <section className="flex flex-col w-full overflow-y-auto pr-6 h-full">
        <header>
          <h2 className=" font-bold text-xl text-secondary">Datos de los alumnos</h2>
          <p>Total de estudiantes cargados: {students.length}</p>
        </header>
        <div className="mt-2 border-2 rounded-lg border-slate-700">
          {studentsList?.map((student, index) => {
            return (
              <div
                key={index}
                className="cursor-pointer hover:bg-orange-100 p-2 rounded-lg relative"
                onClick={() => dispatch(setStudentSelected(student))}
              >
                <p className="font-semibold">
                  <span className="text-primary">♦</span> {student?.name} {student?.lastname}{" "}
                </p>
                <span>({student?.email})</span>
                <AiOutlineCloseCircle
                  color="red"
                  size={20}
                  className=" absolute top-2 right-2 z-10"
                  onClick={() => removeStudent(student.DNI)}
                />
              </div>
            );
          })}
        </div>
        <div className="hidden">
          <input type="file" name="fileExcel" ref={fileInputRef} onChange={handlerExcel} />
        </div>
        <button
          className="w-full mt-4 p-2 font-bold bg-secondary text-white rounded-lg hover:bg-blue-400 hover:text-black"
          onClick={handleButtonClick}
        >
          Cargar archivo
        </button>
        <a href="/data.xlsx" download>
          <button className="w-full mt-2 p-2 font-bold bg-white text-secondary border-secondary rounded-lg hover:bg-blue-300 hover:text-black">
            Descargar plantilla excel
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
