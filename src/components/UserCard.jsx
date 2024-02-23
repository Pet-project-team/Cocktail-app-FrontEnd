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
    <div
      id="user"
      className="w-[200px] flex justify-end items-center gap-[10px] shrink-0"
    >
      <a
        className="flex flex-col items-start 
                   text-[14px] leading-[22px]"
        href=""
      >
        <img
          id="avatar"
          className="flex flex-col items-end shrink-0 
                     w-[40px] h-[40px] rounded-full"
          src="avatarDefault.png"
          alt=""
        />
      </a>
      <a
        className="flex flex-col items-start 
                   text-[14px] leading-[22px]"
        href=""
      >
        Welcome back,
        <strong>Username</strong>
      </a>
    </div>
  ) : (
    <div id="sign-up-container" className="flex justify-end w-[200px]">
      <div
        id="sign-up-button-container"
        className="flex flex-row justify-end items-center w-[150px]"
      >
        <button
          id="sign-up"
          className="box-border h-[30px] py-0 pl-[10px] pr-[5px] leading-[22px] rounded-[5px]
                    flex justify-center items-center gap-[10px]
                    text-[16px] text-white bg-highlighted
                    transition-all duration-300 hover:bg-highlighted-hov"
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
