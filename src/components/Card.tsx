import { car } from "../../mock";

export const Card = () => {
  return (
    <div>
      <img src={car.img} alt="imagem de carro" />
      <h2>
        {car.brand} - {car.model}
      </h2>
      <p>{car.description}</p>
      <div>
        <p>{car.user[0]}</p>
        <p>{car.user}</p>
      </div>
      <div>
        <div>
          <span>{car.km} KM</span>
          <span>{car.year}</span>
        </div>
        <span>{car.price}</span>
      </div>
    </div>
  );
};
