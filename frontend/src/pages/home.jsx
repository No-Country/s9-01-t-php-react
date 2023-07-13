import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="my-20">
        <p>Esta es la Home</p>
        <Link to="/dashboard">
          <button className="w-[264px] h-[47px] bg-[#7F807F] text-white font-bold text-xl leading-6 rounded-[10px]">
            Crear un certificado
          </button>
        </Link>
      </div>
    </Layout>
  );
};

export default Home;
