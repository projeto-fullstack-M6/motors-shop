import { useContext, useState } from "react";

import { UserContext } from "../../providers/UserContext";

import MotorsShop from "../../assets/MotorsShop.svg";

import { StyledTitle } from "../../styles/typography";
import { StyledHeader } from "./style";
import { Dropdown } from "../Modals/Dropdown/Dropdown";
import { StyledLinkLogin, StyledLinkRegister } from "../../styles/link";

export const Header = () => {
  const { userLoginAdminInfo } = useContext(UserContext);
  const [showDropdown, setShowDropdown] = useState(false);

  const token = localStorage.getItem("@motors:token");
  return (
    <>
      <StyledHeader id="header">
        <img src={MotorsShop} alt="logo" />

        {token ? (
          <div onClick={() => setShowDropdown(!showDropdown)}>
            <StyledTitle
              tag="p"
              fontSize="body-2-700"
              color="white"
              className="acronym"
            >
              {userLoginAdminInfo?.name
                .split(" ")
                .map((name) => name.charAt(0))
                .join("")}
            </StyledTitle>

            <StyledTitle tag="p" fontSize="body-1-400" color="grey-2">
              {userLoginAdminInfo?.name}
            </StyledTitle>
          </div>
        ) : (
          <nav>
            <StyledLinkLogin to="/login">Fazer Login</StyledLinkLogin>
            <StyledLinkRegister to="/register" className="width-header">
              Cadastrar
            </StyledLinkRegister>
          </nav>
        )}
      </StyledHeader>

      {showDropdown && <Dropdown />}
    </>
  );
};
