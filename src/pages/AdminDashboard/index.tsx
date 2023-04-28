import { useContext } from "react";

import { UserContext } from "../../providers/UserContext";
import { AdminContext } from "../../providers/AdminContext";

import { Header } from "../../components/Header/Header";
import { Card } from "../../components/Card/Card";
import { Footer } from "../../components/Footer/Footer";
import { HomePage } from "../Home";
import ModalAds from "../../components/Modals/ModalAd";

import { StyledButton } from "../../styles/button";
import { StyledTitle } from "../../styles/typography";
import {
  StyledAdminCardInfo,
  StyledAdminPageSection,
  StyledMainContentAdmin,
  StyledSectionAdmin,
} from "./style";

export const AdminDashboard = () => {
  const {
    nextPage,
    previousPage,
    isAnnouncementModalActive,
    setIsAnnouncementModalActive,
    getAllBrandsForAnnouncements,
  } = useContext(AdminContext);
  const { userLoginAdminInfo, announcements, actualPage, setActualPage } =
    useContext(UserContext);

  const onOpenModal = () => {
    getAllBrandsForAnnouncements();
    setIsAnnouncementModalActive(true);
  };
  return (
    <>
      {!userLoginAdminInfo?.isBuyer ? (
        <>
          <Header />

          <StyledSectionAdmin />

          <StyledAdminCardInfo>
            <span className="acronym-info">
              {userLoginAdminInfo?.name
                .split(" ")
                .map((name) => name.charAt(0))
                .join("")
                .toUpperCase()}
            </span>

            <div>
              <StyledTitle tag="h2" fontSize="heading-6-600">
                {userLoginAdminInfo?.name}
              </StyledTitle>

              <StyledButton
                width="nine"
                height="three"
                buttonStyled="light-blue"
              >
                Anunciante
              </StyledButton>
            </div>
            <p>{userLoginAdminInfo?.description}</p>

            {!userLoginAdminInfo?.isBuyer ? (
              <StyledButton
                width="seven"
                height="two"
                buttonStyled="border-blue"
                font="two"
                onClick={() => onOpenModal()}
              >
                Criar anuncio
              </StyledButton>
            ) : null}
          </StyledAdminCardInfo>

          <StyledMainContentAdmin>
            <div>
              {isAnnouncementModalActive && <ModalAds />}
              {announcements?.length === 0 ? (
                <StyledTitle tag="span" fontSize="body-1-400">
                  Ainda não possui nenhum anúncio
                </StyledTitle>
              ) : (
                announcements?.map(
                  ({
                    id,
                    brand,
                    model,
                    year,
                    km,
                    fipePrice,
                    price,
                    description,
                    isGoodToSale,
                    images,
                  }: any) => (
                    <Card
                      key={id}
                      brand={brand}
                      model={model}
                      year={year}
                      km={km}
                      fipePrice={fipePrice}
                      price={price}
                      description={description}
                      isGoodToSale={isGoodToSale}
                      images={images}
                    />
                  )
                )
              )}
            </div>
          </StyledMainContentAdmin>

          <StyledAdminPageSection>
            <div>
              <div>
                <p>{actualPage}</p>
                <p> de</p>
                <span>
                  {announcements?.length! < 16
                    ? 1
                    : announcements?.length! < 16}
                </span>
              </div>

              {actualPage === 1 ? (
                <button
                  onClick={() => nextPage()}
                  disabled={announcements?.length! < 16 ? true : false}
                >
                  Seguinte &gt;
                </button>
              ) : (
                <div>
                  <button onClick={() => previousPage()}>Anterior &lt;</button>
                  <button onClick={() => nextPage()}>Seguinte &gt;</button>
                </div>
              )}
            </div>
          </StyledAdminPageSection>

          <Footer />
        </>
      ) : (
        <HomePage />
      )}
    </>
  );
};
