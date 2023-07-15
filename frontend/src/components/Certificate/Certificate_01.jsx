import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Certificate_01 = () => {
  const certificate = useSelector(state => state.certificate);
  const [studentsList, setStudentsList] = useState([]);
  const dateObj = new Date();
  const formattedDate = `${dateObj.getDate()}/${dateObj.getMonth() + 1}/${dateObj.getFullYear()}`;

  useEffect(() => {
    setStudentsList(certificate?.students);
  }, [certificate]);

  return (
    <div className="flex flex-col w-full md:max-w-[46.1875rem] ">
      <div className="flex w-full justify-center items-center">
        <div className="flex w-full bg-red h-[11.25rem] rounded-lg relative md:h-[26.125rem]">
          <img
            src="https://res.cloudinary.com/dtfjbprru/image/upload/v1688607722/jkdpbelegizwxaktiixg.jpg"
            alt=""
            className="w-full object-cover rounded-lg md:h-[26.125rem]"
          />
          {studentsList?.length && (
            <>
              <span className="absolute left-0 right-0 text-left ml-4 mt-4 font-bold text-xs">
                Institución
              </span>
              <span className="absolute left-0 right-0 text-right mr-4 mt-4 font-bold text-xs">
                {formattedDate}
              </span>
              <span className="absolute left-0 right-0 text-center font-bold top-14 text-lg">
                {certificate?.studentSelected?.name} {certificate?.studentSelected?.lastname}
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
    </div>
  );
};

export default Certificate_01;
