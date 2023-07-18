import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const LayoutLanding = ({ children }) => {
  return (
    <main className="w-full min-h-screen flex flex-col items-center">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default LayoutLanding;
