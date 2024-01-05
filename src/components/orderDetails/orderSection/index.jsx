import React from "react";
import PropTypes from "prop-types";
import OrderList from "../orderList";
import OrderFooter from "../orderFooter";

const OrderSection = ({ items, onRemoveItem, total, onConfirm }) => {
  return (
    <div className="order-section-container bg-blue-dark w-96">
      <OrderList items={items} onRemoveItem={onRemoveItem} />
      {items.length > 0 && <OrderFooter total={total} onConfirm={onConfirm} />}
    </div>
  );
};

OrderSection.propTypes = {
  items: PropTypes.array.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  onConfirm: PropTypes.func.isRequired
};

export default OrderSection;
