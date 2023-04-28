import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

import { Header } from "../../components/Header/Header";
import { Card } from "../../components/Card/Card";
import { Footer } from "../../components/Footer/Footer";

import { StyledButton } from "../../styles/button";
import { StyledImg, StyledPageSection, StyledSection } from "./style";

export const HomePage = () => {
  const { announcements } = useContext(UserContext);

  return (
    <>
      <Header />

      <StyledImg>
        <div>
          <h2>Motors Shop</h2>
          <p>A melhor plataforma de anúncios de carros do país</p>
        </div>
      </StyledImg>

      <StyledSection>
        <aside>
          <div>
            <h2>Marca</h2>
            <div>
              <p>General Motors</p>
              <p>Fiat</p>
              <p>Ford</p>
              <p>Honda</p>
              <p>Porsche</p>
              <p>Volkswagen</p>
            </div>
          </div>
          <div>
            <h2>Modelo</h2>
            <div>
              <p>Civic</p>
              <p>Corolla</p>
              <p>Cruze</p>
              <p>Fit</p>
              <p>Gol</p>
              <p>Ka</p>
              <p>Onix</p>
              <p>Porsche 718</p>
            </div>
          </div>
          <div>
            <h2>Cor</h2>
            <div>
              <p>Azul</p>
              <p>Branca</p>
              <p>Cinza</p>
              <p>Prata</p>
              <p>Preta</p>
              <p>Verde</p>
            </div>
          </div>
          <div>
            <h2>Ano</h2>
            <div>
              <p>2022</p>
              <p>2021</p>
              <p>2018</p>
              <p>2015</p>
              <p>2013</p>
              <p>2012</p>
              <p>2010</p>
            </div>
          </div>
          <div>
            <h2>Combustível</h2>
            <div>
              <p>Diesel</p>
              <p>Etanol</p>
              <p>Gasolina</p>
              <p>Flex</p>
            </div>
          </div>
          <div>
            <h2>Km</h2>
            <nav>
              <StyledButton width="nine" height="two" buttonStyled="grey-black">
                Mínima
              </StyledButton>
              <StyledButton width="nine" height="two" buttonStyled="grey-black">
                Máxima
              </StyledButton>
            </nav>
          </div>
          <div>
            <h2>Preço</h2>
            <nav>
              <StyledButton width="nine" height="two" buttonStyled="grey-black">
                Mínima
              </StyledButton>
              <StyledButton width="nine" height="two" buttonStyled="grey-black">
                Máxima
              </StyledButton>
            </nav>
          </div>
          <div>
            <nav>
              <StyledButton width="five" height="two" buttonStyled="blue">
                Limpar filtros
              </StyledButton>
            </nav>
          </div>
        </aside>
        <main>
          {announcements?.map(
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
          )}
        </main>
      </StyledSection>

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
    </>
  );
};
