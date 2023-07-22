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
    certificateContent: 90,
    career_type: 30
  });

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === "certificateContent") {
      let totalCharacter = value.length;
      console.log(totalCharacter);
      // setCharacterControl({
      //   ...characterControl,
      //   [name]: characterControl.certificateContent - totalCharacter
      // });
      if (totalCharacter >= 90) return;
    }
    dispatch(setData({ name, value }));
  };

  const selectLogo = logo => {
    dispatch(setSelectedLogo(logo));
  };

  console.log(logos);

  return (
    <form className="flex flex-col gap-y-6 h-[85%] overflow-auto pr-2">
      <div className="flex flex-col gap-y-5">
        <InputText handleChange={handleChange} name={"institution"} value={certificate.institution}>
          Institución
        </InputText>
      </div>
      <div className="flex flex-col gap-y-5">
        <InputText handleChange={handleChange} name={"career_type"} value={certificate.career_type}>
          Nombre del curso
        </InputText>
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
        {characterControl.certificateContent}
      </div>

      <div>
        <h3 className=" text-xl font-bold">Logos</h3>
        <div className="flex gap-3 justify-start items-center">
          <div className="flex gap-3">
            {logos.length &&
              logos.map(logo => {
                return (
                  <div
                    key={logo._id}
                    className="flex w-20 gap-3 cursor-pointer"
                    onClick={() => selectLogo(logo)}
                  >
                    <img src={logo.urlImg} alt="logo" className="w-full object-contain" />
                  </div>
                );
              })}
          </div>
          <InputFile name="logos" />
        </div>
      </div>

      <div className="flex flex-col  gap-y-5">
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
