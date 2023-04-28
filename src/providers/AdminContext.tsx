import { createContext, useContext, useEffect, useState } from "react";
import { ApiRequests } from "../services";
import { UserContext } from "./UserContext";
import { toast } from "react-hot-toast";
import {
  IAdminContext,
  IChildren,
} from "../interfaces/Context/contexts.interface";
import { kenzieKarsRequests } from "../services/kenzieKars";
import { IAdRegister } from "../interfaces/adSchema.interface";

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
  const [isAnnouncementModalActive, setIsAnnouncementModalActive] =
    useState(false);
  const [brandOptions, setBrandOptions] = useState<any>(null);
  const [carsOptions, setCarsOptions] = useState<any>(null);
  const [allAnnouncementsImages, setAllAnnouncementsImages] = useState<
    string[] | null
  >(null);
  const [carYearClosedOption, setCarYearClosedOption] = useState("");
  const [carFuelClosedOption, setCarFuelClosedOption] = useState("");
  const [carFipePriceClosedOption, setCarFipePriceClosedOption] = useState("");

  const getTheBrands = (response: any) => {
    const allBrandOptions = [];
    allBrandOptions.unshift("--");
    for (let value in response) {
      allBrandOptions.push(value);
    }
    setBrandOptions(allBrandOptions);
  };

  const getAllBrandsForAnnouncements = async () => {
    try {
      const brands: any = await kenzieKarsRequests.get("/cars");
      getTheBrands(brands.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllCarsForAnnouncements = async (selectedBrand: string) => {
    try {
      const cars: any = await kenzieKarsRequests.get(
        `/cars?brand=${selectedBrand}`
      );
      setCarsOptions(cars.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCarInfoClosedOption = (cardName: string) => {
    if (carsOptions.length > 0) {
      const car = carsOptions.find((car: any) => car.name === cardName);
      setCarYearClosedOption(car.year);
      setCarFipePriceClosedOption(car.value);
      if (car.fuel === 1) {
        setCarFuelClosedOption("Flex");
      } else if (car.fuel === 2) {
        setCarFuelClosedOption("Híbrido");
      } else {
        setCarFuelClosedOption("Elétrico");
      }
    }
  };

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

  const handleNewAnnouncement = async (data: IAdRegister) => {
    try {
      const newData = {
        brand: data.brand,
        model: data.model,
        year: data.year,
        fuel: data.fuel,
        km: data.km,
        color: data.color,
        fipePrice: data.fipePrice,
        price: data.price,
        description: data.description,
        images: allAnnouncementsImages!,
      };
      setLoadingAdminPage(true);
      const newAnnouncement = await ApiRequests.post("/announcements", newData);
      setAnnouncements([newAnnouncement.data, ...announcements!]);
      toast.success("Anúncio criado com sucesso");
    } catch (error) {
      console.log(error);
      toast.error(
        "Não foi possível criar o anúncio. Tente novamente mais tarde"
      );
    } finally {
      setLoadingAdminPage(false);
      setIsAnnouncementModalActive(false);
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
        carsOptions,
        setCarsOptions,
        brandOptions,
        setBrandOptions,
        carYearClosedOption,
        setCarYearClosedOption,
        carFuelClosedOption,
        setCarFuelClosedOption,
        carFipePriceClosedOption,
        setCarFipePriceClosedOption,
        allAnnouncementsImages,
        setAllAnnouncementsImages,
        nextPage,
        previousPage,
        exit,
        handleNewAnnouncement,
        isAnnouncementModalActive,
        setIsAnnouncementModalActive,
        getAllBrandsForAnnouncements,
        getAllCarsForAnnouncements,
        getCarInfoClosedOption,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
