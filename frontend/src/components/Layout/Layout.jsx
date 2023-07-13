import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <main className="w-full min-h-screen flex flex-col items-center">
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
