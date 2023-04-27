import { createContext, useContext, useEffect, useState } from "react";
import { ApiRequests } from "../services";
import { UserContext } from "./UserContext";
import { toast } from "react-hot-toast";
import {
  IAdminContext,
  IChildren,
} from "../interfaces/Context/contexts.interface";

export const AdminContext = createContext({} as IAdminContext);

export const AdminProvider = ({ children }: IChildren) => {
  const {
    announcements,
    setUserLoginAdminInfo,
    setAnnouncements,
    navigate,
    actualPage,
    setActualPage,
  } = useContext(UserContext);
  const [loadingAdminPage, setLoadingAdminPage] = useState(false);

  const nextPage = async () => {
    try {
      const announcements: any = await ApiRequests.get(
        `/announcements/user/specif/?page=${actualPage + 1}`
      );
      setAnnouncements(announcements.data.data);
      setActualPage(actualPage + 1);
    } catch (error) {
      console.log(error);
      toast.error(
        "Não foi possível ir para a próxima página. Tente novamente mais tarde"
      );
    }
  };

  const previousPage = async () => {
    try {
      const announcements: any = await ApiRequests.get(
        `/announcements/user/specif/?page=${actualPage - 1}`
      );
      setAnnouncements(announcements.data.data);
      setActualPage(actualPage - 1);
    } catch (error) {
      console.log(error);
      toast.error(
        "Não foi possível ir para a próxima página. Tente novamente mais tarde"
      );
    }
  };

  const exit = (): void => {
    setUserLoginAdminInfo(null);
    setAnnouncements(null);
    setActualPage(1);
    localStorage.removeItem("@motors:token");
    navigate("/");
    toast.success("Logout realizado com sucesso");
  };

  const handleNewAnnouncement = async (data: any) => {
    try {
      setLoadingAdminPage(true);
      const newAnnouncement = await ApiRequests.post("/announcements", data);
      setAnnouncements([newAnnouncement.data, ...announcements!]);
      toast.success("Anúncio criado com sucesso");
    } catch (error) {
      console.log(error);
      toast.error(
        "Não foi possível criar o anúncio. Tente novamente mais tarde"
      );
    } finally {
      setLoadingAdminPage(false);
    }
  };

  useEffect(() => {
    async function loadAdminUser() {
      const token = localStorage.getItem("@motors:token");
      if (token) {
        try {
          ApiRequests.defaults.headers.authorization = `Bearer ${token}`;
          const userLoginAdminInfo: any = await ApiRequests.get(
            `/users/own/profile`
          );
          const announcements: any = await ApiRequests.get(
            `/announcements/user/specif/?page=${actualPage}`
          );
          setUserLoginAdminInfo(userLoginAdminInfo.data);
          setAnnouncements(announcements.data.data);
        } catch (error) {
          console.log(error);
        }
      } else {
        navigate("/");
      }
    }
    loadAdminUser();
  }, []);

  return (
    <AdminContext.Provider
      value={{
        loadingAdminPage,
        setLoadingAdminPage,
        nextPage,
        previousPage,
        exit,
        handleNewAnnouncement,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
