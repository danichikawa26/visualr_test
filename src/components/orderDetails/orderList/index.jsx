import React from "react";
import PropTypes from "prop-types";
import OrderItem from "../orderItem"; // Import the OrderItem component

const OrderList = ({ items, onRemoveItem }) => {
  return (
    <div className="bg-gray-800 text-white font-bold p-6">
      <p className="text-left text-white font-bold text- mb-5">Order #123</p>
      <div className="grid grid-cols-5 gap-1 border-b-2 border-gray-dark pb-6">
        <p className="col-span-3 text-left">Item</p>
        <p>Qty</p>
        <p>Price</p>
      </div>
      {items.length > 0 ? (
        items.map(item => (
          <OrderItem
            key={item.id}
            image={item.image}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onRemove={() => onRemoveItem(item.id)}
          />
        ))
      ) : (
        <div className="flex flex-col items-center gap-4">
          <p className="text-center text-white font-bold text-xl pt-6">
            Your cart is empty
          </p>
          <p className="text-center text-white font-normal font-base w-36">
            Add items to create an order
          </p>
        </div>
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
