import { createSlice } from "@reduxjs/toolkit";
import { getRequest, postRequest, postRequestFile } from "../services/httpRequest";

const initialState = {
  institution: "",
  id_template: "",
  career_type: "",
  certificateContent: "",
  authority1: "",
  authority2: "",
  authority1_firm: "",
  authority2_firm: "",
  id_logo: 0,
  studentSelected: {},
  students: [
    {
      DNI: 0,
      name: "",
      lastname: "",
      email: ""
    }
  ]
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
      state.studentSelected = action.payload;
    },
    setData: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    }
  }
});

export const { setStudents, setStudentSelected, setData } = certificate.actions;

export default certificate.reducer;

export const getSendAllCertificate = idCertificates => async dispatch => {
  try {
    const certificateSended = await getRequest(`/api/v1/certificates/sendall/${idCertificates}`);
    console.log(certificateSended);
    if (certificateSended) {
      console.log("ENVIADOS: ", certificateSended);
    }
  } catch (error) {
    console.log(error);
  }
};

export const postImg = file => async dispatch => {
  try {
    const image = await postRequestFile(file, "/api/v1/logos");
    if (image) {
      console.log(image);
      /*  dispatch(setData({name:"", value:image})) */
    }
  } catch (error) {
    console.log(error);
  }
};

export const postCertificate = certificate => async dispatch => {
  console.log("postCertificate");
  try {
    const certificateSaved = await postRequest(certificate, "/api/v1/certificates");
    if (certificateSaved) {
      console.log("salved", certificateSaved);
      return certificateSaved;
    }
  } catch (error) {
    console.log(error);
  }
};
