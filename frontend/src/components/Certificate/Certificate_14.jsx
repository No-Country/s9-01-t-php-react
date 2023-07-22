/* eslint-disable react/prop-types */

import logo from "./logo.svg";
import firma from "./firma.svg";

const Certificate_14 = ({
  institution,
  career_type,
  certificateContent,
  authority1,
  authority2,
  studentSelected,
  templateSelected
}) => {
  return (
    <section
      className={` w-full h-full flex justify-center max-w-[1280px] mx-auto  text-[12px] sm:text-[16px] md:text-[18px]`}
    >
      <div className="max-w-[46.1875rem] relative text-[.9em] text-center text-white">
        <img
          src={templateSelected?.urlImg}
          alt={templateSelected?.name}
          className=" object-contain w-full  "
        />
        <div className="flex flex-col justify-between absolute h-full w-full top-0 left-0 p-[9%] sm:p-[6.5%] md:-p[5%] ">
          <div className=" flex justify-between w-full h-max items-center mb-1">
            <div className="w-2/4 ">
              <img src={logo} className=" object-contain max-w-[160px] w-[55%]" alt="logo" />
            </div>
            <div>
              <p className=" rounded font-bold bg-[#0DFCA7] w-max  px-3 text-black">
                {career_type}
              </p>
            </div>
          </div>
          <div className=" sm:px-[3%]">
            <p>Certifica a</p>
            <p className=" text-[#0CFCA7] text-[2.1em] font-semibold my-[.2em]">
              {studentSelected?.name} {studentSelected?.lastname}
            </p>
            <p className="mb-[.4em]">{certificateContent}</p>
            <span className=" font-medium">Buenos Aires, Febrero 2023</span>
          </div>
          <div className=" flex justify-between h-1/4">
            <div className=" flex flex-col max-w-[30%] ">
              <img src={logo} className=" h-1/2  object-contain" alt="firm" />
              <hr />
              <p>{authority1}</p>
              <span className="text-[.7em] text-[#0CFCA7]">CTO de Rúcula Digital Academy </span>
            </div>
            <div className=" flex flex-col max-w-[30%] ">
              <img src={firma} className=" h-1/2 object-contain" alt="firm" />
              <hr />
              <p>{authority2}</p>
              <span className="text-[.7em] text-[#0CFCA7]">CTO de Rúcula Digital Academy </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificate_14;
