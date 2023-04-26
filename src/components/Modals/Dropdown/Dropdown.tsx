import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";
import { StyledButton } from "../../../styles/button";
import { StyledLinkDropdown } from "../../../styles/link";
import { StyledDropdown } from "./styled";

export const Dropdown = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      {user?.isBuyer ? (
        <StyledDropdown className="caralho">
          <div>
            <StyledButton
              width="twelve"
              height="three"
              buttonStyled="white"
              font="one"
            >
              Editar Perfil
            </StyledButton>

            <StyledButton
              width="twelve"
              height="three"
              buttonStyled="white"
              font="one"
            >
              Editar Endereço
            </StyledButton>

            <StyledButton
              width="twelve"
              height="three"
              buttonStyled="white"
              font="one"
            >
              Sair
            </StyledButton>
          </div>
        </StyledDropdown>
      ) : (
        <StyledDropdown>
          <div>
            <StyledButton
              width="twelve"
              height="three"
              buttonStyled="white"
              font="one"
            >
              Editar Perfil
            </StyledButton>

            <StyledButton
              width="twelve"
              height="three"
              buttonStyled="white"
              font="one"
            >
              Editar Endereço
            </StyledButton>

            <StyledLinkDropdown to="/adminDashboard">
              Meus Anúncios
            </StyledLinkDropdown>

            <StyledButton
              width="twelve"
              height="three"
              buttonStyled="white"
              font="one"
            >
              Sair
            </StyledButton>
          </div>
        </StyledDropdown>
      )}
    </>
  );
};
