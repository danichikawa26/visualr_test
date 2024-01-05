import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as AddIcon } from "../../assets/icons/add.svg";
const DishCard = ({ name, price, image, onAddToOrder }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img className="-mb-24 z-10" src={image} alt={name} />
      <div className="w-48 rounded-lg shadow-lg bg-blue-dark m-2 pt-20">
        <div className="px-6 py-4">
          <div className="flex flex-col justify-between items-center gap-y-1">
            <p className="font-medium text-sm mb-2">{name}</p>
            <span className="text-sm">{`$${price.toFixed(2)}`}</span>
            <button
              className="flex items-center justify-between text-sm text-orange font-bold gap-x-0.5 "
              onClick={onAddToOrder}
            >
              <AddIcon className="stroke-orange" />
              Add to order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

DishCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  onAddToOrder: PropTypes.func.isRequired
};

export default DishCard;
