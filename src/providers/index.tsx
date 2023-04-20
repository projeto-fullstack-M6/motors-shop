import { IChildren } from "../interfaces/Context/contexts.interface";
import { AdminProvider } from "./AdminContext";
import { UserProvider } from "./UserContext";

export const Providers = ({ children }: IChildren) => {
  return (
    <UserProvider>
      <AdminProvider>{children}</AdminProvider>
    </UserProvider>
  );
};
