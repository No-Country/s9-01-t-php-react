/* eslint-disable react/prop-types */
const Certificate_14 = ({
  institution,
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
        <div className="flex flex-col justify-between absolute h-full w-full top-0 left-0 p-[7%] sm:p-[6.5%] md:p-[5%]">
          <div className=" flex justify-between w-full items-center mb-1 h-[15%] max-h-[70px]">
            <div className="flex w-1/4 h-full justify-start">
              {imgLogo ? (
                <img
                  src={imgLogo}
                  className=" object-contain rounded-lg max-w-[12em] h-full"
                  alt="logo"
                />
              ) : (
                <span className="text-white font-bold text-[2em] whitespace-nowrap">
                  {institution}
                </span>
              )}
            </div>
            <div
              className={`${
                certificateTitle ? "bg-[#0DFCA7]" : ""
              } flex justify-center items-center rounded font-bold px-3 py-0.5 text-black`}
            >
              {certificateTitle}
            </div>
          </div>
          <div className=" sm:px-[3%]">
            <p>Certifica a</p>
            <p className=" text-[#0CFCA7] text-[2.1em] font-semibold my-[.2em]">
              {studentSelected?.name} {studentSelected?.lastname}
            </p>
            <p className="mb-[.4em]">{certificateContent}</p>
            <span className=" font-medium">{emission_date}</span>
          </div>
          <div className=" flex justify-between h-1/4 px-[2em]">
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

export default Certificate_14;
