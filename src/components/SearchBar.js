import React from "react";

function SearchBar() {
  return (
    <div className="filter__container">
      <div className="filter__subContainer">
        <div className="filter__iconContainer"></div>
        <input
          type="text"
          name="filterCharacter"
          placeholder="Filter by name..."
          className="filter__input"
        />
      </div>
    </div>
  );
}

export default SearchBar;
