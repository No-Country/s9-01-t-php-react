/* eslint-disable react/prop-types */

const Certificate_01 = ({
  career_type,
  certificateContent,
  authority1,
  authority2,
  studentSelected,
  templateSelected,
  imgLogo
}) => {
  const dateObj = new Date();
  const formattedDate = `${dateObj.getDate()}/${dateObj.getMonth() + 1}/${dateObj.getFullYear()}`;
  return (
    <div className="flex flex-col w-full md:max-w-[46.1875rem] ">
      <div className="flex w-full justify-center items-center">
        <div className="flex w-full bg-slate-400 h-[11.25rem] rounded-lg relative md:w-[46.1875rem] md:h-[32.625rem]">
          <img
            src={templateSelected?.urlImg}
            alt={templateSelected?.name}
            className="w-full object-cover rounded-lg md:h-full place-self-center"
          />
          {studentSelected && (
            <>
              <span className="absolute left-0 md:left-14 md:top-10 right-0 text-left ml-4 mt-4 font-bold text-xs md:text-xl">
                {/* {institution} */}
                {imgLogo && (
                  <img src={imgLogo} alt="logo" className="h-24 object-contain object-left" />
                )}
              </span>
              <span className="absolute left-0 right-0 md:right-20 md:top-10 text-right mr-4 mt-4 font-bold text-xs md:text-xl">
                {formattedDate}
              </span>
              <span className="flex absolute justify-center items-center h-full left-0 right-0 bottom-[5.5rem] text-center text-xs md:text-lg">
                <p className="max-w-[400px] font-medium">CERTIFICADO DE APROBACION</p>
              </span>
              <span className="flex absolute justify-center items-center h-full left-0 right-0 bottom-5 text-center font-bold text-lg md:text-[2.5rem]">
                {studentSelected?.name} {studentSelected?.lastname}
              </span>
              <span className="flex absolute justify-center items-center h-full left-0 right-0 md:top-10 text-center text-xs md:text-lg">
                <p className="max-w-[400px] break-all">
                  {certificateContent} <span className=" font-medium">{career_type}</span>
                </p>
              </span>
              <span className="absolute text-left bottom-0 md:bottom-16 md:left-20 ml-8 mb-6">
                <section className="flex flex-col justify-center items-center text-xs md:text-lg">
                  <span className="font-bold">Autoridad</span>
                  <span>{authority1}</span>
                </section>
              </span>
              <span className="absolute text-right bottom-0 md:bottom-16 right-0 md:right-20 mr-8 mb-6">
                <section className="flex flex-col justify-center items-center text-xs md:text-lg">
                  <span className="font-bold">Autoridad</span>
                  <span>{authority2}</span>
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
