import React from "react";
import { GoogleIcon, FacebookIcon } from "../assets/header/icons/HeaderIcons";
import "../styles/sign-up.css";

export default function SignUp() {
  return (
    <div id="sign-up-window">
      <p id="welcome-msg">Welcome back! Wanna get high tonight?</p>
      <button id="google" type="button">
        <GoogleIcon />
        <p>Sign Up With Google</p>
      </button>
      <button id="facebook" type="button">
        <FacebookIcon />
        <p>Sign Up With Facebook</p>
      </button>
    </div>
  );
}
