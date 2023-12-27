import React from "react";
import PropTypes from "prop-types";

const SideBar = ({ menuItems, onSelectMenuItem }) => {
  return (
    <div className="sidebar-container bg-gray-800 text-white p-4">
      <ul className="space-y-3">
        {menuItems.map(item => (
          <li
            key={item.id}
            className="cursor-pointer hover:bg-gray-700 p-2 rounded"
            onClick={() => onSelectMenuItem(item.id)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

SideBar.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  onSelectMenuItem: PropTypes.func.isRequired
};

export default SideBar;
