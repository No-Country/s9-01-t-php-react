import { useEffect, useState } from "react";
import { postRequest } from "../services/httpRequest";
import { useNavigate } from "react-router-dom";

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

  const handleChange = e => {
    setUserRegister({ ...userRegister, [e.target.id]: e.target.value });
  };

  const handleConfirmPassChange = e => {
    setConfirmPass(e.target.value);
    setIsNotValid(isValid());
  };

  const handleSubmit = e => {
    e.preventDefault();

    setUserRegister({
      name: "",
      email: "",
      password: ""
    });
    registerUser();
    setConfirmPass("");
  };

  const registerUser = async () => {
    try {
      setIsLoading(true);
      let response = await postRequest(userRegister, "/api/v1/users");

      const userRegitered = response?.data.user;
      if (userRegitered?.name) {
        let name = userRegitered.name;
        let email = userRegitered.email;
        setIsLoading(false);
        alert(`${name} registrado exitosamente con e-mail ${email}`);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const isValid = () => {
    const password = userRegister.password;
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
                    placeholder="Contraseña"
                    onChange={handleChange}
                    className="w-full h-10 rounded-md border border-black p-3 focus:outline-none focus:border-2"
                    required
                  />
                  {isVisiblePass === "password" ? (
                    <div
                      className="absolute w-4 h-4 bg-green rounded-full top-3 right-2 text-xl cursor-pointer"
                      onClick={() => setIsVisiblePass("text")}
                    />
                  ) : (
                    <div
                      className="absolute w-4 h-4 bg-red rounded-full top-3 right-2 text-xl cursor-pointer"
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
                } text-white p-2  rounded-lg mt-4`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="border-2 border-white border-t-ligthblue rounded-full w-5 h-5 animate-spin"></div>
                  </div>
                ) : (
                  "Registrarse"
                )}
              </button>
              <button
                type="submit"
                className={` flex items-center justify-center w-full h-10 border-2 border-black text-black p-2 font-bold rounded-lg mt-1`}
              >
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
