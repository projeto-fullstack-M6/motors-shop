import { Footer } from "../../components/Footer/Footer";
import { StyledAdvertDetailing } from "./style";
import { car } from "../../../mock";
import { StyledButton } from "../../styles/button";
import { Header } from "../../components/Header/Header";
import { StyledTitle } from "../../styles/typography";
import { Comments } from "../../components/Comments/Comments";

const Adverts = () => {
  return (
    <>
      <Header />

      <StyledAdvertDetailing>
        <div className="advert">
          <div className="background-blue"></div>

          <section className="secRight">
            <div className="card1">
              <img src={car.img} alt="" />
            </div>

            <div className="card2">
              <StyledTitle tag="h3" fontSize="heading-6-600" color="grey-1">
                {car.brand}
              </StyledTitle>

              <div>
                <div className="km">
                  <StyledButton
                    width="eleven"
                    height="three"
                    buttonStyled="light-blue"
                  >
                    {car.year}
                  </StyledButton>

                  <StyledButton
                    width="eleven"
                    height="three"
                    buttonStyled="light-blue"
                  >
                    {car.km} KM
                  </StyledButton>
                </div>

                <StyledTitle tag="span" fontSize="heading-7-500" color="grey-1">
                  R$
                  {parseFloat(car.price).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                  })}
                </StyledTitle>
              </div>

              <StyledButton width="eight" height="two" buttonStyled="blue">
                Comprar
              </StyledButton>
            </div>

            <div className="card3">
              <StyledTitle tag="h3" fontSize="heading-6-600">
                Descrição
              </StyledTitle>

              <StyledTitle tag="p" fontSize="body-1-400" color="grey-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </StyledTitle>
            </div>

            <div className="card4">
              <StyledTitle tag="h3" fontSize="heading-6-600">
                Comentários
              </StyledTitle>

              <Comments />
              <Comments />
              <Comments />
            </div>

            <div className="card5">
              <div>
                <StyledTitle
                  tag="p"
                  fontSize="body-2-500"
                  color="white"
                  className="acronym"
                >
                  PL
                </StyledTitle>
                <StyledTitle tag="p" fontSize="body-2-500" color="grey-1">
                  Petrus Lobato
                </StyledTitle>
              </div>

              <div className="divpublication">
                <textarea
                  className="publication"
                  defaultValue="Carro muito confortável, foi uma ótima experiência de
                  compra..."
                ></textarea>

                <StyledButton
                  width="eight"
                  height="two"
                  buttonStyled="blue"
                  font="two"
                  className="align"
                >
                  Comentar
                </StyledButton>
              </div>

              <div>
                <StyledTitle
                  tag="span"
                  fontSize="span-tag"
                  color="grey-3"
                  className="span-tag"
                >
                  Gostei Muito!
                </StyledTitle>
                <StyledTitle
                  tag="span"
                  fontSize="span-tag"
                  color="grey-3"
                  className="span-tag"
                >
                  Incrivel!
                </StyledTitle>
                <StyledTitle
                  tag="span"
                  fontSize="span-tag"
                  color="grey-3"
                  className="span-tag"
                >
                  Recomendarei para amigos!
                </StyledTitle>
              </div>
            </div>
          </section>

          <section className="secLeft">
            <div className="card6">
              <h3>Fotos</h3>
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
              <p className="acronym2">PL</p>
              <p className="name2">Petrus Lobato</p>
              <p className="text1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </p>
              <StyledButton width="three" height="one" buttonStyled="black">
                Ver todos anuncios
              </StyledButton>
            </div>
          </section>
        </div>
      </StyledAdvertDetailing>
      <Footer />
    </>
  );
};

export default Adverts;
