import { createSlice } from "@reduxjs/toolkit";
import { postRequestFile } from "../services/httpRequest";

const initialState = {
  institution: "",
  id_template: "",
  career_type: "",
  certificateConten: "",
  authority1: "",
  authority2: "",
  id_logo: 0,
  studentSelected: {},
  students: [
    {
      dni: 0,
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

export const postImg = file => async dispatch => {
  console.log("post");

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
