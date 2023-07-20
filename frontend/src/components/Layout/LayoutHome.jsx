import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Topbar from "../Topbar/Topbar";

const LayoutHome = () => {
  return (
    <main className="w-full min-h-screen flex flex-col items-center">
      <Topbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default LayoutHome;
