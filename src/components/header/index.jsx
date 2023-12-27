import React from "react";

const Header = () => {
  return (
    <header className="header p-4 flex items-center justify-between">
      <div className="flex items-center">
        <img src="/path-to-your-logo.png" alt="Logo" className="h-8 mr-2" />
        <span className="text-lg font-bold">Jaegar Resto</span>
      </div>
      <div className="flex items-center">
        <span className="text-sm">Tuesday 2 Feb, 2021</span>
        <div className="ml-4 relative">
          <input
            type="text"
            className="input-search"
            placeholder="Search for food, coffee, etc..."
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
