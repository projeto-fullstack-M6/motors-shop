import motorsshopwhite from "../../assets/motorsshopwhite.png";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { StyledFooter } from "./style";
import { StyledTitle } from "../../styles/typography";

export const Footer = () => {
  return (
    <StyledFooter>
      <img src={motorsshopwhite} alt="logo" />
      <StyledTitle tag="p" fontSize="body-2-400" color="white">
        © 2022 - Todos os direitos reservados.
      </StyledTitle>
      <a href="#header">
        ^
      </a>
    </StyledFooter>
  );
};
