import React from "react";
import {
  SearchIcon,
  ClearIcon,
  FilterIcon,
  AddIcon,
} from "../assets/cocktailList/filter/icons/FilterIcons";
import "../styles/filter.css";

export default function Filter() {
  let isFiltred = false;

  return (
    <div id="filter">
      <div id="search">
        <input
          type="text"
          placeholder="Find your best cocktail"
          name=""
          id=""
        />
        <button id="search-button">
          <SearchIcon />
        </button>
      </div>
      <div id="buttons">
        <div id="filter-buttons">
          {isFiltred && (
            <button id="clear-filter">
              Clear filter
              <ClearIcon />
            </button>
          )}
          <button id="filter-button">
            <FilterIcon />
            Filter
          </button>
        </div>
        <button id="add-new" href="">
          <AddIcon />
          Add new
        </button>
      </div>
    </div>
  );
}
