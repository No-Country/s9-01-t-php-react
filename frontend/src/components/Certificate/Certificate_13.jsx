/* eslint-disable react/prop-types */
const Certificate_13 = ({
  certificateTitle,
  emission_date,
  certificateContent,
  authorities,
  studentSelected,
  templateSelected,
  imgLogo
}) => {
  return (
    <section
      className={` w-full h-full flex justify-center max-w-[1280px] mx-auto  text-[12px] sm:text-[16px] md:text-[18px]`}
    >
      <div className="max-w-[46.1875rem] relative text-[.9em] text-center text-white">
        <img
          src={templateSelected?.urlImg}
          alt={templateSelected?.name}
          className=" object-contain w-full"
        />
        <div className="flex flex-col justify-between absolute h-full w-full top-0 left-0 p-[5%] sm:p-[6.5%] md:p-[5%]">
          <div className=" flex flex-col w-full items-center mt-[.6em] md:mt-[1em]  gap-[1em]  md:gap-[1.5em] mb-1 md:mb-0 h-[25%] max-h-[90px] ">
            <div
              className={`${
                certificateTitle ? "bg-[#0DFCA7]" : ""
              } rounded font-bold  text-black mt-1`}
            >
              <p className=" px-[1em] py-[.1em]"> {certificateTitle}</p>
            </div>
            <div className="flex w-1/4 h-1/2 justify-center">
              {imgLogo && (
                <img
                  src={imgLogo}
                  className=" object-contain rounded-lg max-w-[140px] h-full"
                  alt="logo"
                />
              )}
            </div>
          </div>
          <div className=" sm:px-[3%] h-[40%]  flex justify-between flex-col mt-[1.5em]">
            <p>Certifica a</p>
            <p className=" text-[#0083FF] text-[1.8em] font-semibold mt-[.1em]  lg:mb-[.1em] lg:mt-[.6em]">
              {studentSelected?.name} {studentSelected?.lastname}
            </p>
            <p className="mb-[.3em]">{certificateContent}</p>
            <span className=" font-medium">{emission_date}</span>
          </div>
          <div className=" flex justify-between h-1/4 px-[2.5em]">
            {authorities && authorities[0] && (
              <div className=" flex flex-col max-w-[33%] md:max-w-[30%] justify-end">
                {authorities[0].urlImg && (
                  <img
                    src={authorities[0].urlImg}
                    className=" h-1/2  object-contain border-b-2"
                    alt="firm"
                  />
                )}
                <p className=" text-[.9em]">{authorities[0].authorityName}</p>
                <span className="text-[.6em] text-[#0CFCA7]">{authorities[0].position}</span>
              </div>
            )}
            {authorities && authorities[1] && (
              <div className=" flex flex-col max-w-[33%] md:max-w-[30%] justify-end">
                {authorities[1].urlImg && (
                  <img
                    src={authorities[1].urlImg}
                    className=" h-1/2 object-contain border-b-2"
                    alt="firm"
                  />
                )}
                <p className=" text-[.9em]">{authorities[1].authorityName}</p>
                <span className="text-[.6em] text-[#0CFCA7]">{authorities[1].position}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificate_13;
