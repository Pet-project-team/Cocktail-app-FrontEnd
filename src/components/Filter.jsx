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
        <button id="search_button">
          <img id="search_icon" src="searchIcon.svg" />
        </button>
      </div>
      <div id="buttons">
        <div id="filter_buttons">
          {isFiltred && (
            <button id="clear_filter">
              Clear filter
              <img src="clearFilter.svg" alt="" />
            </button>
          )}
          <button id="filter_button">
            <img src="filterIcon.svg" alt="" />
            Filter
          </button>
        </div>
        <button id="addNew" href="">
          <img src="addNew.svg" alt="" />
          Add new
        </button>
      </div>
    </div>
  );
}
