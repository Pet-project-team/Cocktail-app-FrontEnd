import React from "react";
import "../styles/sign-up.css";

export default function SignUp() {
  return (
    <div id="sign-up-window">
      <p id="welcome-msg">Welcome back! Wanna get high tonight?</p>
      <button id="google" type="button">
        <img src="/GoogleLogo.svg" alt="" />
        <p>Sign Up With Google</p>
      </button>
      <button id="facebook" type="button">
        <img src="/icons8-facebook.svg" alt="" />
        <p>Sign Up With Facebook</p>
      </button>
    </div>
  );
}
