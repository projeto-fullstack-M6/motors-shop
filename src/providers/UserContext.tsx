import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-hot-toast";

import { ApiRequests } from "../services";

import {
  IChildren,
  IUserContext,
} from "../interfaces/Context/contexts.interface";
import {
  IUserLogin,
  IUserLoginInfo,
  IUserRegister,
  IUserResponse,
} from "../interfaces/userSchema.interface";
import { IAdResponse } from "../interfaces/adSchema.interface";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IChildren) => {
  const [user, setUser] = useState<IUserResponse | null>(null);
  const [userLoginAdminInfo, setUserLoginAdminInfo] =
    useState<IUserLoginInfo | null>(null);
  const [announcements, setAnnouncements] = useState<IAdResponse[] | null>(
    null
  );
  const [actualPage, setActualPage] = useState(1);
  const navigate = useNavigate();

  const userRegister = async (data: IUserRegister) => {
    try {
      const response = await ApiRequests.post("/users", data);
      setUser(response.data);
      navigate("/login");
      toast.success("Cadastro realizado com sucesso.");
    } catch (error) {
      console.log(error);
      toast.error("E-mail já cadastrado");
    }
  };

  const userLogin = async (data: IUserLogin) => {
    try {
      const user = await ApiRequests.post("/sessions", data);
      localStorage.setItem("@motors:token", user.data.token);
      const userLoginInformation: any = await ApiRequests.get(
        `/users/own/profile`
      );
      localStorage.setItem("@motors:id", userLoginInformation.id);
      setUserLoginAdminInfo(userLoginInformation.data);
      if (userLoginInformation.data.isAdm) {
        const userAnnouncements: any = await ApiRequests.get(
          `/announcements/user/specif/?page=${actualPage}`
        );
        setAnnouncements(userAnnouncements.data.data);
        navigate("/adminDashboard");
      } else {
        navigate("/dashboard");
      }
      toast.success("Login realizado com sucesso.");
    } catch (error) {
      console.log(error);
      toast.error("Email e/ou senha são inválidos");
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        navigate,
        userLogin,
        userRegister,
        userLoginAdminInfo,
        setUserLoginAdminInfo,
        announcements,
        setAnnouncements,
        actualPage,
        setActualPage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};