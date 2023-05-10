import { Route, Routes } from "react-router-dom";
import Adverts from "../pages/Adverts";
import { HomePage } from "../pages/Home";
import { AdminDashboard } from "../pages/AdminDashboard";
import { LoginPage } from "../pages/Login/Login";
import { RegisterPage } from "../pages/Register/Register";
import { NotFound } from "../components/NotFound/NotFound";
import { ResetPassword } from "../pages/ResetPassword/ResetPassword";
import { AdvertiserAdPage } from "../pages/AdvertiserAd/AdvertiserAd";
import { UserContext } from "../providers/UserContext";
import { useContext } from "react";
import { LoadingPage } from "../components/LoadingPages";

const AppRoutes = () => {
  const { loadingLogin, loadingRegister } = useContext(UserContext);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/login"
        element={loadingRegister ? <LoadingPage /> : <LoginPage />}
      />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />

      <Route path="/adverts" element={<Adverts />} />
      <Route path="/advertiser" element={<AdvertiserAdPage />} />

      <Route
        path="/dashboard"
        element={loadingLogin ? <LoadingPage /> : <AdminDashboard />}
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
