import React from "react";
import PropTypes from "prop-types";
import DishCard from "../dishCard";

const DishesList = ({ dishes, onAddToOrder }) => {
  return (
    <div className="m-4">
      <p className="font-bold text-lg text-left mb-4">Choose dishes</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {dishes.map(dish => (
          <DishCard
            key={dish.id}
            name={dish.name}
            description={dish.description}
            price={dish.price}
            image={dish.image}
            onAddToOrder={() => onAddToOrder(dish)}
          />
        ))}
      </div>
    </div>
  );
};

DishesList.propTypes = {
  dishes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired
    })
  ).isRequired,
  onAddToOrder: PropTypes.func.isRequired
};

export default DishesList;
