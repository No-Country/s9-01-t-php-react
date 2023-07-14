import Certificate_01 from "../components/Certificate/Certificate_01";
import MenuCertificate from "../components/Certificate/MenuCertificate/MenuCertificate";
import Layout from "../components/Layout/Layout";

const Dashboard = () => {
  return (
    <Layout>
      <div className="w-full flex mt-4 justify-center gap-8">
        <MenuCertificate />

        <Certificate_01 />
      </div>
    </Layout>
  );
};

export default Dashboard;
