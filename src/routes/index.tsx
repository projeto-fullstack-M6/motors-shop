import { Route, Routes } from "react-router-dom";
import Adverts from "../pages/Adverts";
import { HomePage } from "../pages/Home";
import { LoginPage } from "../pages/Login/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/adverts" element={<Adverts />} />
    </Routes>
  );
};

export default AppRoutes;
