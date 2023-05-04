import { Footer } from "../../components/Footer/Footer";

import { Div } from "./style";
import { StyledButton } from "../../styles/button";

import { useContext } from "react";
import { AdminContext } from "../../providers/AdminContext";

import { Header } from "../../components/Header/Header";
import { Comments } from "../../components/Comments/Comments";

import { StyledAdvertDetailing } from "./style";

import { StyledTitle } from "../../styles/typography";

const Adverts = () => {
  const { carDetails } = useContext(AdminContext);
  return (
    <>
      <Header />

      <Div>
        <section className="secRight">
          <div className="card1">
            <img src={carDetails.img} alt="" />
          </div>

          <div className="card2">
            <h3>{carDetails.brand}</h3>
            <div>
              <div className="km">
                <p>{carDetails.year}</p>
                <p>{carDetails.km} KM</p>
              </div>
              <p> R$ {carDetails.price}</p>
            </div>
            <StyledButton width="eight" height="two" buttonStyled="blue">
              Comprar
            </StyledButton>
          </div>

          <div className="card3">
            <h3>Descrição</h3>
            <p>{carDetails.description}</p>
          </div>

          <div className="card4">
            <h3>Comentários</h3>

            <div className="comment">
              <div>
                <div className="km">
                  <StyledButton
                    width="eleven"
                    height="three"
                    buttonStyled="light-blue"
                  >
                    {carDetails.year}
                  </StyledButton>

                  <StyledButton
                    width="eleven"
                    height="three"
                    buttonStyled="light-blue"
                  >
                    {carDetails.km} KM
                  </StyledButton>
                </div>

                <StyledTitle tag="span" fontSize="heading-7-500" color="grey-1">
                  R$
                  {parseFloat(carDetails.price).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                  })}
                </StyledTitle>
              </div>
            </div>

            <StyledButton
              width="eight"
              height="two"
              buttonStyled="blue"
              font="two"
            >
              Comprar
            </StyledButton>
          </div>

          <div className="card3">
            <StyledTitle tag="h3" fontSize="heading-6-600" color="grey-1">
              Descrição
            </StyledTitle>

            <StyledTitle
              tag="p"
              fontSize="body-1-400"
              color="grey-2"
              className="description"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </StyledTitle>
          </div>

          <div className="card4">
            <StyledTitle tag="h3" fontSize="heading-6-600" color="grey-1">
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
                defaultValue="Carro muito confortável, foi uma ótima experiência de compra..."
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
              <img src={carDetails.img} alt="carro" />
              <img src={carDetails.img} alt="carro" />
              <img src={carDetails.img} alt="carro" />
              <img src={carDetails.img} alt="carro" />
              <img src={carDetails.img} alt="carro" />
              <img src={carDetails.img} alt="carro" />
            </div>
          </div>

          <div className="card7">
            <p className="acronym2">PL</p>
            <p className="name2">{carDetails.user}</p>
            <p className="text1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </p>
            <StyledButton width="three" height="one" buttonStyled="black">
              {" "}
              Ver todos anuncios{" "}
            </StyledButton>
          </div>
        </section>
      </Div>

      <Footer />
    </>
  );
};

export default Adverts;
