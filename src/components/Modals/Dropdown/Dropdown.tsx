import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";

import { ModalEditProfile } from "../ModalEditProfile/ModalEditProfile";
import { ModalEditAddress } from "../ModalEditAddress/ModalEditAddress";

import { StyledButton } from "../../../styles/button";
import { StyledDropdown } from "./styled";
import { StyledLinkDropdown } from "../../../styles/link";

export const Dropdown = () => {
  const {
    userLoginAdminInfo,
    userLogout,
    showEditUser,
    setShowEditUser,
    showEditAddress,
    setShowEditAddress,
  } = useContext(UserContext);

  return (
    <>
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

          {userLoginAdminInfo?.isBuyer === false ? (
            <StyledLinkDropdown to="/dashboard">
              Meus Anúncios
            </StyledLinkDropdown>
          ) : (
            ""
          )}

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

      {showEditUser && <ModalEditProfile />}
      {showEditAddress && <ModalEditAddress />}
    </>
  );
};
