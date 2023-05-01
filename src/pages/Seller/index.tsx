import { Footer } from "../../components/Footer/Footer";
import { Div, Main } from "./style";
import { HeaderIn } from "../../components/Header/HeaderIn";
import { StyledTitle } from "../../styles/typography";
import { StyledButton } from "../../styles/button";
import { Card } from "../../components/Card/Card";
import { StyledPageSection } from "../Home/style";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from 'react'


const Seller = () => {

  const { advertiser } = useContext(AuthContext);
  console.log(advertiser)

  return (
    
    <Main>
      <HeaderIn />

      <Div>


      <div className="card7">

        <StyledTitle className="acronym2" tag="h3" fontSize="">PL</StyledTitle>
        <div>
          <StyledTitle className="name2" tag="h3" fontSize="">Petrus Lobato</StyledTitle>
          <StyledButton  width="seven" height="three" buttonStyled={advertiser ? "light-blue" : "off"}>Anunciante</StyledButton>
        </div>

        <StyledTitle className="text1" tag="p" fontSize="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</StyledTitle>

        <StyledButton  width="seven" height="one" buttonStyled={advertiser ? "border-blue" : "off"}>Criar anuncio</StyledButton>
      </div>

      <div className="card8">
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
      </Div>

      <StyledPageSection>
        <div>
          <div>
            <p>1</p>
            <span>de 2</span>
          </div>
          <button>Seguinte &gt;</button>
        </div>
      </StyledPageSection>
      
      <Footer />
    </Main>

  );
};

export default Seller;