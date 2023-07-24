import { createSlice } from "@reduxjs/toolkit";
import { getRequest, postRequest, postRequestFile } from "../services/httpRequest";

const initialState = {
  emission_date: "",
  certificateTitle: "",
  institution: "",
  id_template: "",
  career_type: "",
  certificateContent: "",
  authorities: "",
  logos: [],
  studentSelected: {},
  students: []
};

const certificate = createSlice({
  name: "certificate",
  initialState: initialState,
  reducers: {
    setStudents: (state, action) => {
      state.students = action.payload;
      state.studentSelected = action.payload ? action.payload[0] : {};
    },
    setStudentSelected: (state, action) => {
      const student = state.students.find(student => student.DNI === action.payload.DNI);
      if (!student) return;
      state.studentSelected = action.payload;
    },
    setRemoveStudent: (state, action) => {
      state.students = state.students.filter(student => student.DNI !== action.payload);
      state.studentSelected = state.students[0];
    },
    setData: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    setLogo: (state, action) => {
      const { data } = action.payload;
      state.logos = data;
    }
  }
});

export const { setStudents, setStudentSelected, setData, setLogo, setRemoveStudent } =
  certificate.actions;

export default certificate.reducer;

export const getSendAllCertificate = idCertificates => async dispatch => {
  try {
    const certificateSended = await getRequest(`/api/v1/certificates/sendall/${idCertificates}`);
    if (certificateSended.status === "success") {
      console.log("ENVIADOS: ", certificateSended);
      return "Certificados enviados con exito!!!";
    }
  } catch (error) {
    console.log(error);
  }
};

export const postLogos = image => async dispatch => {
  try {
    const imageSaved = await postRequestFile(image, "/api/v1/logos");
    if (imageSaved) {
      dispatch(setLogo(imageSaved));
    }
  } catch (error) {
    console.log(error);
  }
};

export const postCertificate = certificate => async dispatch => {
  try {
    const certificateSaved = await postRequest(certificate, "/api/v1/certificates");
    if (certificateSaved) {
      return certificateSaved;
    }
  } catch (error) {
    console.log(error);
  }
};
