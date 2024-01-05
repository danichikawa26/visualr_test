import React from "react";
import PropTypes from "prop-types";
import OrderItem from "../orderItem";
import { ReactComponent as AddIcon } from "../../../assets/icons/add.svg";

const OrderList = ({ items, onRemoveItem, onChangeItem, isConfirmPopup }) => {
  return (
    <div className="bg-gray-800 text-white font-bold p-6">
      {isConfirmPopup ? (
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-start">
            <p className="text-left text-white font-bold text-lg mb-2">
              Your order
            </p>
            <p className="text-left text-gray-light font-medium text-base">
              Order #123
            </p>
          </div>
          <div className="w-10 h-10 rounded-lg bg-orange hover:bg-orange-light flex items-center justify-center">
            <AddIcon className="stroke-white" />
          </div>
        </div>
      ) : (
        <p className="text-left text-white font-bold text-lg mb-5">
          Order #123
        </p>
      )}
      <div className="grid grid-cols-5 gap-1 border-b-2 border-gray-dark pb-6">
        {!isConfirmPopup && (
          <>
            <p className="col-span-3 text-left">Item</p>
            <p>Qty</p>
            <p>Price</p>
          </>
        )}
      </div>
      <div className="overflow-auto h-[calc(100vh-335px)] pb-4 ">
        {items.length > 0 ? (
          items.map(item => (
            <OrderItem
              key={item.id}
              image={item.image}
              name={item.name}
              quantity={item.quantity}
              price={item.price}
              onRemove={() => onRemoveItem(item.id)}
              onQuantityChange={value => onChangeItem(item.id, value)}
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
  onRemoveItem: PropTypes.func.isRequired,
  onChangeItem: PropTypes.func.isRequired,
  isConfirmPopup: PropTypes.bool
};

export default OrderList;
