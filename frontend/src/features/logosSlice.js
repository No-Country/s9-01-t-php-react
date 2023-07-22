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
      state.logoSelected = action.payload;
    }
  }
});

export const { setListLogo, setSelectedLogo } = logos.actions;

export default logos.reducer;

export const getAllLogos = () => async dispatch => {
  try {
    const allLogos = await getRequest(`/api/v1/logos`);
    if (allLogos.status === "success") {
      console.log("allLogos: ", allLogos);
      dispatch(setListLogo(allLogos?.data.logos));
    }
  } catch (error) {
    console.log(error);
  }
};
