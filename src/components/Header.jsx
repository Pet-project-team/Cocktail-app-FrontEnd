import React from "react";
import UserCard from "./UserCard";
import "../styles/header.css";
import { Link } from "react-router-dom";

export default function Header() {
  let isLoggedIn = false;

  return (
    <header>
      <div id="logo">
        <a href="/">
          <img src="/logo.svg" alt="logo" height="32" />
        </a>
      </div>
      <nav>
        <ul>
          <li className="nav_el">
            <Link to="/">Featured cocktails</Link>
          </li>
          <li className="nav_el">
            <Link to="/constructor">Constructor</Link>
          </li>
          <li className="nav_el">
            <Link to={"/cocktails/" + Math.floor(Math.random() * 10)}>
              Random cocktail
            </Link>
          </li>
          <li className="nav_el">
            <Link to="/about">About us</Link>
          </li>
        </ul>
      </nav>
      <UserCard isLoggedIn={isLoggedIn} />
    </header>
  );
}
