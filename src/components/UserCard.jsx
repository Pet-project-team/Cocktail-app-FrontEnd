import React from "react";
import SignUp from "./SignUp";
import { CloseIcon, SignUpIcon } from "../assets/header/icons/HeaderIcons";

export default function UserCard({
  signUpDisplay,
  isLoggedIn,
  onSignUpClick,
  onCloseFormClick,
}) {
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
          {signUpDisplay ? (
            <>
              Close Form
              <CloseIcon />
            </>
          ) : (
            <>
              Sign up
              <SignUpIcon />
            </>
          )}
        </button>
      </div>
      {signUpDisplay && <SignUp />}
    </div>
  );
}
