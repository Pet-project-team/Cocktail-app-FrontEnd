import React from "react";
import UserCard from "./UserCard";
import "../styles/header.css";
import { Link } from "react-router-dom";

export default function Header() {
  let isLoggedIn = false;

  return (
    <header>
      <a href="/">
        <div id="logo">
          <img src="/logo.svg" alt="logo" height="32" />
        </div>
      </a>
      <nav>
        <ul>
          <li className="nav_el">
            <Link to="/">Featured Cocktails</Link>
          </li>
          <li className="nav_el">
            <Link to="/constructor">Cocktail Constructor</Link>
          </li>
          <li className="nav_el">
            <Link to="/featured">Featured</Link>
          </li>
          <li className="nav_el">
            <Link to="/about">About project</Link>
          </li>
        </ul>
      </nav>
      <UserCard isLoggedIn={isLoggedIn} />
    </header>
  );
}
