import React from "react";
import PropTypes from "prop-types";
import Button from "../../button";

const OrderFooter = ({ total, onConfirm, isConfirmPopup }) => {
  return (
    <div
      className={`flex flex-col m-6 pt-6 text-white absolute left-0 right-0 bottom-0 bg-blue-dark ${isConfirmPopup &&
        "border-t-2 border-gray-dark"}
    `}
    >
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-lighter">Discount</p>
        <p className="text-base font-bold">$0</p>
      </div>
      <div className="flex justify-between items-center mb-10">
        <p className="text-sm text-gray-lighter">Sub total</p>
        <p className="text-base font-bold">{`$${total.toFixed(2)}`}</p>
      </div>
      {!isConfirmPopup && (
        <Button
          label="Continue to payment"
          variant="primary"
          size="large"
          onClick={onConfirm}
        />
      )}
    </div>
  );
};

OrderFooter.propTypes = {
  total: PropTypes.number.isRequired,
  onConfirm: PropTypes.func.isRequired,
  isConfirmPopup: PropTypes.bool
};

export default OrderFooter;
