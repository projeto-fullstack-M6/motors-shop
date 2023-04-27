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
  IUserUpdate,
} from "../interfaces/userSchema.interface";
import { IAdResponse } from "../interfaces/adSchema.interface";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IChildren) => {
  const [user, setUser] = useState<IUserResponse | null>(null);

  const [showEditUser, setShowEditUser] = useState(false);

  const [showEditAddress, setShowEditAddress] = useState(false);

  const [showDropdown, setShowDropdown] = useState(false);

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
      localStorage.setItem("@motors:id", userLoginInformation.data.id);
      setUserLoginAdminInfo(userLoginInformation.data);

      if (userLoginInformation.data.isBuyer === false) {
        const userAnnouncements: any = await ApiRequests.get(
          `/announcements/user/specif/?page=${actualPage}`
        );
        setAnnouncements(userAnnouncements.data.data);
        // navigate("/dashboard");
      }
      navigate("/dashboard");
      toast.success("Login realizado com sucesso.");
    } catch (error) {
      console.log(error);
      toast.error("Email e/ou senha são inválidos");
    }
  };

  const updateUser = async (data: IUserUpdate) => {
    console.log(data);
    try {
      const token = localStorage.getItem("@motors:token");

      const response = await ApiRequests.patch(`/users/${userLoginAdminInfo?.id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(response.data);

      if (data.address) {
        toast.success("Endereço editado com sucesso.");
      } else {
        toast.success("Perfil editado com sucesso.");
      }
      setShowEditUser(false);
      setShowEditAddress(false);
    } catch (error) {
      console.log(error);
      if (data.address) {
        toast.error("Endereço não pôde ser editado");
      } else {
        toast.error("Perfil não pôde ser editado");
      }
    }
  };

  const deleteUser = async () => {
    try {
      const token = localStorage.getItem("@motors:token");

      const response = await ApiRequests.delete(`/users/${userLoginAdminInfo?.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(response.data);
      navigate("/");
      toast.success("Perfil excluído com sucesso.");
    } catch (error) {
      console.log(error);
      toast.error("Perfil não pôde ser excluído");
    }
  };

  const userLogout = () => {
    setUser(null);
    setShowDropdown(false);
    localStorage.removeItem("@motors:token");
    localStorage.removeItem("@motors:id");
    toast("Desconectado com sucesso!");
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        navigate,
        userLogin,
        userRegister,
        updateUser,
        deleteUser,
        userLogout,
        showEditUser,
        setShowEditUser,
        showEditAddress,
        setShowEditAddress,
        showDropdown, 
        setShowDropdown,
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
