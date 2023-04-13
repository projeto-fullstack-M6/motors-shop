import { Route, Routes } from "react-router-dom";
import Adverts from "../pages/Adverts";

const AppRoutes = () => {

    return(

        <Routes>
            <Route path="adverts" element={<Adverts/>} />
        </Routes>  
    )
  
};

export default AppRoutes;
