import { IUserLogin, IUserResponse } from "../userSchema.interface";

export interface IChildren {
  children: React.ReactNode;
}

export interface IUserContext {
  user: IUserResponse | null;
  setUser: React.Dispatch<React.SetStateAction<IUserResponse | null>>;
  userLogin: (data: IUserLogin) => Promise<void>;
}
