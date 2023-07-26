/* eslint-disable react/prop-types */
import { AiOutlinePlusCircle, AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { postLogos } from "../../../../../features/certificateSlice";
import { useDispatch } from "react-redux";
import { getAllLogos } from "../../../../../features/logosSlice";
import { useState } from "react";
import useToast from "../../../../../hooks/useToast";

export const InputFileLogo = ({ name }) => {
  const [imgLogo, setImgLogo] = useState(null);
  const [urlImage, setUrlImage] = useState("");
  const dispatch = useDispatch();
  const { toastSuccess, toastError } = useToast();

  const handleChange = e => {
    const image = e.target.files[0];
    if (!image) return;

    setImgLogo(image);
    setUrlImage(URL.createObjectURL(image));
  };

  const saveLogo = async () => {
    try {
      const logoSaved = await dispatch(postLogos({ image: imgLogo }));
      dispatch(getAllLogos());
      toastSuccess(logoSaved);
    } catch (error) {
      toastError(error);
    } finally {
      setImgLogo(null);
    }
  };

  return (
    <div className="flex gap-2 items-center py-3 w-full">
      {!imgLogo ? (
        <label className="cursor-pointer">
          <AiOutlinePlusCircle size={30} />
          <input className=" hidden " type="file" name={name} onChange={handleChange} />
        </label>
      ) : (
        <>
          <div className="flex flex-col items-center">
            <span className="font-semibold">¿Desea guardar?</span>
            <div className="flex w-full justify-center">
              <img src={urlImage} alt="" className="flex w-full" />
            </div>
          </div>
          <div className="flex flex-col ml-2">
            <AiOutlineCheckCircle
              size={40}
              color="green"
              onClick={saveLogo}
              className="cursor-pointer rounded-full hover:bg-slate-100"
            />
            <AiOutlineCloseCircle
              size={40}
              color="red"
              onClick={() => setImgLogo(null)}
              className="cursor-pointer rounded-full hover:bg-slate-100"
            />
          </div>
        </>
      )}
    </div>
  );
};
