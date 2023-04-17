import MotorsShop from "../../assets/MotorsShop.svg";
import { StyledHeader } from "./style";
import { StyledLinkLogin, StyledLinkRegister } from "../../styles/link";

export const Header = () => {
  return (
    <StyledHeader id="header">
      <img src={MotorsShop} alt="logo" />
      <nav>
        <StyledLinkLogin to="/login">Fazer Login</StyledLinkLogin>
        <StyledLinkRegister to="/register" className="width-header">
          Cadastrar
        </StyledLinkRegister>
      </nav>
    </StyledHeader>
  );
};
