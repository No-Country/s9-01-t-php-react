import Layout from "../components/Layout/Layout";
import { useAuth } from "../hooks/useAuth";
import { useInputExcel } from "../hooks/useInputExcel";

const Dashboard = () => {
  const { user, login, logout } = useAuth();
  const { dataExcel, handlerExcel } = useInputExcel();
  return (
    <Layout>
      <div className="flex w-full justify-center items-center mt-10">
        <h1 className=" font-bold text-2xl text-[#944343]">CREADOR DE CERTIFICADOS</h1>
      </div>
      <button onClick={() => login({ name: "ale" })}>Log in</button>
      <button onClick={() => logout()}>Log Out</button>

      <input type="file" name="fileExcel" onChange={handlerExcel} />
    </Layout>
  );
};

export default Dashboard;
