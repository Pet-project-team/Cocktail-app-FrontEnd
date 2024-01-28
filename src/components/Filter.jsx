import React from "react";
import "../styles/filter.css";

export default function Filter() {
  let isFiltred = true;

  return (
    <div id="filter">
      <div id="search">
        <input
          type="search"
          placeholder="Find your best cocktail"
          name=""
          id=""
        />
        <button id="search-button">
          <img id="search-icon" src="searchIcon.svg" />
        </button>
      </div>
      <div id="buttons">
        <div id="filter-buttons">
          {isFiltred && (
            <button id="clear-filter">
              Clear filter
              <img src="clearFilter.svg" alt="" />
            </button>
          )}
          <button id="filter-button">
            <img src="filterIcon.svg" alt="" />
            Filter
          </button>
        </div>
        <button id="add-new" href="">
          <img src="add-new.svg" alt="" />
          Add new
        </button>
      </div>
    </div>
  );
}
