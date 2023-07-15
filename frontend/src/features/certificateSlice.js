import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
    }
  }
});

export const { setStudents, setStudentSelected } = certificate.actions;

export default certificate.reducer;
