import React from "react";
import PropTypes from "prop-types";
import OrderItem from "../orderItem"; // Import the OrderItem component

const OrderList = ({ items, onRemoveItem }) => {
  return (
    <div className="bg-gray-800 text-white p-4">
      {items.length > 0 ? (
        items.map(item => (
          <OrderItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onRemove={() => onRemoveItem(item.id)}
          />
        ))
      ) : (
        <p className="text-center text-gray-400">Your cart is empty</p>
      )}
    </div>
  );
};

OrderList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired
    })
  ).isRequired,
  onRemoveItem: PropTypes.func.isRequired
};

export default OrderList;
