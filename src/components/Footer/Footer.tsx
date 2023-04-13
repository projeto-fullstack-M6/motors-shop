import MotorsShopWhite from "../../assets/MotorsShopWhite.svg";
import { StyledFooter } from "./style";
import { StyledTitle } from "../../styles/typography";

export const Footer = () => {
  return (
    <StyledFooter>
      <img src={MotorsShopWhite} alt="logo" />
      <StyledTitle tag="p" fontSize="body-2-400" color="white">
        © 2022 - Todos os direitos reservados.
      </StyledTitle>
      <a href="#header">^</a>
    </StyledFooter>
  );
};
