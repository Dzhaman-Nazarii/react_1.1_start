import propTypes from "prop-types";

const ToursItem = ({ name, price, continent, description }) => {
  return (
    <li className="tours-item">
      <p>Name: {name}</p>
      <p>Price: {price}$</p>
      <p>Continent: {continent}</p>
      {description && <p>Descroption: {description}</p>}
    </li>
  );
};

ToursItem.propTypes = {
  name: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  continent: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
};

export default ToursItem;
