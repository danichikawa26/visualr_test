import React from "react";
import PropTypes from "prop-types";

const Tabs = ({ tabs, activeTab, onSelectTab }) => {
  return (
    <div className="tabs-item flex space-x-1 bg-gray-800 mx-4">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`tab-item pr-6 py-2 font-semibold ${
            activeTab === tab.id
              ? "text-orange border-b-2 border-orange"
              : "text-white"
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
