import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import ErrorPage from "../pages/error-page";
import { UserRouteProtected } from "./user/userRouteProtected";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<UserRouteProtected />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
