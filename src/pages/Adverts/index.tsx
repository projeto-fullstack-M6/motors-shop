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
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="card4">
            <h3>Comentários</h3>

            <div className="comment">
              <div>
                <p className="acronym">PL</p>
                <p className="name">Petrus Lobato</p>
                <span>há 3 dias</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi aliquam, quas sint voluptas nobis laborum facere!
                Soluta illum temporibus voluptatem quae possimus aut accusamus
                quo. Consequatur corporis deleniti voluptatibus aut!
              </p>
            </div>

            <div className="comment">
              <div>
                <p className="acronym">PL</p>
                <p className="name">Petrus Lobato</p>
                <span>há 3 dias</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi aliquam, quas sint voluptas nobis laborum facere!
                Soluta illum temporibus voluptatem quae possimus aut accusamus
                quo. Consequatur corporis deleniti voluptatibus aut!
              </p>
            </div>
          </div>

          <div className="card5">
            <div>
              <p className="acronym">PL</p>
              <p className="name">Petrus Lobato</p>
            </div>
            <div className="divpublication">
              <textarea className="publication" cols="80" rows="10" placeholder="Carro muito confortável, foi uma ótima experiência de compra...">
              </textarea>
              <StyledButton width="eight" height="two" buttonStyled="blue">
                Comentar
              </StyledButton>
            </div>
            <div>
              <span>Gostei Muito!</span>
              <span> Incrivel!</span>
              <span>Recomendarei para amigos!</span>
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
            <StyledButton className="allComment" width="three" height="one" buttonStyled="black">
              {" "}
              Ver todos anuncios{" "}
            </StyledButton>
          </div>
        </section>
      </Div>
      
      <Footer />
    </Main>

  );
};

export default Adverts;
