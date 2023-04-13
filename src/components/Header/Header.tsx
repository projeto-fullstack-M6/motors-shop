import { Link } from "react-router-dom";
import MotorsShop from "../../assets/MotorsShop.svg";
import { StyledHeader } from "./style";
import { StyledLinkLogin, StyledLinkRegister } from "../../styles/link";

// SUBSTITUIR A ANCORA POR UM LINK AO FAZER AS ROTAS

export const Header = () => {
  return (
    <StyledHeader id="header">
      <img src={MotorsShop} alt="logo" />
      <nav>
        <StyledLinkLogin /*to="/login"*/>Fazer Login</StyledLinkLogin>
        <StyledLinkRegister /*to="/register"*/ className="link-register">
          Cadastrar
        </StyledLinkRegister>
      </nav>
    </StyledHeader>
  );
};
