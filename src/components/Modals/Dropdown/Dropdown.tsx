import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";
import { StyledButton } from "../../../styles/button";
import { StyledLinkDropdown } from "../../../styles/link";

export const Dropdown = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      {user?.isBuyer ? (
        <div>
          <StyledButton width="ten" height="three" buttonStyled="white">
            Editar Perfil
          </StyledButton>

          <StyledButton width="ten" height="three" buttonStyled="white">
            Editar Endereço
          </StyledButton>

          <StyledButton width="ten" height="three" buttonStyled="white">
            Sair
          </StyledButton>
        </div>
      ) : (
        <div>
          <StyledButton width="ten" height="three" buttonStyled="white">
            Editar Perfil
          </StyledButton>

          <StyledButton width="ten" height="three" buttonStyled="white">
            Editar Endereço
          </StyledButton>

          <StyledLinkDropdown to="/adminDashboard">
            Meus Anúncios
          </StyledLinkDropdown>

          <StyledButton width="ten" height="three" buttonStyled="white">
            Sair
          </StyledButton>
        </div>
      )}
    </>
  );
};
