import { Navigate, Route, Routes } from "react-router-dom";
import Adverts from "../pages/Adverts";
import { HomePage } from "../pages/Home";
import ProtectedRoutes from "../components/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="*" element={<Navigate to={"/"} />}  />

      <Route element={<ProtectedRoutes/>}>

      </Route>
        <Route path="/adverts" element={<Adverts />} />

      
    </Routes>
  );
};

export default AppRoutes;
