import motorsshopwhite from "../../assets/motorsshopwhite.png";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { Footers } from "./style";

export const Footer = () => {
  return (
    <Footers>
      <img src={motorsshopwhite} alt="logo" />
      <p>© 2022 - Todos os direitos reservados.</p>
      <a href="#header">
        <BsFillArrowUpSquareFill/></a>
    </Footers>
  );
};
