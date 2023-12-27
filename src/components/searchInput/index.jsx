import React from "react";
import PropTypes from "prop-types";

const SearchInput = ({ placeholder, onSearchChange }) => {
  return (
    <div className="search-input-container">
      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded-md"
        placeholder={placeholder}
        onChange={e => onSearchChange(e.target.value)}
      />
    </div>
  );
};

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  onSearchChange: PropTypes.func.isRequired
};

SearchInput.defaultProps = {
  placeholder: "Search..."
};

export default SearchInput;
