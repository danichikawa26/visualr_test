import React from "react";
import PropTypes from "prop-types";

const OrderItem = ({ name, quantity, price, onRemove }) => {
  return (
    <div className="flex items-center justify-between p-2 bg-white border-b border-gray-200">
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-500">Quantity: {quantity}</p>
      </div>
      <div className="flex items-center">
        <p className="text-lg font-semibold">{`$${(price * quantity).toFixed(
          2
        )}`}</p>
        <button
          className="ml-4 text-red-500 hover:text-red-700"
          onClick={onRemove}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

OrderItem.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default OrderItem;
