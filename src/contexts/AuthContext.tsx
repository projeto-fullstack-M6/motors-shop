import { ReactNode, createContext, useState } from "react";
import { IUser } from "../interfaces/user";


interface IAuthContext{
    user: IUser | null; 
    refreshing:boolean;
    advertiser:boolean; 
}

export interface IChildrenProps{
    children: ReactNode;
}

export const AuthContext = createContext({} as IAuthContext);


export const AuthProvider = ({children}:IChildrenProps) => {


  const [refreshing, setRefreshing] = useState(true);
  const [user, setUser] = useState<IUser | null>(null);
  const [advertiser, setAdvertiser] = useState(true)

  
  

  return(

      <AuthContext.Provider value={{user, refreshing, advertiser}}>
          {children}
      </AuthContext.Provider>

  )
}