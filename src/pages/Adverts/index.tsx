import { Footer } from "../../components/Footer/Footer";
import { Div, Main } from "./style";
import { car } from "../../../mock";
import { StyledButton } from "../../styles/button";
import { HeaderIn } from "../../components/Header/HeaderIn";
import { StyledTitle } from "../../styles/typography";

const Adverts = () => {
  return (
    
    <Main>
      <HeaderIn />

      <Div>
        <section className="secRight">

          <div className="card1">
            <img src={car.img} alt="" />
          </div>

          <div className="card2">
            <StyledTitle tag="h1" fontSize="heading-6-500">{car.brand} </StyledTitle>
            <div>
              <div className="km">
              <StyledTitle tag="p" fontSize="heading-6-500">{car.year}</StyledTitle>
              <StyledTitle tag="p" fontSize="heading-6-500">{car.km} KM</StyledTitle>
              </div>
              <StyledTitle tag="p" fontSize="heading-7-600">R$ {car.price}</StyledTitle>
            </div>

            <StyledButton width="eight" height="two" buttonStyled="blue">Comprar</StyledButton>
          </div>

          <div className="card3">
          <StyledTitle tag="h1" fontSize="heading-6-500">Descrição</StyledTitle>
          <StyledTitle tag="p" fontSize="body-2-400">Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.</StyledTitle>
          </div>

          <div className="card4">
          
            <StyledTitle tag="h3" fontSize="heading-6-500">Comentários</StyledTitle>

            <div className="comment">
              <div>
              <StyledTitle className="acronym" tag="h3" fontSize="">PL</StyledTitle>
              <StyledTitle className="name" tag="h3" fontSize="">Petrus Lobato</StyledTitle>
              <StyledTitle tag="span" fontSize="">há 3 dias</StyledTitle>
              </div>
              <StyledTitle tag="p" fontSize="body-2-400">Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.</StyledTitle>
            </div>

            <div className="comment">
              <div>
              <StyledTitle className="acronym" tag="h3" fontSize="">PL</StyledTitle>
              <StyledTitle className="name" tag="h3" fontSize="">Petrus Lobato</StyledTitle>
              <StyledTitle tag="span" fontSize="">há 3 dias</StyledTitle>
              </div>
              <StyledTitle tag="p" fontSize="body-2-400">Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.</StyledTitle>
            </div>

            
          </div>

          <div className="card5">

            <div>
            <StyledTitle className="acronym" tag="h3" fontSize="">PL</StyledTitle>
            <StyledTitle className="name" tag="h3" fontSize="">Petrus Lobato</StyledTitle>
            </div>

            <div className="divpublication">
              <textarea className="publication" cols="80" rows="10" placeholder="Carro muito confortável, foi uma ótima experiência de compra...">
              </textarea>
              <StyledButton width="eight" height="two" buttonStyled="blue">
                Comentar
              </StyledButton>
            </div>

            <div>
            <StyledTitle tag="span" fontSize="">Gostei Muito!</StyledTitle>
            <StyledTitle tag="span" fontSize="">Incrivel!</StyledTitle>
            <StyledTitle tag="span" fontSize="">Recomendarei para amigos!</StyledTitle>
            </div>
          </div>
        </section>

        <section className="secLeft">
          <div className="card6">

          <StyledTitle tag="h3" fontSize="">Fotos</StyledTitle>
            <div className="minCar">
              <img src={car.img} alt="carro" />
              <img src={car.img} alt="carro" />
              <img src={car.img} alt="carro" />
              <img src={car.img} alt="carro" />
              <img src={car.img} alt="carro" />
              <img src={car.img} alt="carro" />
            </div>

          </div>

          <div className="card7">

          <StyledTitle className="acronym2" tag="h3" fontSize="">PL</StyledTitle>
          <StyledTitle className="name2" tag="h3" fontSize="">Petrus Lobato</StyledTitle>

          <StyledTitle className="text1" tag="p" fontSize="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</StyledTitle>
  
            <StyledButton className="allComment" width="three" height="one" buttonStyled="black">Ver todos anuncios</StyledButton>
          </div>
        </section>
      </Div>
      
      <Footer />
    </Main>

  );
};

export default Adverts;
