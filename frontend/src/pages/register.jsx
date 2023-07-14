import { useEffect, useState } from "react";
import { postRequest } from "../services/httpRequest";
import { useNavigate } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import useToast from "../hooks/useToast";

const Register = () => {
  const [confirmPass, setConfirmPass] = useState("");
  const [isVisiblePass, setIsVisiblePass] = useState("password");
  const [isNotValid, setIsNotValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [userRegister, setUserRegister] = useState({
    name: "",
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const { toastSuccess, toastError } = useToast();

  const handleChange = e => {
    setUserRegister({ ...userRegister, [e.target.id]: e.target.value });
  };

  const handleConfirmPassChange = e => {
    setConfirmPass(e.target.value);
    setIsNotValid(isValid());
  };

  const handleSubmit = e => {
    e.preventDefault();

    registerUser();
  };

  const registerUser = async () => {
    try {
      setIsLoading(true);
      let { data, error } = await postRequest(userRegister, "/api/v1/users");
      if (data?.user?.name) {
        toastSuccess("Successfully register");
        setUserRegister({
          name: "",
          email: "",
          password: ""
        });
        setConfirmPass("");
        return navigate("/login");
      }
      if (error) toastError(error.errors.email[0]);
    } catch (error) {
      toastError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const isValid = () => {
    const password = userRegister.password;
    if (password.length < 6) return true;
    if (password === "") return true;
    if (password === confirmPass) return false;
    return true;
  };

  useEffect(() => {
    setIsNotValid(isValid());
  }, [userRegister.password, confirmPass]);

  return (
    <>
      <div className="flex items-center px-4 w-full h-10 bg-slate-500">
        <p className="text-white font-bold">CertifyMe</p>
      </div>
      <div className="flex justify-center w-full min-h-screen md:min-h-full p-4">
        <div className="w-full max-w-[25rem] md:border md:rounded-lg md:p-4">
          <h1 className=" font-bold text-xl">Registrate</h1>
          <p className=" text-base">
            ¡Crea una nueva cuenta y empieza a disfrutar todos nuestros beneficios!
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col justify-between w-full">
            <div>
              <div className="flex flex-col mt-4">
                <label htmlFor="name" className="font-medium mt-2">
                  Nombre:
                </label>
                <input
                  type="text"
                  id="name"
                  value={userRegister.name}
                  placeholder="Tu nombre"
                  onChange={handleChange}
                  className="w-full h-10 rounded-md border border-black 2 p-3 focus:outline-none focus:border-2"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="font-medium mt-2">
                  Correo:
                </label>
                <input
                  type="email"
                  id="email"
                  value={userRegister.email}
                  placeholder="correolectronico@gmail.com"
                  onChange={handleChange}
                  className="w-full h-10 rounded-md border border-black p-3 focus:outline-none focus:border-2"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="password" className="font-medium mt-2">
                  Contraseña:
                </label>
                <div className=" relative">
                  <input
                    type={isVisiblePass}
                    id="password"
                    value={userRegister.password}
                    placeholder="Contraseña (min 6 carácteres)"
                    onChange={handleChange}
                    className="w-full h-10 rounded-md border border-black p-3 focus:outline-none focus:border-2"
                    required
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
              </div>

              <div className="flex flex-col">
                <label htmlFor="confirmPass" className="font-medium mt-2">
                  Confirmar contraseña:
                </label>
                <input
                  type={isVisiblePass}
                  id="confirmPass"
                  value={confirmPass}
                  placeholder="Vuelve a escribir tu contraseña"
                  onChange={handleConfirmPassChange}
                  className="w-full h-10 rounded-md border border-black p-3 focus:outline-none focus:border-2"
                />
              </div>
            </div>
            <div className="flex flex-col w-full mt-10">
              <button
                type="submit"
                disabled={isNotValid}
                className={`w-full h-10 ${
                  isNotValid ? "bg-gray-700" : " bg-blue-500"
                } text-white p-2  rounded-lg mt-4`}>
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="border-2 border-white border-t-ligthblue rounded-full w-5 h-5 animate-spin"></div>
                  </div>
                ) : (
                  "Registrarse"
                )}
              </button>
              <button
                type="button"
                className={` flex items-center justify-center w-full h-10 border-2 border-black text-black p-2 font-bold rounded-lg mt-1`}
                onClick={() => navigate("/login")}>
                Ya tengo una cuenta
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
