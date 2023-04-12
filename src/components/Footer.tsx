import MotorsShop from "../assets/MotorsShop.svg";
import { BsFillArrowUpSquareFill } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer>
      <img src={MotorsShop} alt="logo" />
      <p>© 2022 - Todos os direitos reservados.</p>
      <a href="#header">
        <BsFillArrowUpSquareFill/></a>
    </footer>
  );
};
