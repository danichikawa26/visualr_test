import React, { useState } from "react";
import PropTypes from "prop-types";
import { ReactComponent as Logo } from "../../assets/icons/bx_bxs-store-alt.svg";

const SideBar = ({ menuItems, onSelectMenuItem, selectedItem }) => {
  const [selectedItemId, setSelectedItemId] = useState(selectedItem);

  const handleMenuItemClick = itemId => {
    onSelectMenuItem(itemId);
    setSelectedItemId(itemId);
  };

  return (
    <div className="sidebar-container bg-blue-dark text-white p-4">
      <ul className="space-y-3 bg-blue-dark flex flex-col items-center justify-center">
        <div className="p-2 rounded-md bg-orange/[.26] mb-3">
          <Logo />
        </div>
        {menuItems.map((item, index) => (
          <li
            key={item.id}
            className={`relative cursor-pointer p-3 rounded-l-lg
            ${
              selectedItemId === item.id
                ? "bg-blue after:content-[' '] after:w-4 after:absolute after:top-0 after:right-[-1rem] after:bottom-0 after:bg-blue"
                : "bg-blue-dark"
            }
            ${index === menuItems.length - 1 ? "mt-5" : ""}
              `}
            onClick={() => handleMenuItemClick(item.id)}
          >
            <div
              className={`p-4 rounded-lg flex items-center justify-center aspect-square w-14
              ${
                selectedItemId === item.id
                  ? "text-white bg-orange"
                  : "text-orange bg-blue-dark"
              }`}
            >
              {item.label}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

SideBar.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  onSelectMenuItem: PropTypes.func.isRequired,
  selectedItem: PropTypes.string
};

export default SideBar;
