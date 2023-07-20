import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const LayoutLanding = () => {
  return (
    <main className="w-full min-h-screen flex flex-col items-center">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default LayoutLanding;
