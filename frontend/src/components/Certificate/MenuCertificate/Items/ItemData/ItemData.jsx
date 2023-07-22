import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../../../../features/certificateSlice";
import { InputFile } from "./InputFile";
import { InputText } from "./InputText";
import { setSelectedLogo } from "../../../../../features/logosSlice";
import { useState } from "react";

const ItemData = () => {
  const certificate = useSelector(state => state.certificate);
  const logos = useSelector(state => state.logos.list);
  const dispatch = useDispatch();
  const [characterControl, setCharacterControl] = useState({
    certificateContent: { actual: 0, total: 90 },
    career_type: { actual: 0, total: 30 }
  });

  const handleChange = e => {
    const { name, value } = e.target;
    let totalCharacter = value.length;

    setCharacterControl(prevCharacterControl => ({
      ...prevCharacterControl,
      [name]: { ...prevCharacterControl[name], actual: totalCharacter }
    }));

    if (name === "certificateContent" && totalCharacter >= 90) return;
    if (name === "career_type" && totalCharacter >= 30) return;

    dispatch(setData({ name, value }));
  };

  const selectLogo = logo => {
    dispatch(setSelectedLogo(logo));
  };

  return (
    <form className="flex flex-col gap-y-6 h-full overflow-auto pr-2">
      <div className="flex flex-col gap-y-5">
        <InputText handleChange={handleChange} name={"institution"} value={certificate.institution}>
          Institución
        </InputText>
      </div>
      <div className="flex flex-col gap-y-5">
        <InputText handleChange={handleChange} name={"career_type"} value={certificate.career_type}>
          Nombre del curso
        </InputText>
        <span className="flex justify-end w-full">
          {`${characterControl.career_type.actual}/${characterControl.career_type.total}`}
        </span>
      </div>
      <div className="flex flex-col gap-y-5">
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
        <div className="flex w-full justify-start items-center overflow-x-auto gap-3">
          <InputFile name="logos" />
          <div className="flex w-full h-full gap-2">
            {logos.length &&
              logos.map(logo => {
                return (
                  <div
                    key={logo._id}
                    className="flex w-40 cursor-pointer"
                    onClick={() => selectLogo(logo)}
                  >
                    <img src={logo.urlImg} alt="logo" className="h-28 w-40 object-contain" />
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-5">
        <InputText handleChange={handleChange} name={"authority1"}>
          Autoridad 1
        </InputText>

        <div>
          <h3 className=" text-xl font-bold">Firma</h3>
          <InputFile name="authority1" />
        </div>
      </div>
      <div className="flex flex-col gap-y-5">
        <InputText handleChange={handleChange} name={"authority2"}>
          Autoridad 2
        </InputText>

        <h3 className=" text-xl font-bold">Firma 2</h3>
        <InputFile name="authority2" />
      </div>
    </form>
  );
};

export default ItemData;
