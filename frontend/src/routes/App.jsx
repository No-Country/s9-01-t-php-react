import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import ErrorPage from "../pages/error-page";
import { UserRouteProtected } from "./user/userRouteProtected";
import Dashboard from "../pages/dashboard";
import Landing from "../pages/landing";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Faq from "../pages/faq";
import { About } from "../pages/about";
import Account from "../pages/account";
import CurrentPlan from "../pages/current-plan";
import PaymentHistory from "../pages/payment-history";
import Support from "../pages/support";
import LayoutLanding from "../components/Layout/LayoutLanding";
import LayoutHome from "../components/Layout/LayoutHome";
import { MyCertificate } from "../pages/myCertificate";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutLanding />}>
            <Route index element={<Landing />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="faq" element={<Faq />} />
            <Route path="my-certificate/:id" element={<MyCertificate />} />
          </Route>
          <Route element={<UserRouteProtected />}>
            <Route path="/" element={<LayoutHome />}>
              <Route path="home" element={<Home />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="account" element={<Account />} />
              <Route path="current-plan" element={<CurrentPlan />} />
              <Route path="payment-history" element={<PaymentHistory />} />
              <Route path="support" element={<Support />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
