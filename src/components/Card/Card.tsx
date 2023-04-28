import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext";
import { StyledButton } from "../../styles/button";
import { StyledTitle } from "../../styles/typography";
import { StyledDivCard } from "./styled";
import { Link } from "react-router-dom";
import { StyledLinkDetails } from "../../styles/link";
import { car } from "../../../mock";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

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
  const [imageNumber, setImageNumber] = useState(0);
  const nextImageNumber = () => {
    if (imageNumber < images?.length - 1) {
      console.log(imageNumber);
      setImageNumber(imageNumber + 1);
    }
  };
  const previousImageNumber = () => {
    if (imageNumber > 0) {
      setImageNumber(imageNumber - 1);
    }
    console.log(imageNumber);
  };
  return (
    <>
      <StyledDivCard>
        {userLoginAdminInfo?.isBuyer ? (
          <>
            <div className="div-img">
              <img src={images![imageNumber]} alt="imagem de carro" />
            </div>
            <div className="next-previous">
              {images?.length > 1 ? (
                <GrPrevious
                  onClick={() => previousImageNumber()}
                  enableBackground="#4529e6"
                  cursor={"pointer"}
                />
              ) : null}
              {images?.length > 1 ? (
                <GrNext
                  onClick={() => nextImageNumber()}
                  color="#4529e6"
                  cursor={"pointer"}
                />
              ) : null}
            </div>
          </>
        ) : (
          <div className="div-img">
            <img src={car.img} alt="imagem de carro" />
          </div>
        )}
        <Link to="/adverts">
          <StyledTitle tag="h2" fontSize="heading-7-600">
            {brand} - {model}
          </StyledTitle>
          <StyledTitle tag="p" fontSize="body-2-400">
            {description}
          </StyledTitle>

          {userLoginAdminInfo?.isBuyer ? (
            <div className="div-name">
              <div className="div-acronym">
                <StyledTitle tag="p" fontSize="body-2-500" color="white">
                  {userLoginAdminInfo?.name
                    .split(" ")
                    .map((name) => name.charAt(0))
                    .join("")
                    .toUpperCase()}
                </StyledTitle>
              </div>
              <StyledTitle tag="p" fontSize="body-2-500" color="grey-2">
                {userLoginAdminInfo?.name}
              </StyledTitle>
            </div>
          ) : null}

          <div className="div-data">
            <div className="div-button">
              <StyledButton
                width="eight"
                height="three"
                buttonStyled="light-blue"
              >
                {km} KM
              </StyledButton>
              <StyledButton
                width="eleven"
                height="three"
                buttonStyled="light-blue"
              >
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
        </Link>

        {!userLoginAdminInfo?.isBuyer ? (
          <div className="div-button">
            <StyledButton width="ten" height="two" buttonStyled="border-black">
              Editar
            </StyledButton>

            <StyledLinkDetails to="/adverts">Ver detalhes</StyledLinkDetails>
          </div>
        ) : null}
      </StyledDivCard>
    </>
  );
};
