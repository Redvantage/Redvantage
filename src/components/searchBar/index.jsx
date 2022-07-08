import React from "react";

const SearchBar = ({ handleSearch }) => {
  return (
    <div className="flex border border-white h-12 w-full flex items-center">
      <div className="px-6 border-r border-white h-12 flex items-center">
        <i className="fas fa-search"></i>
      </div>
      <div>
        <input
          onChange={handleSearch}
          placeholder="Search by address or token name..."
          type="text"
          className="bg-transparent pl-6 w-[75vw] h-12 text-lg focus:outline-none"
        />
      </div>
    </div>
  );
};

export default SearchBar;
