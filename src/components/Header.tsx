import { Link } from "react-router-dom";
import MotorsShop from "../assets/MotorsShop.svg";

export const Header = () => {
  return (
    <header>
      <img src={MotorsShop} alt="logo" />
      <nav>
        <Link to="/login">Fazer Login</Link>
        <button>Cadastrar</button>
      </nav>
    </header>
  );
};
