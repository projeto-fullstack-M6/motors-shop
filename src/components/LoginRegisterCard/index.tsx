import { StyledLinkLogin, StyledLinkRegister } from "../../styles/link";
import { StyledDropdown } from "./style";

export const LoginRegisterCard = () => {
  return (
    <StyledDropdown>
      <div>
        <StyledLinkLogin to={"/login"}>Fazer login</StyledLinkLogin>
        <StyledLinkRegister to={"/register"}>Fazer cadastro</StyledLinkRegister>
      </div>
    </StyledDropdown>
  );
};
