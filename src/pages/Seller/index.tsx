import { Footer } from "../../components/Footer/Footer";
import { Div, Main } from "./style";
import { HeaderIn } from "../../components/Header/HeaderIn";
import { useState } from "react";
import { StyledTitle } from "../../styles/typography";
import { StyledButton } from "../../styles/button";


const Seller = () => {

  const [advertiser, setAdvertiser] = useState(true)

  return (
    
    <Main>
      <HeaderIn />

      <Div>


      <div className="card7">

        <StyledTitle className="acronym2" tag="h3" fontSize="">PL</StyledTitle>
        <StyledTitle className="name2" tag="h3" fontSize="">Petrus Lobato</StyledTitle>

        <StyledTitle className="text1" tag="p" fontSize="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</StyledTitle>

        <StyledButton  width="seven" height="one" buttonStyled="border-blue">Criar anuncio</StyledButton>
      </div>


      </Div>
      
      <Footer />
    </Main>

  );
};

export default Seller;