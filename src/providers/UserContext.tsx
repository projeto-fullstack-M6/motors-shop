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
  IUserRegister,
  IUserResponse,
} from "../interfaces/userSchema.interface";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IChildren) => {
  const [user, setUser] = useState<IUserResponse | null>(null);

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
      navigate("/dashboard");
      toast.success("Login realizado com sucesso.");
    } catch (error) {
      console.log(error);
      toast.error("Email e/ou senha são inválidos");
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, userLogin, userRegister }}>
      {children}
    </UserContext.Provider>
  );
};
