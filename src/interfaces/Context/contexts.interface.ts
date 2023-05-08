import { NavigateFunction } from "react-router";
import { IAdResponse } from "../adSchema.interface";
import {
	IUserForgotPassword,
	IUserLogin,
	IUserLoginInfo,
	IUserRegister,
	IUserResponse,
	IUserUpdate,
} from "../userSchema.interface";

export interface IChildren {
	children: React.ReactNode;
}

export interface IUserContext {
	user: IUserResponse | null;
	setUser: React.Dispatch<React.SetStateAction<IUserResponse | null>>;
	navigate: NavigateFunction;
	userLogin: (data: IUserLogin) => Promise<void>;
	userRegister: (data: IUserRegister) => Promise<void>;
	updateUser: (data: IUserUpdate) => Promise<void>;
	deleteUser: () => Promise<void>;
	userLogout: () => void;
	userSendEmail: (data: IUserForgotPassword) => Promise<void>;
	forgotPassword: boolean;
	setForgotPassword: React.Dispatch<React.SetStateAction<boolean>>;
	showEditUser: boolean;
	setShowEditUser: React.Dispatch<React.SetStateAction<boolean>>;
	showEditAddress: boolean;
	setShowEditAddress: React.Dispatch<React.SetStateAction<boolean>>;
	showDropdown: boolean;
	setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>;
	loading: boolean;
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
	userLoginAdminInfo: IUserLoginInfo | null;
	setUserLoginAdminInfo: React.Dispatch<
		React.SetStateAction<IUserLoginInfo | null>
	>;
	announcements: IAdResponse[] | null;
	setAnnouncements: React.Dispatch<
		React.SetStateAction<IAdResponse[] | null>
	>;
	actualPage: number;
	setActualPage: React.Dispatch<React.SetStateAction<number>>;
	getComments: () => Promise<void>;
	comments: any;
	newComment: (data: any, id: string) => Promise<void>;
}

export interface IAdminContext {
	loadingAdminPage: boolean;
	setLoadingAdminPage: React.Dispatch<React.SetStateAction<boolean>>;
	nextPage: () => Promise<void>;
	previousPage: () => Promise<void>;
	handleNewAnnouncement: (data: any) => Promise<void>;
	handleUpdateAnnouncement: (data: any) => Promise<void>;
	handleDeleteAnnouncement: () => Promise<void>;
	carDetails: any;
	setCarDetails: React.Dispatch<React.SetStateAction<any>>;
	isAnnouncementModalActive: boolean;
	setIsAnnouncementModalActive: React.Dispatch<React.SetStateAction<boolean>>;
	getAllBrandsForAnnouncements: () => Promise<void>;
	carsOptions: any | null;
	setCarsOptions: React.Dispatch<any>;
	brandOptions: any | null;
	setBrandOptions: React.Dispatch<any>;
	allAnnouncementsImages: string[] | null;
	setAllAnnouncementsImages: React.Dispatch<
		React.SetStateAction<string[] | null>
	>;
	carYearClosedOption: string;
	carFuelClosedOption: string;
	carFipePriceClosedOption: string;
	setCarFipePriceClosedOption: React.Dispatch<React.SetStateAction<string>>;
	setCarFuelClosedOption: React.Dispatch<React.SetStateAction<string>>;
	setCarYearClosedOption: React.Dispatch<React.SetStateAction<string>>;
	getAllCarsForAnnouncements: (selectedBrand: string) => Promise<void>;
	getCarInfoClosedOption: (carId: string) => void;
	isEditAndDeleteAdModalActive: boolean;
	setIsEditAndDeleteAdModalActive: React.Dispatch<
		React.SetStateAction<boolean>
	>;
	updatingAd: boolean;
	setUpdatingAd: React.Dispatch<React.SetStateAction<boolean>>;
	deletingAd: boolean;
	setDeletingAd: React.Dispatch<React.SetStateAction<boolean>>;
	adToDeleteOrUpdateId: string;
	setAdToDeleteOrUpdateId: React.Dispatch<React.SetStateAction<string>>;
	confirmDeleteAd: boolean;
	setConfirmDeleteAd: React.Dispatch<React.SetStateAction<boolean>>;
	defaultBrandValueEditModal: string;
	setDefaultBrandValueEditModal: React.Dispatch<React.SetStateAction<string>>;
	defaultModelValueEditModal: string;
	setDefaultModelValueEditModal: React.Dispatch<React.SetStateAction<string>>;
	allAnnouncements: any;
	setAllAnnouncements: React.Dispatch<any>;
	getAllAnnouncementsToHomePage: () => Promise<void>;
}
