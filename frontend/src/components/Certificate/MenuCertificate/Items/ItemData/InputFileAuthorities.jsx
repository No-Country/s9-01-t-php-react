/* eslint-disable react/prop-types */
import {
  AiOutlinePlusCircle,
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineClose
} from "react-icons/ai";
import { BiImageAdd } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { InputText } from "./InputText";
import { postAddAuthorities } from "../../../../../features/authoritiesSlice";

export const InputFileAuthorities = ({ name }) => {
  const [urlImage, setUrlImage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const [authority, setAuthority] = useState({ authorityName: "", position: "", image: null });

  const dispatch = useDispatch();

  const handleChangeFile = e => {
    const image = e.target.files[0];
    if (!image) return;

    setAuthority({ ...authority, image });

    setUrlImage(URL.createObjectURL(image));
  };

  const saveAuthority = () => {
    dispatch(postAddAuthorities(authority));
    setIsOpen(false);
  };

  const handleChange = e => {
    const { name, value } = e.target;

    setAuthority({ ...authority, [name]: value });
  };

  return (
    <div className="flex gap-2 items-center">
      {!isOpen ? (
        <AiOutlinePlusCircle size={30} onClick={() => setIsOpen(!isOpen)} />
      ) : (
        <div className="flex flex-col">
          <label className="flex cursor-pointer items-center">
            <BiImageAdd size={30} /> agrega una firma
            <input className=" hidden " type="file" name={name} onChange={handleChangeFile} />
          </label>
          <div className="flex flex-col items-center">
            {authority.image && (
              <div className="flex w-full justify-center ">
                <img src={urlImage} alt="" className="flex w-full h-32 object-contain" />
                <AiOutlineClose
                  size={20}
                  color="red"
                  onClick={() => setAuthority({ ...authority, image: null })}
                  className=" cursor-pointer"
                />
              </div>
            )}
            <div className="flex flex-col gap-y-2 mt-4">
              <InputText
                handleChange={handleChange}
                name={"authorityName"}
                value={authority.authorityName}
              >
                Nombre
              </InputText>
            </div>
            <div className="flex flex-col gap-y-2 mt-4">
              <InputText handleChange={handleChange} name={"position"} value={authority.position}>
                Posición
              </InputText>
            </div>
          </div>
          <span className="font-semibold text-center">¿Desea guardar?</span>
          <div className="flex w-full justify-center gap-4 mb-4">
            <AiOutlineCheckCircle
              size={40}
              color="green"
              onClick={saveAuthority}
              className="cursor-pointer rounded-full hover:bg-slate-100"
            />
            <AiOutlineCloseCircle
              size={40}
              color="red"
              onClick={() => setIsOpen(false)}
              className="cursor-pointer rounded-full hover:bg-slate-100"
            />
          </div>
        </div>
      )}
    </div>
  );
};
