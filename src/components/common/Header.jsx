import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import UserCard from "./UserCard.jsx";
import Logo from "../../assets/header/logo/Logo.jsx";
import HeaderLink from "./HeaderLink.jsx";

export default function Header() {
  let isLoggedIn = false;

  const [signUpDisplay, setSignUpDisplay] = useState(false);
  const [randomRoute, setRandomRoute] = useState(
    "/cocktails/" + (Math.floor(Math.random() * 9) + 1)
  );

  function onRandomCocktailClick() {
    setRandomRoute("/cocktails/" + (Math.floor(Math.random() * 9) + 1));
  }

  function onSignUpClick() {
    setSignUpDisplay(true);
  }

  function onCloseFormClick() {
    setSignUpDisplay(false);
  }

  return (
    <>
      {signUpDisplay && (
        <button
          id="close-form"
          className="box-border absolute cursor-default 
                     w-full h-calc-close top-[64px] left-0 z-50 "
          onClick={() => onCloseFormClick()}
        ></button>
      )}
      <header
        className="relative 
        flex justify-between items-center shrink-0
        w-full h-[64px] px-[30px] py-0 mb-[20px] rounded-b-[10px]
        bg-white shadow-def-md"
      >
        <div id="logo" className="w-[200px]">
          <Link
            className="flex items-center text-primary-text no-underline"
            to="/"
          >
            <Logo />
          </Link>
        </div>
        <nav>
          <ul
            className="list-none
            flex justify-center items-center gap-[40px]
            m-auto p-0"
          >
            <HeaderLink linkName={"Featured cocktails"} linkPath={"/"} />
            <HeaderLink linkName={"Constructor"} linkPath={"/constructor"} />
            <HeaderLink
              linkName={"Random cocktail"}
              linkPath={randomRoute}
              hasHandle={true}
              handleClick={onRandomCocktailClick}
            />
            <HeaderLink linkName={"About us"} linkPath={"/about"} />
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
