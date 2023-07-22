import axios from "axios";

const getLocalStorage = key => {
  const item = localStorage.getItem(key);

  if (!item) return;
  try {
    return JSON.parse(item);
  } catch (error) {
    console.log(error);
  }
  return item;
};

const URL = import.meta.env.VITE_API_URL;

const getToken = () => {
  const { token } = getLocalStorage("auth") || "";
  const Authorization = { token } && `Bearer ${token}`;

  return Authorization;
};

export const postRequest = async (dataSend, endpoint) => {
  try {
    const { data } = await axios.post(URL + endpoint, dataSend, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: getToken()
      }
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { error: error.response?.data };
    } else {
      console.log(error);
      return "An unexpected error occurred";
    }
  }
};

export const getRequest = async endpoint => {
  try {
    const { data } = await axios.get(URL + endpoint, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: getToken()
      }
    });

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);

      throw new Error(error.message);
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
};

export const postRequestFile = async (dataSend, endpoint) => {
  try {
    const { data } = await axios.post(URL + endpoint, dataSend, {
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
        Authorization: getToken()
      }
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { error: error.response?.data };
    } else {
      console.log(error);
      return "An unexpected error occurred";
    }
  }
};
