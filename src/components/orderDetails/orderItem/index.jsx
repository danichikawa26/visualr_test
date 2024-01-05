import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as DeleteIcon } from "../../../assets/icons/delete.svg";

const OrderItem = ({ image, name, quantity, price, onRemove }) => {
  return (
    <div>
      <div className="grid grid-row-1 pt-6">
        <div className="grid grid-cols-5 gap-1">
          <div className="col-span-3 flex place-self-center">
            <img className="w-10 h-10 mr-1" src={image} alt={name} />
            <div className="flex flex-col items-start">
              <h3 className="font-medium text-sm text-left line-clamp-1">
                {name}
              </h3>
              <p className="text-sm font-normal">{`$${price}`}</p>
            </div>
          </div>
          <input
            className="rounded-lg bg-gray-darker p-3.5 w-12 h-12 text-center justify-self-end"
            placeholder={quantity}
          />
          <p className="text-base font-medium place-self-center">{`$${(
            price * quantity
          ).toFixed(2)}`}</p>
        </div>
      </div>
      <div className="grid grid-row-1 pt-3">
        <div className="grid grid-cols-5 gap-1 flex items-center">
          <input
            className="col-span-4 w-full rounded-lg bg-gray-darker p-3.5 place-self-center"
            placeholder="Order note..."
          />{" "}
          <button
            className="border-2 border-orange w-12 h-12 rounded-lg flex items-center justify-center place-self-center"
            onClick={onRemove}
          >
            <DeleteIcon className="fill-orange" />
          </button>
        </div>
      </div>
    </div>
  );
};

OrderItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default OrderItem;
