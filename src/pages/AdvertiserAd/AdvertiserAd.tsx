import { useContext } from "react";

import { UserContext } from "../../providers/UserContext";
import { AdminContext } from "../../providers/AdminContext";

import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Card } from "../../components/Card/Card";

import { StyledTitle } from "../../styles/typography";
import { StyledButton } from "../../styles/button";
import {
  StyledAdminCardInfo,
  StyledAdminPageSection,
  StyledMainContentAdmin,
  StyledSectionAdmin,
} from "../AdminDashboard/style";

export const AdvertiserAdPage = () => {
  const { announcements, actualPage } = useContext(UserContext);
  const { nextPage, previousPage, carDetails } = useContext(AdminContext);

  return (
    <>
      <Header />

      <StyledSectionAdmin />

      <StyledAdminCardInfo>
        <span className="acronym-info">
          {carDetails.user?.name.charAt(0).toUpperCase()}
        </span>

        <div>
          <StyledTitle tag="h2" fontSize="heading-6-600">
            {carDetails.user?.name}
          </StyledTitle>

          <StyledButton width="nine" height="three" buttonStyled="light-blue">
            Anunciante
          </StyledButton>
        </div>
        <p>{carDetails.user?.description}</p>
      </StyledAdminCardInfo>

      <StyledMainContentAdmin>
        <div>
          {!carDetails ? (
            <StyledTitle tag="span" fontSize="body-1-400">
              Ainda não possui nenhum anúncio
            </StyledTitle>
          ) : (
            <Card
              key={carDetails.id}
              images={carDetails.images}
              brand={carDetails.brand}
              model={carDetails.model}
              year={carDetails.year}
              km={carDetails.km}
              price={carDetails.price}
              description={carDetails.description}
              user={carDetails.user}
              id={carDetails.id}
            />
          )}
        </div>
      </StyledMainContentAdmin>

      <StyledAdminPageSection>
        <div>
          <div>
            <p>{actualPage}</p>
            <p> de</p>
            <span>
              {announcements?.length! < 16 ? 1 : announcements?.length! < 16}
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
  );
};
