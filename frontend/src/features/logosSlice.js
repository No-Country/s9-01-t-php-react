import { createSlice } from "@reduxjs/toolkit";
import { getRequest } from "../services/httpRequest";

const initialState = {
  logoSelected: {},
  list: []
};

const logos = createSlice({
  name: "logos",
  initialState: initialState,
  reducers: {
    setListLogo: (state, action) => {
      state.list = action.payload;
    },
    setSelectedLogo: (state, action) => {
      if (state.logoSelected._id === action.payload._id) action.payload = {};
      state.logoSelected = action.payload;
    },
    setEmptySelectedLogo: (state, action) => {
      action.payload = {};
      state.logoSelected = action.payload;
    }
  }
});

export const { setListLogo, setSelectedLogo, setEmptySelectedLogo } = logos.actions;

export default logos.reducer;

export const getAllLogos = () => async dispatch => {
  try {
    const allLogos = await getRequest(`/api/v1/logos`);
    if (allLogos.status === "success") {
      dispatch(setListLogo(allLogos?.data));
    }
  } catch (error) {
    console.log(error);
  }
};
