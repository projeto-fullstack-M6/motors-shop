export interface IChildren {
  children: React.ReactNode;
}

export interface IUserContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  userLogin: (data: IUserLogin) => Promise<void>;
}
