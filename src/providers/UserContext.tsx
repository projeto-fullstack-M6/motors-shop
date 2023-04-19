import { createContext, useState } from "react";
import { IChildren, IUserContext } from "../interfaces/Context/contexts.interface";
import { ApiRequests } from "../services";
import { toast } from "react-hot-toast";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IChildren) => {
  const [user, setUser] = useState<IUser | null>(null);

  const userLogin = async (data: IUserLogin) => {
    try {
      const user = await ApiRequests.post("/login", data);
      localStorage.setItem("@motors:token", user.data.token);

      toast.success("Login realizado com sucesso.");
    } catch (error) {
      console.log(error);
      toast.error("Email e/ou senha são inválidos");
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, userLogin }}>
      {children}
    </UserContext.Provider>
  );
};
