import React from "react";
import UserCard from "./UserCard";
import "../styles/header.css"

export default function Header() {
  return (
    <header>
      <div id="logo">
        <img src="logo.svg" alt="logo" height="32" />
      </div>
      <nav>
        <ul>
          <li class="nav_el">
            <a class="highlighted" href="">
              Featured Cocktails
            </a>
          </li>
          <li class="nav_el">
            <a href="">Cocktail Constructor</a>
          </li>
          <li class="nav_el">
            <a href="">Featured</a>
          </li>
          <li class="nav_el">
            <a href="">About project</a>
          </li>
        </ul>
      </nav>
      <UserCard/>
    </header>
  );
}
