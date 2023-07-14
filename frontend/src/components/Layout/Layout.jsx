import Footer from "../Footer/Footer";
import Topbar from "../Topbar/Topbar";

const Layout = ({ children }) => {
  return (
    <main className="w-full min-h-screen flex flex-col items-center">
      <Topbar />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
