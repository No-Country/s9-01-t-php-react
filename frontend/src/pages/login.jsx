import { useState } from "react";
import { postRequest } from "../services/httpRequest";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/authSlice";
import { changeLang } from "../features/langSlice";

const inputStyle = " border-[1px] border-black text-sm p-1 rounded";

const Login = () => {
  const [inputs, setInputs] = useState({
    password: "",
    email: ""
  });
  const [loading, setLoading] = useState(false);
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

  const handlesInputs = e => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const handleSubmit = e => {
    e.preventDefault();

    /*    if (inputs.password.length < 3) {
      return setError({ password: "Contraseña demasiado corta" });
    } */

    setLoading(true);
    postRequest(inputs, "/api/v1/auth/login")
      .then(({ data }) => {
        const { user, token } = data;
        dispatch(login({ user, token }));
      })
      .catch(e => console.error(e))
      .finally(() => setLoading(false));
  };

  return (
    <section className=" min-w-[340px] h-[80vh] p-1">
      <form onSubmit={handleSubmit} className=" mx-auto h-full flex flex-col max-w-[350px]  ">
        <h1 className=" font-bold text-xl">{title}</h1>
        <p className=" mb-3">{paragraph}</p>

        <label className="flex flex-col">
          <span className=" font-bold ">{emailTitle}</span>
          <input
            className={inputStyle}
            type="email"
            name="email"
            value={inputs.email}
            required
            onChange={handlesInputs}
            placeholder={emailPlaceholder}
          />
          <div className=" h-4">
            {/*   {error.email && <p className="text-center text-sm text-[#b96161fc]">{error.email}</p>} */}
          </div>
        </label>
        <label className="flex flex-col my-4">
          <span className="font-bold">{passwordTitle}</span>
          <input
            className={inputStyle}
            type="text"
            value={inputs.password}
            name="password"
            min={5}
            placeholder={passwordPlahceholder}
            required
            onChange={handlesInputs}
          />
          <div className=" h-4">
            {/*   {error.password && (
              <p className="text-center text-sm text-[#b96161fc]">{error.password}</p>
            )} */}
          </div>
        </label>

        <div className="flex flex-col gap-2 mt-[4rem] font-bold">
          <button
            disabled={loading}
            type="submit"
            className=" text-white rounded p-1 bg-slate-400 disabled:opacity-75 hover:opacity-90 ">
            {confirmButton}
          </button>
          <button
            onClick={() => navigate("/register")}
            disabled={loading}
            className=" rounded border-2 hover:bg-slate-50   p-1 disabled:opacity-75">
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
    </section>
  );
};

export default Login;
