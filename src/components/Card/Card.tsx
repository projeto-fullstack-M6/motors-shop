import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { StyledButton } from "../../styles/button";
import { StyledTitle } from "../../styles/typography";
import { StyledDivCard } from "./styled";

export const Card = ({
  brand,
  model,
  year,
  km,
  fipePrice,
  price,
  description,
  isGoodToSale,
  images,
}: any) => {
  const { userLoginAdminInfo } = useContext(UserContext);
  return (
    <StyledDivCard>
      <div className="div-img">
        <img src={images![0]} alt="imagem de carro" />
      </div>
      <StyledTitle tag="h2" fontSize="heading-7-600">
        {brand} - {model}
      </StyledTitle>
      <StyledTitle tag="p" fontSize="body-2-400">
        {description}
      </StyledTitle>
      <div className="div-name">
        <div className="div-acronym">
          <StyledTitle tag="p" fontSize="body-2-500" color="white">
            {userLoginAdminInfo?.name
              .split(" ")
              .map((name) => name.charAt(0))
              .join("")}
          </StyledTitle>
        </div>
        <StyledTitle tag="p" fontSize="body-2-500" color="grey-2">
          {userLoginAdminInfo?.name}
        </StyledTitle>
      </div>

      <div className="div-data">
        <div className="div-button">
          <StyledButton width="eleven" height="three" buttonStyled="light-blue">
            {km} KM
          </StyledButton>
          <StyledButton width="eleven" height="three" buttonStyled="light-blue">
            {year}
          </StyledButton>
        </div>
        <StyledTitle tag="span" fontSize="heading-7-500" color="grey-1">
          R$
          {parseFloat(price).toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
          })}
        </StyledTitle>
      </div>
    </StyledDivCard>
  );
};
