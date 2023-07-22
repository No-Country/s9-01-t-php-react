/* eslint-disable react/prop-types */
import { AiOutlinePlusCircle } from "react-icons/ai";
import { postLogos } from "../../../../../features/certificateSlice";
import { useDispatch } from "react-redux";
import { getAllLogos } from "../../../../../features/logosSlice";

export const InputFile = ({ name }) => {
  const dispatch = useDispatch();

  const handleChange = e => {
    const image = e.target.files[0];
    dispatch(postLogos({ image }));
    dispatch(getAllLogos());
  };

  return (
    <label className="cursor-pointer">
      <AiOutlinePlusCircle size={30} />
      <input className=" hidden " type="file" name={name} onChange={handleChange} />
    </label>
  );
};
