import { useState } from "react";
import { read, utils } from "xlsx";

export const useInputExcel = () => {
  const [dataExcel, setDataExcel] = useState(null);

  const handlerExcel = async e => {
    const file = e.target.files[0];

    const is_XLSX = file.name.includes("xlsx");
    const is_XLS = file.name.includes("xls");
    if (is_XLSX || is_XLS) {
      const data = await file.arrayBuffer();

      const workbook = read(data);

      const result = utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);

      setDataExcel(result);
    } else {
      e.target.value = "";
    }
  };

  return { dataExcel, handlerExcel };
};
