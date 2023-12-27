import React from "react";
import PropTypes from "prop-types";

const Tabs = ({ tabs, activeTab, onSelectTab }) => {
  return (
    <div className="tabs-container flex space-x-1 bg-gray-800 p-2">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`tab-item text-white px-4 py-2 rounded-md ${
            activeTab === tab.id ? "bg-blue-500" : "bg-gray-700"
          }`}
          onClick={() => onSelectTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  activeTab: PropTypes.number.isRequired,
  onSelectTab: PropTypes.func.isRequired
};

export default Tabs;
