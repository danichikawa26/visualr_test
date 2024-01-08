import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "../button";
import { ReactComponent as CheckIcon } from "../../assets/icons/check.svg";

const PaymentSection = ({ onPaymentSubmit, paymentMethods }) => {
  const [selectedItemId, setSelectedItemId] = useState(1);

  useEffect(() => {
    renderForm();
  }, [selectedItemId]);

  const renderForm = () => {
    switch (selectedItemId) {
      case 1:
        return renderCardForm();
      case 2:
        return renderPaypalForm();
      case 3:
        return renderCashForm();
      default:
        return renderCardForm();
    }
  };

  const renderCardForm = () => {
    return (
      <form onSubmit={onPaymentSubmit}>
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mt-4 mb-2 text-left"
            htmlFor="cardholderName"
          >
            Cardholder Name
          </label>
          <input
            className="shadow bg-gray-darker appearance-none border-gray-dark border-2 rounded-lg w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="cardholderName"
            type="text"
            placeholder="Levi Ackerman"
          />
          <label
            className="block text-white text-sm font-bold mt-4 mb-2 text-left"
            htmlFor="cardNumber"
          >
            Card Number
          </label>
          <input
            className="shadow bg-gray-darker appearance-none border-gray-dark border-2 rounded-lg w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="cardNumber"
            type="number"
            placeholder="0000 0000 0000 0000"
          />
          <div className="flex items-center justify-between gap-3 border-b-2 border-gray-dark pb-4">
            <div className="flex flex-col align-start">
              <label
                className="block text-white text-sm font-bold mt-4 mb-2 text-left"
                htmlFor="validDate"
              >
                Expiration Date
              </label>
              <input
                className="shadow bg-gray-darker appearance-none border-gray-dark border-2 rounded-lg w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="validDate"
                type="text"
                placeholder="xx/xxxx"
              />
            </div>
            <div className="flex flex-col align-start">
              <label
                className="block text-white text-sm font-bold mt-4 mb-2 text-left"
                htmlFor="cvv"
              >
                CVV
              </label>
              <input
                className="shadow bg-gray-darker appearance-none border-gray-dark border-2 rounded-lg w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="cvv"
                type="number"
                placeholder="000"
              />
            </div>
          </div>
          <div className="w-[calc(50%-6px)]">
            <label
              className="block text-white text-sm font-bold mt-4 mb-2 text-left"
              htmlFor="table"
            >
              Table No.
            </label>
            <input
              className="shadow bg-gray-darker appearance-none border-gray-dark border-2 rounded-lg w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              id="table"
              type="number"
              placeholder="000"
            />
          </div>
        </div>
        <div className="flex justify-between items-center gap-4">
          <Button label="Cancel" variant="secondary" />
          <Button label="Confirm Payment" variant="primary" />
        </div>
      </form>
    );
  };

  const renderPaypalForm = () => {
    return (
      <div className="flex flex-col items-center">
        <p className="my-10">You will be redirected to Paypal page. </p>
        <Button label="Go to Paypal" variant="primary" />
      </div>
    );
  };
  const renderCashForm = () => {
    return (
      <div className="flex flex-col items-center">
        <p className="my-10">
          Please, be sure that you have the exact amount.{" "}
        </p>
        <Button label="Place order" variant="primary" />
      </div>
    );
  };
  return (
    <div className="payment-section p-6">
      <div className="bg-blue-dark">
        <div className="flex flex-col items-start pb-6 border-b-2 border-gray-dark mb-6">
          <p className="text-left text-white font-bold text-lg mb-2">Payment</p>
          <p className="text-left text-gray-light font-medium text-base">
            {paymentMethods.filter(item => item.available).length} payment
            method available{" "}
          </p>
        </div>
        <p className="text-left text-white font-bold text-lg mb-4">
          Payment method
        </p>
        <div className="flex items-center justify-between">
          {paymentMethods
            .filter(item => item.available)
            .map((item, index) => (
              <li
                key={item.id}
                className={`list-none relative cursor-pointer p-3 border-2 rounded-lg flex flex-col items-center w-28 h-16 text-sm
            ${
              selectedItemId === item.id
                ? "border-white text-white bg-gray-darker fill-white after:absolute after:top-1 after:right-1 after:content-['√'] after:bg-orange after:rounded-full after:w-4 after:h-4 after:text-[10px] after:font-bold after:flex after:items-center after:justify-center"
                : "border-gray-light text-gray-light fill-gray-light"
            }
              `}
                onClick={() => setSelectedItemId(item.id)}
              >
                {item.icon}
                {item.label}
              </li>
            ))}
        </div>
      </div>
      {renderForm()}
    </div>
  );
};

PaymentSection.propTypes = {
  onPaymentSubmit: PropTypes.func.isRequired,
  paymentMethods: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      available: PropTypes.bool.isRequired,
      icon: PropTypes.string.isRequired
    })
  )
};

export default PaymentSection;
