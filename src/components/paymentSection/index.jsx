import React from "react";
import Button from "../Button"; // Assuming you have a Button component

const PaymentSection = ({ onPaymentSubmit }) => {
  return (
    <div className="payment-section p-4 bg-white">
      <h2 className="text-lg font-semibold mb-4">Payment Details</h2>
      <form onSubmit={onPaymentSubmit}>
        {/* Add input fields for payment information here */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="cardNumber"
          >
            Card Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="cardNumber"
            type="text"
            placeholder="Card Number"
          />
        </div>
        {/* Add more fields as needed... */}

        <Button label="Submit Payment" variant="primary" />
      </form>
    </div>
  );
};

export default PaymentSection;
