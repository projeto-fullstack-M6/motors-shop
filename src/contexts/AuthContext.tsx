import { ReactNode, createContext, useState } from "react";
import { IUser } from "../interfaces/user";


interface IAuthContext{
    user: IUser | null; 
    refreshing:boolean;
}

export interface IChildrenProps{
    children: ReactNode;
}

export const AuthContext = createContext({} as IAuthContext);


export const AuthProvider = ({children}:IChildrenProps) => {


  const [refreshing, setRefreshing] = useState(true);
  const [user, setUser] = useState<IUser | null>(null);

  
  

  return(

      <AuthContext.Provider value={{user, refreshing}}>
          {children}
      </AuthContext.Provider>

  )
}