import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../../../../features/certificateSlice";
import { InputFile } from "./InputFile";
import { InputText } from "./InputText";

const ItemData = () => {
  const certificate = useSelector(state => state.certificate);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    dispatch(setData({ name, value }));
  };

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
      </div>

      <div>LOGOS</div>

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
