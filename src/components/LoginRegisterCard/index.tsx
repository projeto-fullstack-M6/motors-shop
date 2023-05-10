import { AdminContext } from "../../providers/AdminContext";
import { UserContext } from "../../providers/UserContext";
import { StyledLinkLogin, StyledLinkRegister } from "../../styles/link";
import { StyledTitle } from "../../styles/typography";
import { StyledDropdown } from "./style";
import { useContext } from "react";

export const LoginRegisterCard = () => {
  const { setShowDropdown, showDropdown, userLoginAdminInfo } =
    useContext(UserContext);
  const { setLoginRegisterCard, loginRegisterCard } = useContext(AdminContext);
  const token = localStorage.getItem("@motors:token");
  return (
    <StyledDropdown>
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
              .join("")
              .toUpperCase()}
          </StyledTitle>

          <StyledTitle
            tag="p"
            fontSize="body-1-400"
            color="grey-2"
            className="ellipsis"
          >
            {userLoginAdminInfo?.name}
          </StyledTitle>
        </div>
      ) : (
        <div>
          <StyledLinkLogin to={"/login"}>Fazer login</StyledLinkLogin>
          <StyledLinkRegister to={"/register"}>
            Fazer cadastro
          </StyledLinkRegister>
        </div>
      )}
    </StyledDropdown>
  );
};
