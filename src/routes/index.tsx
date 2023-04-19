import { Route, Routes } from "react-router-dom";
import Adverts from "../pages/Adverts";
import { HomePage } from "../pages/Home";
import { AdminDashboard } from "../pages/AdminDashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/adverts" element={<Adverts />} />
      <Route path="/adminDashboard" element={<AdminDashboard />} />
    </Routes>
  );
};

export default AppRoutes;
