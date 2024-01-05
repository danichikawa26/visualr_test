import React from "react";
import PropTypes from "prop-types";
import OrderSection from "../orderDetails/orderSection";
import PaymentSection from "../paymentSection";
import { ReactComponent as BackIcon } from "../../assets/icons/back.svg";

const ConfirmPopup = ({
  items,
  total,
  onRemoveItem,
  onConfirm,
  onChangeItem,
  onPaymentSubmit,
  onClose,
  paymentMethods
}) => {
  return (
    <div className="confirm-popup">
      <div className="fixed top-0 bottom-0 right-0 bg-blue-dark rounded-l-lg p-6 flex flex-col">
        <button onClick={onClose} className="ml-6">
          <BackIcon />
        </button>
        <div className="flex divide-x divide-gray-light">
          <OrderSection
            items={items}
            total={total}
            onRemoveItem={onRemoveItem}
            onConfirm={onConfirm}
            onChangeItem={onChangeItem}
            isConfirmPopup
          />
          <PaymentSection
            onPaymentSubmit={onPaymentSubmit}
            paymentMethods={paymentMethods}
          />
        </div>
      </div>
    </div>
  );
};

ConfirmPopup.propTypes = {
  items: PropTypes.array.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onChangeItem: PropTypes.func.isRequired,
  onPaymentSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  paymentMethods: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      available: PropTypes.bool.isRequired,
      icon: PropTypes.string.isRequired
    })
  )
};

export default ConfirmPopup;
