import React from "react";
import "../styles/coctails-list.css";

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
      <button id="google" type="button">
        <img src="GoogleLogo.svg" alt="" />
        <p>Sign up with Google</p>
      </button>
    </div>
  );
}
