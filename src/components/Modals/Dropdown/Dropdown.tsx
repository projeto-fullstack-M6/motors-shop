import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";

import { ModalEditProfile } from "../ModalEditProfile/ModalEditProfile";
import { ModalEditAddress } from "../ModalEditAddress/ModalEditAddress";

import { StyledButton } from "../../../styles/button";
import { StyledDropdown } from "./styled";
import { StyledLinkDropdown } from "../../../styles/link";

export const Dropdown = () => {
  const {
    user,
    userLogout,
    showEditUser,
    setShowEditUser,
    showEditAddress,
    setShowEditAddress,
  } = useContext(UserContext);

  return (
    <>
      {user?.isBuyer ? (
        <StyledDropdown>
          <div>
            <StyledButton
              width="twelve"
              height="three"
              buttonStyled="white"
              font="one"
              onClick={() => setShowEditUser(true)}
            >
              Editar Perfil
            </StyledButton>

            <StyledButton
              width="twelve"
              height="three"
              buttonStyled="white"
              font="one"
              onClick={() => setShowEditAddress(true)}
            >
              Editar Endereço
            </StyledButton>

            <StyledButton
              width="twelve"
              height="three"
              buttonStyled="white"
              font="one"
              onClick={() => userLogout()}
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
              onClick={() => setShowEditUser(true)}
            >
              Editar Perfil
            </StyledButton>

            <StyledButton
              width="twelve"
              height="three"
              buttonStyled="white"
              font="one"
              onClick={() => setShowEditAddress(true)}
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
              onClick={() => userLogout()}
            >
              Sair
            </StyledButton>
          </div>
        </StyledDropdown>
      )}

      {showEditUser && <ModalEditProfile />}
      {showEditAddress && <ModalEditAddress />}
    </>
  );
};
