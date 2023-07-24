import { createSlice } from "@reduxjs/toolkit";
import { getRequest, postRequestFile } from "../services/httpRequest";
import useToast from "../hooks/useToast";

const initialState = {
  authoritiesSelected: [],
  list: []
};

const authorities = createSlice({
  name: "authorities",
  initialState: initialState,
  reducers: {
    setListAuthorities: (state, action) => {
      state.list = action.payload;
    },
    setAddAuthorities: (state, action) => {
      state.list = [...state.list, action.payload];
    },
    setSelectedAuthorities: (state, action) => {
      const exist = state.authoritiesSelected.find(
        authority => authority._id === action.payload._id
      );
      if (exist) {
        state.authoritiesSelected = state.authoritiesSelected.filter(
          authority => authority._id !== action.payload._id
        );
      } else {
        state.authoritiesSelected = [...state.authoritiesSelected, action.payload];
      }
    }
  }
});

export const { setListAuthorities, setSelectedAuthorities, setAddAuthorities } =
  authorities.actions;

export default authorities.reducer;

export const getAllAuthorities = () => async dispatch => {
  try {
    const allAuthorities = await getRequest(`/api/v1/authorities`);
    if (allAuthorities.status === "success") {
      dispatch(setListAuthorities(allAuthorities?.data));
    }
  } catch (error) {
    console.log(error);
  }
};

export const postAddAuthorities = image => async dispatch => {
  const { toastSuccess } = useToast();
  try {
    const authority = await postRequestFile(image, "/api/v1/authorities");
    if (authority.status === "success") {
      dispatch(setAddAuthorities(authority.data));
      toastSuccess("Autoridad agregda con exito");
    }
  } catch (error) {
    console.log(error);
  }
};
