import { useState } from "react";
import moreIcon from "../../../../../assets/icons/plus_circle.svg";
import { postImg } from "../../../../../features/certificateSlice";
import { useDispatch } from "react-redux";

export const InputFile = ({ name }) => {
  const [file, setFile] = useState();
  const dispatch = useDispatch();

  const handleChange = e => {
    setFile(e.target.files[0]);

    console.log("estoy");

    dispatch(postImg(file));
  };

  return (
    <label className="w-max">
      <img src={moreIcon} alt="more" />
      <input className=" hidden " type="file" name={name} onChange={handleChange} />
    </label>
  );
};
