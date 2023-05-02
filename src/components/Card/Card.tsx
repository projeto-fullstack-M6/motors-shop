import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../providers/UserContext";
import { AdminContext } from "../../providers/AdminContext";

import NoImg from "../../assets/NoImg.png";
import { StyledDivCard } from "./styled";
import { StyledTitle } from "../../styles/typography";
import { StyledButton } from "../../styles/button";
import { StyledLinkDetails } from "../../styles/link";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

export const Card = ({
  img,
  brand,
  model,
  year,
  km,
  fipePrice,
  price,
  description,
  isGoodToSale,
  user,
}: any) => {
  const { userLoginAdminInfo } = useContext(UserContext);

  const token = localStorage.getItem("@motors:token");

  const { setCarDetails } = useContext(AdminContext);

  const [imageNumber, setImageNumber] = useState(0);

  const handleSetCarDetails = () => {
    setCarDetails({
      img,
      brand,
      model,
      year,
      km,
      fipePrice,
      price,
      description,
      isGoodToSale,
      user,
    });
  };

  const nextImageNumber = () => {
    if (imageNumber < img?.length - 1) {
      setImageNumber(imageNumber + 1);
    }
  };

  const previousImageNumber = () => {
    if (imageNumber > 0) {
      setImageNumber(imageNumber - 1);
    }
  };

  return (
    <StyledDivCard>
      {img && img.length >= 1 ? (
        <section>
          <div className="div-img">
            <img src={img![imageNumber]} alt="imagem de carro" />
          </div>
          <div className="next-previous">
            {img?.length > 1 ? (
              <GrPrevious
                onClick={() => previousImageNumber()}
                enableBackground="#4529e6"
                cursor={"pointer"}
              />
            ) : null}
            {img?.length > 1 ? (
              <GrNext
                onClick={() => nextImageNumber()}
                color="#4529e6"
                cursor={"pointer"}
              />
            ) : null}
          </div>
        </section>
      ) : (
        <div className="div-img">
          <img src={NoImg} alt="sem imagem" title="sem imagem" />
        </div>
      )}

      <Link to="/adverts" onClick={handleSetCarDetails}>
        <StyledTitle
          tag="h2"
          fontSize="heading-7-600"
          color="grey-1"
          className="ellipsis"
        >
          {brand} - {model}
        </StyledTitle>
        <StyledTitle
          tag="p"
          fontSize="body-2-400"
          color="grey-2"
          className="ellipsis"
        >
          {description}
        </StyledTitle>

        {userLoginAdminInfo?.isBuyer || !token ? (
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
              {parseFloat(km).toLocaleString("pt-BR", {
                minimumFractionDigits: 0,
              })}{" "}
              KM
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
            R${" "}
            {parseFloat(price).toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
            })}
          </StyledTitle>
        </div>
      </Link>

      {!userLoginAdminInfo?.isBuyer && token ? (
        <div className="div-button">
          <StyledButton width="ten" height="two" buttonStyled="border-black">
            Editar
          </StyledButton>

          <StyledLinkDetails to="/adverts" onClick={handleSetCarDetails}>
            Ver detalhes
          </StyledLinkDetails>
        </div>
      ) : null}
    </StyledDivCard>
  );
};
