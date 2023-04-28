import {
  StyledAdminCardInfo,
  StyledAdminHeader,
  StyledAdminPageSection,
  StyledMainContentAdmin,
  StyledSectionAdmin,
} from "./style";
import MotorsShop from "../../assets/MotorsShop.svg";
import { StyledButton } from "../../styles/button";
import { Card } from "../../components/Card/Card";
import { Footer } from "../../components/Footer/Footer";
import { useContext } from "react";
import { AdminContext } from "../../providers/AdminContext";
import { UserContext } from "../../providers/UserContext";
import ModalAds from "../../components/ModalAd";

export const AdminDashboard = () => {
  const {
    exit,
    nextPage,
    previousPage,
    isAnnouncementModalActive,
    setIsAnnouncementModalActive,
    getAllBrandsForAnnouncements,
  } = useContext(AdminContext);
  const { userLoginAdminInfo, announcements, actualPage } =
    useContext(UserContext);

  const onOpenModal = () => {
    getAllBrandsForAnnouncements();
    setIsAnnouncementModalActive(true);
  };
  return (
    <>
      {userLoginAdminInfo ? (
        <>
          <StyledAdminHeader>
            <div>
              <img src={MotorsShop} alt="Logo MotorsShop"></img>
            </div>
            <nav>
              <span>
                {userLoginAdminInfo?.name
                  .split(" ")
                  .map((name) => name.charAt(0))
                  .join("")}
              </span>
              <p>{userLoginAdminInfo.name}</p>
            </nav>
          </StyledAdminHeader>
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
            <StyledButton
              width="seven"
              height="two"
              buttonStyled="border-blue"
              onClick={() => onOpenModal()}
            >
              Criar anuncio
            </StyledButton>
          </StyledAdminCardInfo>
          <StyledMainContentAdmin>
            <div>
              {isAnnouncementModalActive && <ModalAds />}
              {announcements?.length === 0 ? (
                <p> nenhum anuncio pra chamar de seu :/</p>
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
                <span>
                  de
                  {announcements!.length < 16 ? 1 : announcements!.length < 16}
                </span>
              </div>
              {actualPage === 1 ? (
                <button
                  onClick={() => nextPage()}
                  disabled={announcements!.length < 16 ? true : false}
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
        <p>nada</p>
      )}
    </>
  );
};
