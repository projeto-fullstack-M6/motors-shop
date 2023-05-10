import { createContext, useContext, useEffect, useState } from "react";
import { ApiRequests } from "../services";
import { UserContext } from "./UserContext";
import { toast } from "react-hot-toast";
import {
  IAdminContext,
  IChildren,
} from "../interfaces/Context/contexts.interface";
import { kenzieKarsRequests } from "../services/kenzieKars";
import { IAdRegister, IAdUpdate } from "../interfaces/adSchema.interface";

export const AdminContext = createContext({} as IAdminContext);

export const AdminProvider = ({ children }: IChildren) => {
  const [carDetails, setCarDetails] = useState<any>({});

  const {
    announcements,
    setUserLoginAdminInfo,
    setAnnouncements,
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
  const [isEditAndDeleteAdModalActive, setIsEditAndDeleteAdModalActive] =
    useState(false);
  const [updatingAd, setUpdatingAd] = useState(false);
  const [deletingAd, setDeletingAd] = useState(false);
  const [confirmDeleteAd, setConfirmDeleteAd] = useState(false);
  const [adToDeleteOrUpdateId, setAdToDeleteOrUpdateId] = useState("");
  const [defaultBrandValueEditModal, setDefaultBrandValueEditModal] =
    useState("");
  const [defaultModelValueEditModal, setDefaultModelValueEditModal] =
    useState("");
  const [allAnnouncements, setAllAnnouncements] = useState<any>(null);
  const [loadingAnnouncements, setLoadingAnnouncements] = useState(false);
  const [loginRegisterCard, setLoginRegisterCard] = useState(false);

  const getAllAnnouncementsToHomePage = async () => {
    try {
      setLoadingAnnouncements(true);
      const everyAnnouncement = await ApiRequests.get("/announcements/?page=1");
      setAllAnnouncements(everyAnnouncement.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingAnnouncements(false);
    }
  };

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
      setAllAnnouncementsImages([]);
    }
  };

  const handleUpdateAnnouncement = async (data: IAdUpdate) => {
    try {
      setUpdatingAd(true);
      const newData = {
        model: data.model === "--" ? undefined : data.model,
        brand: data.brand === "" ? undefined : data.brand,
        description: data.description === "" ? undefined : data.description,
        price: data.price === "" ? undefined : data.price,
        km: data.km === "" ? undefined : data.km,
        color: data.color === "" ? undefined : data.color,
        fipePrice: data.fipePrice === "" ? undefined : data.fipePrice,
        images:
          allAnnouncementsImages!.length === 0
            ? undefined
            : allAnnouncementsImages,
      };
      const updateAd = await ApiRequests.patch(
        `/announcements/${adToDeleteOrUpdateId}`,
        newData
      );
      const filterAds = announcements?.filter(
        (announcement) => announcement.id !== adToDeleteOrUpdateId
      );
      setAnnouncements([updateAd.data, ...filterAds!]);
      toast.success("Anúncio atualizado com sucesse!");
    } catch (error) {
      console.log(error);
      toast.error(
        "Não foi possível atualizar o anúncio. Tente novamente mais tarde"
      );
    } finally {
      setUpdatingAd(false);
      setAllAnnouncementsImages([]);
      setIsEditAndDeleteAdModalActive(false);
    }
  };

  const handleDeleteAnnouncement = async () => {
    try {
      setDeletingAd(true);
      await ApiRequests.delete(`/announcements/${adToDeleteOrUpdateId}`);
      const filterAnnuncements = announcements?.filter(
        (announcement) => announcement.id !== adToDeleteOrUpdateId
      );
      setAnnouncements([...filterAnnuncements!]);
      toast.success("Anúncio deletado com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error(
        "Não foi possível deletar o anúncio. Tente novamente mais tarde"
      );
    } finally {
      // setDeletingAd(false);
      // setConfirmDeleteAd(false);
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
        handleNewAnnouncement,
        handleUpdateAnnouncement,
        handleDeleteAnnouncement,
        carDetails,
        setCarDetails,
        isAnnouncementModalActive,
        setIsAnnouncementModalActive,
        getAllBrandsForAnnouncements,
        getAllCarsForAnnouncements,
        getCarInfoClosedOption,
        getAllAnnouncementsToHomePage,
        isEditAndDeleteAdModalActive,
        setIsEditAndDeleteAdModalActive,
        updatingAd,
        setUpdatingAd,
        deletingAd,
        setDeletingAd,
        adToDeleteOrUpdateId,
        setAdToDeleteOrUpdateId,
        confirmDeleteAd,
        setConfirmDeleteAd,
        defaultBrandValueEditModal,
        setDefaultBrandValueEditModal,
        defaultModelValueEditModal,
        setDefaultModelValueEditModal,
        allAnnouncements,
        setAllAnnouncements,
        loadingAnnouncements,
        setLoadingAnnouncements,
        loginRegisterCard,
        setLoginRegisterCard,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
