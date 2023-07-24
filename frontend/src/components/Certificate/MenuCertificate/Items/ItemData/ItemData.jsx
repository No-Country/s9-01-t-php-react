import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../../../../features/certificateSlice";
import { InputFileLogo } from "./InputFileLogo";
import { InputText } from "./InputText";
import { setSelectedLogo } from "../../../../../features/logosSlice";
import { useState } from "react";
import { InputFileAuthorities } from "./InputFileAuthorities";
import { setSelectedAuthorities } from "../../../../../features/authoritiesSlice";

const ItemData = () => {
  const certificate = useSelector(state => state.certificate);
  const logos = useSelector(state => state.logos.list);
  const authorities = useSelector(state => state.authorities.list);
  const dispatch = useDispatch();
  const [characterControl, setCharacterControl] = useState({
    certificateContent: { actual: 0, total: 120 },
    career_type: { actual: 0, total: 50 }
  });

  const handleChange = e => {
    const { name, value } = e.target;
    let totalCharacter = value?.length;

    setCharacterControl(prevCharacterControl => ({
      ...prevCharacterControl,
      [name]: { ...prevCharacterControl[name], actual: totalCharacter }
    }));

    if (
      name === "certificateContent" &&
      totalCharacter >= characterControl.certificateContent.total
    )
      return;
    if (name === "career_type" && totalCharacter >= characterControl.career_type.total) return;

    dispatch(setData({ name, value }));
  };

  const selectLogo = logo => {
    dispatch(setSelectedLogo(logo));
  };

  return (
    <form className="flex flex-col gap-y-6 h-full overflow-auto pr-2">
      <div className="flex flex-col gap-y-2 text-primary">
        <InputText
          handleChange={handleChange}
          name={"emission_date"}
          value={certificate.emission_date}
        >
          Fecha de emision
        </InputText>
      </div>
      <div className="flex flex-col gap-y-2 text-primary">
        <InputText handleChange={handleChange} name={"institution"} value={certificate.institution}>
          Institución
        </InputText>
      </div>
      <div className="flex flex-col gap-y-2 text-primary">
        <InputText
          handleChange={handleChange}
          name={"certificateTitle"}
          value={certificate.certificateTitle}
        >
          Tipo de certificado
        </InputText>
      </div>
      <div className="flex flex-col gap-y-2 text-primary">
        <InputText handleChange={handleChange} name={"career_type"} value={certificate.career_type}>
          Nombre del curso
        </InputText>
        <span className="flex justify-end w-full">
          {`${characterControl.career_type.actual}/${characterControl.career_type.total}`}
        </span>
      </div>
      <div className="flex flex-col gap-y-2 text-primary">
        <label className=" text-xl font-bold" htmlFor="certificateContent">
          Leyenda del curso
        </label>
        <textarea
          className="p-2 border-[3px] border-[#E4E4E4]  rounded-lg"
          name="certificateContent"
          id="certificateContent"
          cols="30"
          rows="3"
          onChange={handleChange}
          value={certificate.certificateContent}
        ></textarea>
        <span className="flex justify-end w-full">
          {`${characterControl.certificateContent.actual}/${characterControl.certificateContent.total}`}
        </span>
      </div>

      <div className="w-full">
        <h3 className="text-xl font-bold">Logos</h3>
        <InputFileLogo name="logos" />
        <div className="flex w-full justify-start overflow-x-auto gap-3">
          <div className="flex flex-wrap w-full h-full gap-2">
            {logos?.length &&
              logos?.map(logo => {
                return (
                  <div
                    key={logo._id}
                    className="flex w-20 cursor-pointer"
                    onClick={() => selectLogo(logo)}
                  >
                    <img src={logo.urlImg} alt="logo" className="h-28 w-40 object-contain" />
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-2 w-full">
        <div>
          <h3 className=" text-xl font-bold">Autoridades</h3>
          <InputFileAuthorities name="authorities" />
          <div className="flex w-full justify-start overflow-x-auto gap-3">
            <div className="flex flex-wrap w-full h-full gap-2">
              {authorities?.length &&
                authorities?.map(authority => {
                  return (
                    <div
                      key={authority._id}
                      className="flex flex-col w-[90px] h-36 cursor-pointer border-2 rounded-md p-2 border-secondary justify-center"
                      onClick={() => dispatch(setSelectedAuthorities(authority))}
                    >
                      {authority.urlImg && (
                        <img
                          src={authority.urlImg}
                          alt="authority"
                          className="h-28 w-40 object-contain"
                        />
                      )}
                      <div className="flex text-sm text-black items-center font-semibold text-center break-words">
                        <span className="break-words">{authority.authorityName}</span>
                        <span>{authority.lastname}</span>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ItemData;
