import React from "react";
import PropTypes from "prop-types";
import OrderList from "../orderList";
import OrderFooter from "../orderFooter";

const OrderSection = ({
  items,
  onRemoveItem,
  total,
  onConfirm,
  onChangeItem,
  isConfirmPopup
}) => {
  return (
    <div className="order-section-container bg-blue-dark w-96 relative">
      <OrderList
        items={items}
        onRemoveItem={onRemoveItem}
        onChangeItem={onChangeItem}
        isConfirmPopup={isConfirmPopup}
      />
      {items.length > 0 && (
        <OrderFooter
          total={total}
          onConfirm={onConfirm}
          isConfirmPopup={isConfirmPopup}
        />
      )}
    </div>
  );
};

OrderSection.propTypes = {
  items: PropTypes.array.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onChangeItem: PropTypes.func.isRequired,
  isConfirmPopup: PropTypes.bool
};

export default OrderSection;
