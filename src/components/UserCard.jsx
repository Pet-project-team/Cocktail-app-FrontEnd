import React from "react";
import "../styles/coctails-list.css";

export default function UserCard() {
  let isLoggedIng = false;

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
      <button id="sign_up" href="">
        Sign up
        <img src="signUp.svg" alt="" />
      </button>
    </div>
  );
}
