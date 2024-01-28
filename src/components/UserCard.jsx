import React from "react";
import { useState } from "react";
import SignUp from "./SignUp";
import "../styles/coctails-list.css";

export default function UserCard({
  signUpDisplay,
  isLoggedIn,
  onSignUpClick,
  onCloseFormClick,
}) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  return isLoggedIn ? (
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
    <div id="sign-up-container">
      <div id="sign-up-button-container">
        <button
          id="sign-up"
          type="button"
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
          <SignUp
            enteredName={enteredName}
            setEnteredName={setEnteredName}
            enteredEmail={enteredEmail}
            setEnteredEmail={setEnteredEmail}
            enteredPassword={enteredPassword}
            setEnteredPassword={setEnteredPassword}
          />
        </>
      )}
    </div>
  );
}
