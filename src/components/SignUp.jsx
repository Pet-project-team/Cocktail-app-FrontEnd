import React from "react";
import { useState } from "react";
import "../styles/sign-up.css";

export default function SignUp() {
  const [formRoute, setFormRoute] = useState(false);

  function onClickLoginBtn() {
    setFormRoute(false);
  }

  function onClickRegisterBtn() {
    setFormRoute(true);
  }

  return (
    <form
      id="signUpWindow"
      action={formRoute ? "/register" : "/login"}
      method="POST"
    >
      <div id="chooseBtns">
        <button
          className="chooseBtn"
          id="logIn"
          type="button"
          onClick={() => onClickLoginBtn()}
        >
          <p className={formRoute ? "" : "highlightedBtn"}>Log in</p>
        </button>
        <svg
          id="line"
          xmlns="http://www.w3.org/2000/svg"
          width="2"
          height="27"
          viewBox="0 0 2 27"
          fill="none"
        >
          <path d="M1 0V27" stroke="black" strokeOpacity="0.85" />
        </svg>
        <button
          className="chooseBtn"
          id="register"
          type="button"
          onClick={() => onClickRegisterBtn()}
        >
          <p className={formRoute ? "highlightedBtn" : ""}>Register</p>
        </button>
      </div>
      <p id="welcomeMsg">
        {formRoute
          ? "Welcome back! Wanna get high tonight?"
          : "Sign up to continue with full access!"}
      </p>
      <button id="google" type="button">
        <img src="GoogleLogo.svg" alt="" />
        <p>Sign up with Google</p>
      </button>
      <div id="hr">
        <div className="hrLine"></div>
        <p id="hrOR">OR</p>
        <div className="hrLine"></div>
      </div>
      {formRoute && (
        <div className="inputContainer">
          <input type="text" id="nickname" name="nickname" placeholder=" " required />
          <label htmlFor="nickname">Your nickname</label>
        </div>
      )}
      <div className="inputContainer">
        <input type="email" id="email" name="email" placeholder=" " required />
        <label htmlFor="email">Email</label>
      </div>
      <div className="inputContainer">
        <input type="password" id="password" name="password" placeholder=" " required />
        <label htmlFor="password">Password</label>
      </div>
      <button id="submitBtn" type="submit">
        <p>{formRoute ? "Create account" : "Sign up"}</p>
        <img
          id="submitIcon"
          src={formRoute ? "personAdd.svg" : "signUp.svg"}
          alt=""
        />
      </button>
    </form>
  );
}
