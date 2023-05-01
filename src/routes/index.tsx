import { Navigate, Route, Routes } from "react-router-dom";
import Adverts from "../pages/Adverts";
import { HomePage } from "../pages/Home";
import ProtectedRoutes from "../components/ProtectedRoute";
import Seller from "../pages/Seller"

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="*" element={<Navigate to={"/"} />}  />

      <Route path="/adverts" element={<Adverts />} />
      <Route path="/seller" element={<Seller />} />

      
      <Route element={<ProtectedRoutes/>}></Route>
    </Routes>
  );
};

export default AppRoutes;
