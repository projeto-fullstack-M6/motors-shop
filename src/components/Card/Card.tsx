import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../providers/UserContext";
import { AdminContext } from "../../providers/AdminContext";

import NoImg from "../../assets/NoImg.png";
import IsGoodToSale from "../../assets/IsGoodToSale.svg";
import { StyledDivCard } from "./styled";
import { StyledTitle } from "../../styles/typography";
import { StyledButton } from "../../styles/button";
import { StyledLinkDetails } from "../../styles/link";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

export const Card = ({
  images,
  brand,
  model,
  year,
  km,
  fipePrice,
  price,
  description,
  isGoodToSale,
  id,
  isActive,
  user,
}: any) => {
  const { userLoginAdminInfo } = useContext(UserContext);

  const {
    getAllBrandsForAnnouncements,
    setAdToDeleteOrUpdateId,
    setDefaultBrandValueEditModal,
    setDefaultModelValueEditModal,
  } = useContext(AdminContext);

  const token = localStorage.getItem("@motors:token");

  const handleOpenUpdateModal = () => {
    getAllBrandsForAnnouncements();
    setIsEditAndDeleteAdModalActive(true);
    setAdToDeleteOrUpdateId(id);
    setDefaultBrandValueEditModal(brand);
    setDefaultModelValueEditModal(model);
  };

  const { setCarDetails, setIsEditAndDeleteAdModalActive } =
    useContext(AdminContext);

  const [imageNumber, setImageNumber] = useState(0);

  const handleSetCarDetails = () => {
    setCarDetails({
      images,
      brand,
      model,
      year,
      km,
      fipePrice,
      price,
      description,
      isGoodToSale,
      user,
      isActive,
      id,
    });
  };

  const nextImageNumber = () => {
    if (imageNumber < images?.length - 1) {
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
      {images && images.length >= 1 ? (
        <section>
          <div className="div-img">
            <img src={images![imageNumber]} alt="imagem de carro" />

            <div className={isActive ? "active" : "inative"}>
              {isActive ? (
                <StyledTitle tag="p" fontSize="body-2-500" color="white">
                  Ativo
                </StyledTitle>
              ) : (
                <StyledTitle tag="p" fontSize="body-2-500" color="white">
                  Inativo
                </StyledTitle>
              )}
            </div>

            {isGoodToSale ? (
              <img
                className="isGoodToSale"
                src={IsGoodToSale}
                alt="Bom negócio"
              />
            ) : null}
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

        {(user && user.id != userLoginAdminInfo?.id) || !token ? (
          <div className="div-name">
            <div className="div-acronym">
              <StyledTitle tag="p" fontSize="body-2-500" color="white">
                {user?.name.charAt(0).toUpperCase()}
              </StyledTitle>
            </div>
            <StyledTitle tag="p" fontSize="body-2-500" color="grey-2">
              {user?.name}
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

      {!userLoginAdminInfo?.isBuyer &&
      token &&
      user &&
      user.id == userLoginAdminInfo?.id ? (
        <div className="div-button">
          <StyledButton
            width="ten"
            height="two"
            buttonStyled="border-black"
            onClick={() => handleOpenUpdateModal()}
          >
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
