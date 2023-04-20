import { NavigateFunction } from "react-router";
import { IAdResponse } from "../adSchema.interface";
import {
  IUserLogin,
  IUserLoginInfo,
  IUserRegister,
  IUserResponse,
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
  userLoginAdminInfo: IUserLoginInfo | null;
  setUserLoginAdminInfo: React.Dispatch<
    React.SetStateAction<IUserLoginInfo | null>
  >;
  announcements: IAdResponse[] | null;
  setAnnouncements: React.Dispatch<React.SetStateAction<IAdResponse[] | null>>;
  actualPage: number;
  setActualPage: React.Dispatch<React.SetStateAction<number>>;
}

export interface IAdminContext {
  loadingAdminPage: boolean;
  setLoadingAdminPage: React.Dispatch<React.SetStateAction<boolean>>;
  nextPage: () => Promise<void>;
  previousPage: () => Promise<void>;
  exit: () => void;
  handleNewAnnouncement: (data: any) => Promise<void>;
}
