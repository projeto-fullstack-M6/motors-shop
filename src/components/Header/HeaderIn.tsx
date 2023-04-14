import MotorsShop from "../../assets/MotorsShop.svg";
import { StyledTitle } from "../../styles/typography";
import { StyledHeader } from "./style";

// APÓS CONSTRUIR OS ESTADOS, FAZER RENDERIZAÇÃO CONDICIONAL JUNTANDO OS DOIS HEADERS.
// CASO DESLOGADO USAR NAV, LOGADO USAR DIV.

export const HeaderIn = () => {
  return (
    <StyledHeader id="header">
      <img src={MotorsShop} alt="logo" />
      <div>
        <StyledTitle
          tag="p"
          fontSize="body-2-700"
          color="white"
          className="acronym"
        >
          PL
        </StyledTitle>
        <StyledTitle tag="p" fontSize="body-1-400" color="grey-2">
          Petrus Lobato
        </StyledTitle>
      </div>
    </StyledHeader>
  );
};
