import React from "react";
import "../styles/filter.css";

export default function Filter() {
  return (
    <div id="filter">
      <div id="search">
        <input
          type="search"
          placeholder="Find your best cocktail"
          name=""
          id=""
        />
        <img id="search_icon" src="" alt="" />
      </div>
      <div id="buttons">
        <div id="filter_buttons">
          <a id="clear_filter" href="">
            Clear filter
            <img src="" alt="" />
          </a>
          <a id="filter_button" href="">
            <img src="" alt="" />
            Filter
          </a>
        </div>
        <a href="">
          <img src="" alt="" />
          Add new
        </a>
      </div>
    </div>
  );
}
