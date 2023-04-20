import { useContext } from 'react'

import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const ProtectedRoutes = () => {

  const { user, refreshing } = useContext(AuthContext);
  const location = useLocation();

  

  if(refreshing){
    return null
  }

  return (
   
    user ? <Outlet/> : <Navigate to='/' replace={true} state={{from: location}}/>

  )
}

export default ProtectedRoutes;