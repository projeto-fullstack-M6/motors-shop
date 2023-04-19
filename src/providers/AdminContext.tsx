import { useEffect, useState } from "react";
import { api } from "../services";

export const AdminProvider = ({ children }: any) => {
  const [actualPage, setActualPage] = useState(1);
  const [announcements, setAnnouncements] = useState(null);

  useEffect(() => {
    async function loadAdminUser() {
      const token = localStorage.getItem("MotorsShopToken");
      const userId = localStorage.getItem("MotorsShopId");
      if (token && userId) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;
          const data = api.get(`/users/${userId}`);
          const announcements = api.get(
            `/announcements/user/specif/?page=${actualPage}`
          );
        } catch (error) {
          console.log(error);
        }
      }
    }
  });
};
