import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import ErrorPage from "../pages/error-page";
import { UserRouteProtected } from "./user/userRouteProtected";
import Dashboard from "../pages/dashboard";
import Profile from "../pages/profile";
import Landing from "../pages/landing";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Faq from "../pages/faq";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/faq" element={<Faq />} />
          <Route element={<UserRouteProtected />}>
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
