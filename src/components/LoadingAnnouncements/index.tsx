import carAnimation from "../../assets/carAnimation.gif";
import { StyledAnimation } from "./style";

export const LoadingAds = () => {
  return (
    <StyledAnimation>
      <p>Carregando anúncios...</p>
      <img src={carAnimation} alt="" />
    </StyledAnimation>
  );
};
