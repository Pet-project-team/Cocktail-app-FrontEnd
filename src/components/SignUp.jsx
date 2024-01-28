import React from "react";
import { useState } from "react";
import "../styles/sign-up.css";

export default function SignUp({
  enteredName,
  setEnteredName,
  enteredEmail,
  setEnteredEmail,
  enteredPassword,
  setEnteredPassword,
}) {
  const [formRoute, setFormRoute] = useState(false);

  function onClickLoginBtn() {
    setFormRoute(false);
  }

  function onClickRegisterBtn() {
    setFormRoute(true);
  }

  return (
    <form
      id="sign-up-window"
      action={formRoute ? "/register" : "/login"}
      method="POST"
    >
      <div id="choose-btns">
        <button
          className="choose-btn"
          id="logIn"
          type="button"
          onClick={() => onClickLoginBtn()}
        >
          <p className={formRoute ? "" : "highlighted-btn"}>Log in</p>
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
          className="choose-btn"
          id="register"
          type="button"
          onClick={() => onClickRegisterBtn()}
        >
          <p className={formRoute ? "highlighted-btn" : ""}>Register</p>
        </button>
      </div>
      <p id="welcome-msg">
        {formRoute
          ? "Sign up to continue with full access!"
          : "Welcome back! Wanna get high tonight?"}
      </p>
      <button id="google" type="button">
        <img src="GoogleLogo.svg" alt="" />
        <p>Sign up with Google</p>
      </button>
      <div id="hr">
        <div className="hr__line"></div>
        <p id="hr__text">OR</p>
        <div className="hr__line"></div>
      </div>
      {formRoute && (
        <div className="input-container">
          <input
            type="text"
            id="nickname"
            name="nickname"
            placeholder=" "
            value={enteredName}
            onChange={(e) => {
              setEnteredName(e.target.value);
            }}
            required
          />
          <label htmlFor="nickname">Your nickname</label>
          {enteredName.length > 0 && (
            <button
              className="clear-btn"
              type="button"
              onClick={() => {
                setEnteredName("");
              }}
            >
              <img src="clearInput.svg" alt="" />
            </button>
          )}
        </div>
      )}
      <div className="input-container">
        <input
          type="email"
          id="email"
          name="email"
          placeholder=" "
          required
          value={enteredEmail}
          onChange={(e) => {
            setEnteredEmail(e.target.value);
          }}
        />
        <label htmlFor="email">Email</label>
        {enteredEmail.length > 0 && (
          <button
            className="clear-btn"
            type="button"
            onClick={() => {
              setEnteredEmail("");
            }}
          >
            <img src="clearInput.svg" alt="" />
          </button>
        )}
      </div>
      <div className="input-container">
        <input
          type="password"
          id="password"
          name="password"
          placeholder=" "
          value={enteredPassword}
          onChange={(e) => {
            setEnteredPassword(e.target.value);
          }}
          required
        />
        <label htmlFor="password">Password</label>
        {enteredPassword.length > 0 && (
          <button
            className="clear-btn"
            type="button"
            onClick={() => {
              setEnteredPassword("");
            }}
          >
            <img src="clearInput.svg" alt="" />
          </button>
        )}
      </div>
      <button id="submit-btn" type="submit">
        <p>{formRoute ? "Create account" : "Log in"}</p>
        <img
          id="submit-icon"
          src={formRoute ? "personAdd.svg" : "signUp.svg"}
          alt=""
        />
      </button>
    </form>
  );
}
