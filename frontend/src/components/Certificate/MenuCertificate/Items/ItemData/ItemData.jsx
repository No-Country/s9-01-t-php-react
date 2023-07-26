import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../../../../features/certificateSlice";
import { InputFileLogo } from "./InputFileLogo";
import { InputText } from "./InputText";
import { setSelectedLogo } from "../../../../../features/logosSlice";
import { useState } from "react";
import { InputFileAuthorities } from "./InputFileAuthorities";
import { setSelectedAuthorities } from "../../../../../features/authoritiesSlice";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";

const ItemData = () => {
  const certificate = useSelector(state => state.certificate);
  const logos = useSelector(state => state.logos.list);
  const { list: authorities, authoritiesSelected } = useSelector(state => state.authorities);
  const logoSelected = useSelector(state => state.logos.logoSelected);
  const dispatch = useDispatch();
  const [characterControl, setCharacterControl] = useState({
    certificateContent: { actual: 0, total: 120 },
    career_type: { actual: 0, total: 50 }
  });
  const [openLogoAuthority, setOpenLogoAuthority] = useState({
    logo: false,
    authority: false
  });

  const openLogoOrAuthority = name => {
    switch (name) {
      case "logo":
        setOpenLogoAuthority(prevState => ({ ...prevState, logo: !prevState.logo }));
        break;
      case "authority":
        setOpenLogoAuthority(prevState => ({ ...prevState, authority: !prevState.authority }));
        break;
      default:
        break;
    }
  };

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

  const isSelectedLogo = id => {
    if (id === logoSelected._id) return true;
    return false;
  };

  const isSelectedAuthority = id => {
    const isSelected = authoritiesSelected.find(authority => authority._id === id);
    if (isSelected) return true;
    return false;
  };

  return (
    <form className="flex flex-col gap-y-6 h-full overflow-auto pr-2">
      <div className="flex flex-col gap-y-2 text-primary">
        <InputText
          handleChange={handleChange}
          name={"emission_date"}
          value={certificate.emission_date}
          placeholder={"Ej: Córdoba, 28 de Julio 2023"}
        >
          Fecha de emision
        </InputText>
      </div>
      <div className="flex flex-col gap-y-2 text-primary">
        <InputText
          handleChange={handleChange}
          name={"institution"}
          value={certificate.institution}
          placeholder={"Nombre de Institución"}
        >
          Institución
        </InputText>
      </div>
      <div className="flex flex-col gap-y-2 text-primary">
        <InputText
          handleChange={handleChange}
          name={"certificateTitle"}
          value={certificate.certificateTitle}
          placeholder={"Ej: CERTIFICADO DE EXPERIENCIA"}
        >
          Tipo de certificado
        </InputText>
      </div>
      <div className="flex flex-col gap-y-2 text-primary">
        <InputText
          handleChange={handleChange}
          name={"career_type"}
          value={certificate.career_type}
          placeholder={"Ingrese el nombre del curso"}
        >
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
          className="p-2 border-[3px] border-secondary  rounded-lg"
          name="certificateContent"
          id="certificateContent"
          cols="30"
          rows="3"
          onChange={handleChange}
          placeholder="Ingrese una breve descripción"
          value={certificate.certificateContent}
        ></textarea>
        <span className="flex justify-end w-full">
          {`${characterControl.certificateContent.actual}/${characterControl.certificateContent.total}`}
        </span>
      </div>

      <div className="w-full">
        <div className="flex w-full bg-primary rounded-md h-10 items-center p-2">
          {!openLogoAuthority.logo ? (
            <AiOutlinePlusSquare
              size={25}
              color="white"
              className=" cursor-pointer"
              onClick={() => openLogoOrAuthority("logo")}
            />
          ) : (
            <AiOutlineMinusSquare
              size={25}
              color="white"
              className=" cursor-pointer"
              onClick={() => openLogoOrAuthority("logo")}
            />
          )}
          <span className="text-xl font-bold text-white ml-4">Logos</span>
        </div>
        {openLogoAuthority.logo && (
          <div>
            <InputFileLogo name="logos" />
            <div className="flex w-full justify-start overflow-x-auto gap-3">
              <div className="flex flex-wrap w-full h-full gap-4 p-1">
                {logos?.length &&
                  logos?.map(logo => {
                    return (
                      <div
                        key={logo._id}
                        className={`${
                          isSelectedLogo(logo._id) ? "bg-secondary" : "bg-[#D9D9D9]"
                        } flex w-20 h-20 cursor-pointer rounded-md p-1 shadow-sm shadow-gray-500 hover:bg-secondary`}
                        onClick={() => selectLogo(logo)}
                      >
                        <img src={logo.urlImg} alt="logo" className="h-full w-20 object-contain" />
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-y-2 w-full">
        <div>
          <div className="flex w-full bg-primary rounded-md h-10 items-center p-2">
            {!openLogoAuthority.authority ? (
              <AiOutlinePlusSquare
                size={25}
                color="white"
                className=" cursor-pointer"
                onClick={() => openLogoOrAuthority("authority")}
              />
            ) : (
              <AiOutlineMinusSquare
                size={25}
                color="white"
                className=" cursor-pointer"
                onClick={() => openLogoOrAuthority("authority")}
              />
            )}
            <span className="text-xl font-bold text-white ml-4">Autoridades</span>
          </div>
          {openLogoAuthority.authority && (
            <div>
              <InputFileAuthorities name="authorities" />
              <div className="flex w-full justify-start overflow-x-auto gap-3">
                <div className="flex flex-wrap w-full h-full gap-4 p-1">
                  {authorities?.length &&
                    authorities?.map(authority => {
                      return (
                        <div
                          key={authority._id}
                          className={`${
                            isSelectedAuthority(authority._id) ? "bg-secondary" : "bg-[#D9D9D9]"
                          } flex flex-col w-[80px] h-[7.5rem] cursor-pointer rounded-md  p-1 shadow-sm shadow-gray-500 hover:bg-secondary justify-center`}
                          onClick={() => dispatch(setSelectedAuthorities(authority))}
                        >
                          {authority.urlImg && (
                            <img
                              src={authority.urlImg}
                              alt="authority"
                              className="h-[5rem] w-20 object-contain"
                            />
                          )}
                          <div className="flex text-sm text-black items-center justify-center font-semibold overflow-hidden">
                            <span className="break-words text-center">
                              {authority.authorityName}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default ItemData;
