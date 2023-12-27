import React from "react";
import PropTypes from "prop-types";
import Button from "../../button"; // Import the Button component you created

const OrderFooter = ({ total, onConfirm }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div>
        <p className="text-sm">Subtotal</p>
        <p className="text-xl font-bold">{`$${total.toFixed(2)}`}</p>
      </div>
      <Button
        label="Confirm Order"
        variant="alert" // Assuming 'alert' is styled as per the Figma design
        size="large"
        onClick={onConfirm}
      />
    </div>
  );
};

OrderFooter.propTypes = {
  total: PropTypes.number.isRequired,
  onConfirm: PropTypes.func.isRequired
};

export default OrderFooter;
