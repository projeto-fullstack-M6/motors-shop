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

export const AdminDashboard = () => {
  return (
    <>
      <StyledAdminHeader>
        <div>
          <img src={MotorsShop} alt="Logo MotorsShop"></img>
        </div>
        <nav>
          <span>SL</span>
          <p>Samuel Leão</p>
        </nav>
      </StyledAdminHeader>
      <StyledSectionAdmin />
      <StyledAdminCardInfo>
        <span>SL</span>
        <div>
          <h2>Samuel Leão</h2>
          <span>Anunciante</span>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <StyledButton width="seven" height="two" buttonStyled="border-blue">
          Criar anuncio
        </StyledButton>
      </StyledAdminCardInfo>
      <StyledMainContentAdmin>
        <div>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </StyledMainContentAdmin>
      <StyledAdminPageSection>
        <div>
          <div>
            <p>1</p>
            <span>de 2</span>
          </div>
          <button>Seguinte &gt;</button>
        </div>
      </StyledAdminPageSection>
      <Footer />
    </>
  );
};
