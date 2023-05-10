import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import MotorsShop from "../../assets/MotorsShop.svg";
import { StyledTitle } from "../../styles/typography";
import { StyledHeader } from "./style";
import { Dropdown } from "../Dropdown/Dropdown";
import { StyledLinkLogin, StyledLinkRegister } from "../../styles/link";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AdminContext } from "../../providers/AdminContext";
import { LoginRegisterCard } from "../LoginRegisterCard";

export const Header = () => {
  const { userLoginAdminInfo, showDropdown, setShowDropdown } =
    useContext(UserContext);

  const { setLoginRegisterCard, loginRegisterCard } = useContext(AdminContext);

  const token = localStorage.getItem("@motors:token");

  return (
    <>
      <StyledHeader id="header">
        <Link to="/">
          <img src={MotorsShop} alt="logo" />
        </Link>

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
          <>
            <nav>
              <StyledLinkLogin to="/login">Fazer Login</StyledLinkLogin>
              <StyledLinkRegister to="/register" className="width-header">
                Cadastrar
              </StyledLinkRegister>
            </nav>
            <span>
              <GiHamburgerMenu
                cursor={"pointer"}
                size={"25px"}
                onClick={() => setLoginRegisterCard(!loginRegisterCard)}
              />
            </span>
          </>
        )}
      </StyledHeader>
      {loginRegisterCard && <LoginRegisterCard />}
      {showDropdown && <Dropdown />}
    </>
  );
};
