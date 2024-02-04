import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import UserCard from "./UserCard";
import "../styles/header.css";

export default function Header() {
  let isLoggedIn = false;

  const [signUpDisplay, setSignUpDisplay] = useState(false);
  const [randomRoute, setRandomRoute] = useState(
    "/cocktails/" + (Math.floor(Math.random() * 9) + 1)
  );

  function onSignUpClick() {
    setSignUpDisplay(true);
  }

  function onCloseFormClick() {
    setSignUpDisplay(false);
  }

  return (
    <>
      {signUpDisplay && (
        <button id="close-form" onClick={() => onCloseFormClick()}></button>
      )}
      <header>
        <div id="logo">
          <Link to="/">
            <img src="/logo.svg" alt="logo" height="32" />
          </Link>
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
              <Link
                onClick={() => {
                  setRandomRoute(
                    "/cocktails/" + (Math.floor(Math.random() * 9) + 1)
                  );
                }}
                to={randomRoute}
              >
                Random cocktail
              </Link>
            </li>
            <li className="nav_el">
              <Link to="/about">About us</Link>
            </li>
          </ul>
        </nav>
        <UserCard
          signUpDisplay={signUpDisplay}
          isLoggedIn={isLoggedIn}
          onSignUpClick={() => onSignUpClick()}
          onCloseFormClick={() => onCloseFormClick()}
        />
      </header>
    </>
  );
}
