import React from 'react';

import previousIcon from './previous-icon.svg';
import nextIcon from './next-icon.svg';

import twitterIcon from './twitter.svg';
import facebookIcon from './facebook.svg';
import copyIcon from './content_copy.svg';

import cartIcon from './cart.svg';
import addIcon from './addNew.svg';

//nav icons
export function PreviousIcon() {
  return <img src={previousIcon} alt='' />;
}
export function NextIcon() {
  return <img src={nextIcon} alt='' />;
}

//share icons
export function TwitterIcon() {
  return <img src={twitterIcon} alt='' />;
}
export function FacebookIcon() {
  return <img src={facebookIcon} alt='' />;
}
export function CopyIcon() {
  return <img src={copyIcon} alt='' />;
}

//ingredients links icons

export function CartIcon() {
  return <img src={cartIcon} alt='' />;
}
export function AddIcon() {
  return (
    <img className='add-button__img w-[12px] h-[12px]' src={addIcon} alt='' />
  );
}
