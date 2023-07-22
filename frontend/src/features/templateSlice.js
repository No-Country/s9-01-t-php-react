import { createSlice } from "@reduxjs/toolkit";
import { getRequest } from "../services/httpRequest";

const initialState = {
  templateSelected: {},
  list: [
    {
      _id: "",
      urlImg: "",
      publicId: "",
      name: "",
      status: true,
      updated_at: "",
      created_at: "",
      thumbnail: {
        _id: "",
        template_id: "",
        urlImg: "",
        publicId: "",
        updated_at: "",
        created_at: ""
      }
    }
  ]
};

const certificate = createSlice({
  name: "templates",
  initialState: initialState,
  reducers: {
    setTemplates: (state, action) => {
      state.list = action.payload;
      state.templateSelected = action.payload[0];
    },
    setSelectedTemplate: (state, action) => {
      state.templateSelected = action.payload;
    }
  }
});

export const { setTemplates, setSelectedTemplate } = certificate.actions;

export default certificate.reducer;

export const getAllTemplates = () => async dispatch => {
  try {
    const allTemplate = await getRequest(`/api/v1/templates`);
    if (allTemplate.status === "success") {
      dispatch(setTemplates(allTemplate?.data.templates));
    }
  } catch (error) {
    console.log(error);
  }
};
