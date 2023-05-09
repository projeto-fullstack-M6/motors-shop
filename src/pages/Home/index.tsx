import { Header } from "../../components/Header/Header";
import { Card } from "../../components/Card/Card";
import { Footer } from "../../components/Footer/Footer";

import { StyledButton } from "../../styles/button";
import { StyledImg, StyledPageSection, StyledSection } from "./style";

import { useContext, useEffect, useState } from "react";
import { StyledTitle } from "../../styles/typography";
import { AdminContext } from "../../providers/AdminContext";
import ModalEditAds from "../../components/Modals/ModalEditandDeleteAd";

export const HomePage = () => {
  const {
    getAllAnnouncementsToHomePage,
    allAnnouncements,
    isEditAndDeleteAdModalActive,
  } = useContext(AdminContext);

  useEffect(() => {
    getAllAnnouncementsToHomePage();
  }, []);

  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedYear, setSelectedYear] = useState(0);
  const [selectedFuel, setSelectedFuel] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedKm, setSelectedKm] = useState({
    min: 0,
    max: 0,
  });

  const [selectedPrice, setSelectedPrice] = useState({
    min: "",
    max: "",
  });

  const filteredCars = allAnnouncements?.filter((announcement: any) => {
    return (
      (!selectedBrand || announcement.brand === selectedBrand) &&
      (!selectedModel || announcement.model === selectedModel) &&
      (!selectedYear || announcement.year === selectedYear) &&
      (!selectedFuel || announcement.fuel === selectedFuel) &&
      (!selectedColor || announcement.color === selectedColor) &&
      (!selectedKm.min || announcement.km >= selectedKm.min) &&
      (!selectedKm.max || announcement.km <= selectedKm.max) &&
      (!selectedPrice.min ||
        parseFloat(announcement.price) >= parseFloat(selectedPrice.min)) &&
      (!selectedPrice.max ||
        parseFloat(announcement.price) <= parseFloat(selectedPrice.max))
    );
  });

  const uniqueBrands = [
    ...new Set(filteredCars?.map((announcement: any) => announcement.brand)),
  ];
  const uniqueModels = [
    ...new Set(filteredCars?.map((announcement: any) => announcement.model)),
  ];
  const uniqueYears = [
    ...new Set(filteredCars?.map((announcement: any) => announcement.year)),
  ];
  const uniqueFuel = [
    ...new Set(filteredCars?.map((announcement: any) => announcement.fuel)),
  ];
  const uniqueColors = [
    ...new Set(filteredCars?.map((announcement: any) => announcement.color)),
  ];

  const handleClearFilters = () => {
    setSelectedBrand("");
    setSelectedModel("");
    setSelectedYear(0);
    setSelectedFuel("");
    setSelectedColor("");
    setSelectedKm({
      min: 0,
      max: 0,
    });
    setSelectedPrice({
      min: "",
      max: "",
    });
  };

  return (
    <>
      <Header />

      <StyledImg>
        <div>
          <StyledTitle tag="h2" fontSize="heading-1-700" color="white">
            Motors Shop
          </StyledTitle>
          <StyledTitle tag="p" fontSize="heading-2-600" color="white">
            A melhor plataforma de anúncios de carros do país
          </StyledTitle>
        </div>
      </StyledImg>

      <StyledSection>
        <aside>
          <div>
            <StyledTitle tag="h2" fontSize="heading-4-600" color="black">
              Marca
            </StyledTitle>

            <div>
              {uniqueBrands.map((brand: any, index) => (
                <button
                  className="button-filter"
                  key={index}
                  onClick={() => setSelectedBrand(brand)}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>

          <div>
            <StyledTitle tag="h2" fontSize="heading-4-600" color="black">
              Modelo
            </StyledTitle>
            <div>
              {uniqueModels.map((model: any, index) => (
                <button
                  className="button-filter"
                  key={index}
                  onClick={() => setSelectedModel(model)}
                >
                  {model}
                </button>
              ))}
            </div>
          </div>

          <div>
            <StyledTitle tag="h2" fontSize="heading-4-600" color="black">
              Cor
            </StyledTitle>
            <div>
              {uniqueColors.map((color: any, index) => (
                <button
                  className="button-filter"
                  key={index}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          <div>
            <StyledTitle tag="h2" fontSize="heading-4-600" color="black">
              Ano
            </StyledTitle>
            <div>
              {uniqueYears.map((year: any, index) => (
                <button
                  className="button-filter"
                  key={index}
                  onClick={() => setSelectedYear(year)}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          <div>
            <StyledTitle tag="h2" fontSize="heading-4-600" color="black">
              Combustível
            </StyledTitle>
            <div>
              {uniqueFuel.map((fuel: any, index) => (
                <button
                  className="button-filter"
                  key={index}
                  onClick={() => setSelectedFuel(fuel)}
                >
                  {fuel}
                </button>
              ))}
            </div>
          </div>

          <div>
            <StyledTitle tag="h2" fontSize="heading-4-600" color="black">
              Km
            </StyledTitle>
            <div>
              <input
                type="number"
                placeholder="Mínima"
                value={selectedKm.min || ""}
                onChange={(e) => {
                  setSelectedKm({
                    min: e.target.value ? parseInt(e.target.value) : 0,
                    max: selectedKm.max,
                  });
                }}
              />
              <input
                type="number"
                placeholder="Máxima"
                value={selectedKm.max || ""}
                onChange={(e) => {
                  setSelectedKm({
                    min: selectedKm.min,
                    max: e.target.value ? parseInt(e.target.value) : 0,
                  });
                }}
              />
            </div>
          </div>

          <div>
            <StyledTitle tag="h2" fontSize="heading-4-600" color="black">
              Preço
            </StyledTitle>
            <div>
              <input
                type="number"
                placeholder="Mínima"
                value={selectedPrice.min}
                onChange={(e) => {
                  setSelectedPrice({
                    min: e.target.value ? e.target.value : "",
                    max: selectedPrice.max,
                  });
                }}
              />
              <input
                type="number"
                placeholder="Máxima"
                value={selectedPrice.max}
                onChange={(e) => {
                  setSelectedPrice({
                    min: selectedPrice.min,
                    max: e.target.value ? e.target.value : "",
                  });
                }}
              />
            </div>
          </div>

          <div>
            <nav>
              <StyledButton
                width="five"
                height="two"
                buttonStyled="blue"
                font="two"
                onClick={handleClearFilters}
              >
                Limpar filtros
              </StyledButton>
            </nav>
          </div>
        </aside>

        <main>
          {filteredCars?.map((car: any, index: any) => (
            <Card
              key={index}
              images={car.images}
              brand={car.brand}
              model={car.model}
              year={car.year}
              km={car.km}
              price={car.price}
              description={car.description}
              user={car.user}
              isActive={car.isActive}
              id={car.id}
              isGoodToSale={car.isGoodToSale}
            />
          ))}
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
      {isEditAndDeleteAdModalActive && <ModalEditAds />}
    </>
  );
};
