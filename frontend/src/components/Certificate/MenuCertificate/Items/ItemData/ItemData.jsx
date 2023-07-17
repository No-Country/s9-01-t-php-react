import { useDispatch } from "react-redux";
import { setData } from "../../../../../features/certificateSlice";
import { InputFile } from "./InputFile";

const ItemData = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    console.log(e.target.name);

    dispatch(setData({ name, value }));
  };

  return (
    <form className="flex flex-col gap-y-6 h-[85%] overflow-auto">
      <div className="flex flex-col gap-y-5">
        <label className=" text-xl font-bold" name="institution" htmlFor="institution">
          Institucion
        </label>
        <input
          className=" p-2 border-[3px] border-[#E4E4E4]  rounded-lg"
          type="text"
          name="institution"
          id="institution"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-y-5">
        <label htmlFor="career_type" className=" text-xl font-bold">
          Nombre del curso
        </label>
        <input
          className=" p-2 border-[3px] border-[#E4E4E4]  rounded-lg"
          type="text"
          name="career_type"
          id="career_type"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-y-5">
        <label className=" text-xl font-bold" htmlFor="certificateConten">
          Leyenda del curso
        </label>
        <textarea
          className="p-2 border-[3px] border-[#E4E4E4]  rounded-lg"
          name="certificateConten"
          id="certificateConten"
          cols="30"
          rows="3"
          onChange={handleChange}
        ></textarea>
      </div>

      <div>LOGOS</div>

      <div className="flex flex-col">
        <h3 className=" text-xl font-bold">Firma</h3>
        <InputFile name="authority1" />
      </div>
      <div className="flex flex-col">
        <h3 className=" text-xl font-bold">Firma 2</h3>
        <InputFile name="authority2" />
      </div>
    </form>
  );
};

export default ItemData;
