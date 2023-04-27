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

export const AdminDashboard = () => {
  const { exit, handleNewAnnouncement, nextPage, previousPage } =
    useContext(AdminContext);
  const { userLoginAdminInfo, announcements, actualPage, setActualPage } =
    useContext(UserContext);
  return (
    <>
      <Header />

      {userLoginAdminInfo ? (
        <>
          <StyledSectionAdmin />

          <StyledAdminCardInfo>
            <span>
              {userLoginAdminInfo?.name
                .split(" ")
                .map((name) => name.charAt(0))
                .join("")}
            </span>
            <div>
              <h2>{userLoginAdminInfo.name}</h2>
              <span>Anunciante</span>
            </div>
            <p>{userLoginAdminInfo.description}</p>
            <StyledButton width="seven" height="two" buttonStyled="border-blue">
              Criar anuncio
            </StyledButton>
          </StyledAdminCardInfo>

          <StyledMainContentAdmin>
            <div>
              {announcements?.length === 0 ? (
                <p> nenhum cliente pra chamar de seu :/</p>
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
        </>
      ) : (
        <p>nada</p>
      )}

      <Footer />
    </>
  );
};
