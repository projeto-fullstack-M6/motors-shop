import { Route, Routes } from "react-router-dom";
import Adverts from "../pages/Adverts";
import { HomePage } from "../pages/Home";
import { LoginPage } from "../pages/Login/Login";
import { RegisterPage } from "../pages/Register/Register";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/adverts" element={<Adverts />} />
    </Routes>
  );
};

export default AppRoutes;
