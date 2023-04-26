import { useContext, useState } from "react";

import { UserContext } from "../../providers/UserContext";

import MotorsShop from "../../assets/MotorsShop.svg";

import { StyledTitle } from "../../styles/typography";
import { StyledHeader } from "./style";
import { Dropdown } from "../Modals/Dropdown/Dropdown";

// APÓS CONSTRUIR OS ESTADOS, FAZER RENDERIZAÇÃO CONDICIONAL JUNTANDO OS DOIS HEADERS.
// CASO DESLOGADO USAR NAV, LOGADO USAR DIV.

export const HeaderIn = () => {
  const { userLoginAdminInfo } = useContext(UserContext);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <StyledHeader id="header">
      <img src={MotorsShop} alt="logo" />

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

        {showDropdown && <Dropdown />}
      </div>
    </StyledHeader>
  );
};
