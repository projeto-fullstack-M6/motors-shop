import { Footer } from "../../components/Footer/Footer";
import { Div } from "./style";
import { StyledButton } from "../../styles/button";
import { Header } from "../../components/Header/Header";
import { useContext } from "react";
import { AdminContext } from "../../providers/AdminContext";

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
              <textarea className="publication">
                Carro muito confortável, foi uma ótima experiência de compra...
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
