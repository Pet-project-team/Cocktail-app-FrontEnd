import React from "react";
import { useState } from "react";
import SignUp from "./SignUp";
import "../styles/coctails-list.css";

export default function UserCard() {
  const [signUpDisplay, setSignUpDisplay] = useState(false);

  let isLoggedIng = false;

  function onSignUpClick() {
    setSignUpDisplay(true);
  }

  function onCloseFormClick() {
    setSignUpDisplay(false);
  }

  return isLoggedIng ? (
    <div id="user">
      <a href="">
        <img id="avatar" src="avatarDefault.png" alt="" />
      </a>
      <a href="">
        Welcome back,
        <strong>Username</strong>
      </a>
    </div>
  ) : (
    <div id="sign_up_container">
      <div id="sign_up_button_container">
        <button
          id="sign_up"
          onClick={
            signUpDisplay ? () => onCloseFormClick() : () => onSignUpClick()
          }
        >
          {signUpDisplay ? "Close Form" : "Sign up"}
          <img src={signUpDisplay ? "close.svg" : "signUp.svg"} alt="" />
        </button>
      </div>
      {signUpDisplay && (
        <>
          <button id="closeForm" onClick={() => onCloseFormClick()}></button>
          <SignUp />
        </>
      )}
    </div>
  );
}
