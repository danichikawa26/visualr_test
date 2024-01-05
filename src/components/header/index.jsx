import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";

const Header = ({ handleOnChange }) => {
  return (
    <header className="header p-4 flex items-center justify-between">
      <div className="flex flex-col items-start">
        <span className="text-white font-semibold text-xl">Jaegar Resto</span>
        <span className="text-base text-white">Tuesday 2 Feb, 2021</span>
      </div>
      <div className="ml-4 relative">
        <SearchIcon className="absolute left-3 top-5" />
        <input
          type="text"
          className="input-search rounded-lg bg-gray-darker p-3.5 border-2 border-gray-dark pl-10"
          placeholder="Search for food, coffee, etc..."
          onChange={event => handleOnChange(event.target.value)}
        />
      </div>
    </header>
  );
};

Header.propTypes = {
  handleOnChange: PropTypes.func.isRequired
};
export default Header;
