import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedTemplate } from "../../../../../features/templateSlice";

const ItemTemplates = () => {
  const templatesList = useSelector(state => state.templates.list);
  const dispatch = useDispatch();
  const [tempSelected, setTempSelected] = useState({});

  const selectedTemplate = template => {
    setTempSelected(template);
    dispatch(setSelectedTemplate(template));
  };
  return (
    <div className="w-full h-full">
      <div className="flex flex-wrap justify-center w-full h-[85%] overflow-y-auto">
        {templatesList?.map(template => {
          return (
            <div key={template._id} className="m-2 cursor-pointer">
              <img
                src={template.thumbnail.urlImg}
                alt={template.name}
                className={`${
                  tempSelected.name === template.name ? "rounded-md border-8 border-red-500" : null
                } w-62 box-border`}
                onClick={() => selectedTemplate(template)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemTemplates;
