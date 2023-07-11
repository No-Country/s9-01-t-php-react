import Navbar from "../Navbar/Navbar";
import Topbar from "../Topbar/Topbar";

const Layout = ({ children }) => {
  return (
    <main className="w-full min-h-screen flex flex-col items-center">
      <Topbar />
      {children}
      <Navbar />
    </main>
  );
};

export default Layout;
