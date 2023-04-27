import { useContext } from "react";

import { UserContext } from "../../providers/UserContext";
import { AdminContext } from "../../providers/AdminContext";

import { IAdRegister } from "../../interfaces/adSchema.interface";

import { Header } from "../../components/Header/Header";
import { Card } from "../../components/Card/Card";
import { Footer } from "../../components/Footer/Footer";

import {
  StyledAdminCardInfo,
  StyledAdminPageSection,
  StyledMainContentAdmin,
  StyledSectionAdmin,
} from "./style";
import { StyledButton } from "../../styles/button";
import { HomePage } from "../Home";
import { StyledTitle } from "../../styles/typography";

export const AdminDashboard = () => {
  const { handleNewAnnouncement, nextPage, previousPage } =
    useContext(AdminContext);
  const { userLoginAdminInfo, announcements, actualPage, setActualPage } =
    useContext(UserContext);
  return (
    <>
      {userLoginAdminInfo?.isBuyer === false ? (
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
                {userLoginAdminInfo.name}
              </StyledTitle>

              <StyledButton
                width="nine"
                height="three"
                buttonStyled="light-blue"
              >
                Anunciante
              </StyledButton>
            </div>

            <StyledTitle tag="p" fontSize="body-1-400">
              {userLoginAdminInfo.description}
            </StyledTitle>

            <StyledButton width="seven" height="two" buttonStyled="border-blue">
              Criar anuncio
            </StyledButton>
          </StyledAdminCardInfo>

          <StyledMainContentAdmin>
            <div>
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
                  }: IAdRegister) => (
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
                <span>de 2</span>
              </div>

              {actualPage === 1 ? (
                <button onClick={() => nextPage()}>Seguinte &gt;</button>
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
