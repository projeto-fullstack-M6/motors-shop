import { car } from "../../../mock";
import { StyledButton } from "../../styles/button";
import { StyledTitle } from "../../styles/typography";
import { StyledDivCard } from "./styled";

export const Card = () => {
  return (
    <StyledDivCard>
      <div className="div-img">
        <img src={car.img} alt="imagem de carro" />
      </div>
      <StyledTitle tag="h2" fontSize="heading-7-600">
        {car.brand} - {car.model}
      </StyledTitle>
      <StyledTitle tag="p" fontSize="body-2-400">
        {car.description}
      </StyledTitle>
      <div className="div-name">
        <div className="div-acronym">
          <StyledTitle tag="p" fontSize="body-2-500" color="white">
            {car.user
              .split(" ")
              .map((name) => name.charAt(0))
              .join("")}
          </StyledTitle>
        </div>
        <StyledTitle tag="p" fontSize="body-2-500" color="grey-2">
          {car.user}
        </StyledTitle>
      </div>

      <div className="div-data">
        <div className="div-button">
          <StyledButton width="eleven" height="three" buttonStyled="light-blue">
            {car.km} KM
          </StyledButton>
          <StyledButton width="eleven" height="three" buttonStyled="light-blue">
            {car.year}
          </StyledButton>
        </div>
        <StyledTitle tag="span" fontSize="heading-7-500" color="grey-1">
          R${" "}
          {parseFloat(car.price).toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
          })}
        </StyledTitle>
      </div>
    </StyledDivCard>
  );
};
