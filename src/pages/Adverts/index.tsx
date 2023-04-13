import { Footer } from "../../components/Footer/Footer"
import MotorsShop from "../../assets/MotorsShop.svg";
import { Header } from "./style";





const adverts = () => {
    return(
       <>
        <Header>
            <img src={MotorsShop} alt="logo" />
            <div>
                <p className="acronym">PL</p>
                <p className="name">Petrus Lobato</p>
            </div>
            
        </Header>
       
        <Footer/>
       
       
       
       
       
       
       
       
       </>
    )
}

export default adverts
