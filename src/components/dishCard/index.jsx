import React from "react";
import PropTypes from "prop-types";

const DishCard = ({ name, description, price, image, onAddToOrder }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-2">
      <img className="w-full" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg">{`$${price.toFixed(2)}`}</span>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={onAddToOrder}
          >
            Add to order
          </button>
        </div>
      </div>
    </div>
  );
};

DishCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  onAddToOrder: PropTypes.func.isRequired
};

export default DishCard;
