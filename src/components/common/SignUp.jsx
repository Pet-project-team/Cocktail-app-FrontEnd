import React from 'react';
import {
  GoogleIcon,
  FacebookIcon,
} from '../../assets/header/icons/HeaderIcons';

export default function SignUp() {
  return (
    <div
      id='sign-up-window'
      className='absolute top-[69px] right-0 z-[60]
                 w-[350px] p-[15px] rounded-[20px]  
                 flex flex-col items-center gap-[10px]
                 bg-white shadow-def-md'
    >
      <p
        id='welcome-msg'
        className='m-auto text-center leading-[150%] self-stretch
                text-primary-text text-[16px] not-italic font-bold '
      >
        Welcome back! Wanna get high tonight?
      </p>
      <button
        id='google'
        className='box-border flex justify-center items-center self-center gap-[10px]
                   w-full h-[30px] py-0 px-[10px] rounded-[5px]
                   border border-highlighted bg-white
                   transition-all duration-300 
                 hover:border-highlighted-hov hover:text-highlighted
                   font-bold leading-[150%]'
        type='button'
      >
        <GoogleIcon />
        Sign Up With Google
      </button>
      <button
        id='facebook'
        className='box-border flex justify-center items-center self-center gap-[10px]
                   w-full h-[30px] py-0 px-[10px] rounded-[5px]
                   border border-highlighted bg-white
                   transition-all duration-300 
                 hover:border-highlighted-hov hover:text-highlighted
                   font-bold leading-[150%]'
        type='button'
      >
        <FacebookIcon />
        Sign Up With Facebook
      </button>
    </div>
  );
}
