import { useState } from "react";
import { postRequest } from "../services/httpRequest";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/authSlice";
import { changeLang } from "../features/langSlice";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import useToast from "../hooks/useToast";

const Login = () => {
  const [inputs, setInputs] = useState({
    password: "",
    email: ""
  });
  const [isVisiblePass, setIsVisiblePass] = useState("password");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ email: "", password: "" });
  const { login: loginLang } = useSelector(state => state.lang);
  const {
    title,
    paragraph,
    emailTitle,
    emailPlaceholder,
    passwordTitle,
    passwordPlahceholder,
    confirmButton,
    noAccountButton
  } = loginLang;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { toastSuccess, toastError } = useToast();

  const handlesInputs = e => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (inputs.password.length < 6) {
      return setError({ password: "La contraseña debe ser mas de 5 carácteres" });
    }
    loginUser();
  };

  const loginUser = async () => {
    try {
      setLoading(true);
      const { data: auth, error } = await postRequest(inputs, "/api/v1/auth/login");
      if (auth?.user) {
        toastSuccess("Successfully logged in");
        dispatch(login(auth));
        navigate("/home");
      } else {
        toastError(error.error);
      }
    } catch (error) {
      toastError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex items-center px-4 w-full h-10 bg-slate-500">
        <p className="text-white font-bold">CertifyMe</p>
      </div>
      <section className="flex justify-center min-w-[340px] h-[80vh] p-4">
        <div className="justify-center w-full max-w-[25rem] md:border md:rounded-lg md:p-4">
          <h1 className=" font-bold text-xl">{title}</h1>
          <p className=" mb-3">{paragraph}</p>
          <form onSubmit={handleSubmit} className=" mx-auto h-full flex flex-col max-w-[350px]  ">
            <label className="flex flex-col">
              <span className=" font-bold ">{emailTitle}</span>
              <input
                className="w-full h-10 rounded-md border border-black 2 p-3 focus:outline-none focus:border-2"
                type="email"
                name="email"
                value={inputs.email}
                required
                onChange={handlesInputs}
                placeholder={emailPlaceholder}
              />
            </label>
            <label className="flex flex-col my-2">
              <span className="font-bold">{passwordTitle}</span>
              <div className=" relative">
                <input
                  className="w-full h-10 rounded-md border border-black 2 p-3 focus:outline-none focus:border-2"
                  type={isVisiblePass}
                  value={inputs.password}
                  name="password"
                  min={5}
                  placeholder={passwordPlahceholder}
                  required
                  onChange={handlesInputs}
                />
                {isVisiblePass === "password" ? (
                  <AiOutlineEye
                    className="absolute top-3 right-2 text-xl cursor-pointer"
                    onClick={() => setIsVisiblePass("text")}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute top-3 right-2 text-xl cursor-pointer"
                    onClick={() => setIsVisiblePass("password")}
                  />
                )}
              </div>
              {error.password && (
                <div className=" h-4">
                  <p className="text-center text-sm text-[#b96161fc]">{error.password}</p>
                </div>
              )}
            </label>

            <div className="flex flex-col gap-2 mt-[4rem] font-bold">
              <button
                disabled={loading}
                type="submit"
                className="h-10 text-white rounded p-1 bg-blue-500 disabled:opacity-75 hover:opacity-90 ">
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="border-2 border-white border-t-ligthblue rounded-full w-5 h-5 animate-spin"></div>
                  </div>
                ) : (
                  confirmButton
                )}
              </button>
              <button
                onClick={() => navigate("/register")}
                disabled={loading}
                className="h-10 rounded border-2 hover:bg-slate-50   p-1 disabled:opacity-75">
                {noAccountButton}
              </button>
            </div>
          </form>
          <div className="flex">
            <button
              onClick={() => dispatch(changeLang("es"))}
              className=" rounded border-2 hover:bg-slate-50   p-1 disabled:opacity-75">
              es
            </button>
            <button
              onClick={() => dispatch(changeLang("en"))}
              className=" rounded border-2 hover:bg-slate-50   p-1 disabled:opacity-75">
              en
            </button>
            <button
              onClick={() => dispatch(changeLang("br"))}
              className=" rounded border-2 hover:bg-slate-50   p-1 disabled:opacity-75">
              br
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
