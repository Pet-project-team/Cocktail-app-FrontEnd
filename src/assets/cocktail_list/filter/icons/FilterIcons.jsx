import React from 'react';
//icons
import searchIcon from './searchIcon.svg';
import clearIcon from './clearFilter.svg';
import filterIcon from './filterIcon.svg';
import addIcon from './addNew.svg';

export function SearchIcon() {
  return <img id='search-icon' className='w-[30px]' src={searchIcon} alt='' />;
}
export function ClearIcon() {
  return <img src={clearIcon} alt='' />;
}
export function FilterIcon() {
  return <img src={filterIcon} alt='' />;
}
export function AddIcon() {
  return <img src={addIcon} alt='' />;
}
