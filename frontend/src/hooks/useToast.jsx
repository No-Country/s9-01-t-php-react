import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const successOptions = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored"
};

const errorOptions = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored"
};

const useToast = () => {
  const toastSuccess = message => {
    toast.success(message, successOptions);
  };

  const toastError = message => {
    toast.error(message, errorOptions);
  };

  return { toastSuccess, toastError };
};

export default useToast;
