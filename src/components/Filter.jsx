import React from "react";
import {
  SearchIcon,
  ClearIcon,
  FilterIcon,
  AddIcon,
} from "../assets/cocktail_list/filter/icons/FilterIcons";

export default function Filter() {
  let isFiltred = false;

  return (
    <div
      id='filter'
      className='flex justify-between items-center self-stretch mb-[20px]'
    >
      <div id='search' className='flex relative overflow-hidden rounded-[5px]'>
        <input
          className='peer w-[680px] h-[30px] pl-[10px] rounded-[5px]
          border border-slate-300 bg-white'
          type='text'
          placeholder='Find your best cocktail'
          name=''
          id=''
        />
        <button
          id='search-button'
          tabIndex={-1}
          className='box-border h-[30px] absolute right-0 
          border-l border-slate-300
          peer-focus-within:border-l-2 peer-focus-within:border-black'
        >
          <SearchIcon />
        </button>
      </div>
      <div
        id='buttons'
        className='flex justify-between items-center self-stretch gap-[10px]'
      >
        <div id='filter-buttons' className='flex items-center gap-[10px]'>
          {isFiltred && (
            <button
              id='clear-filter'
              className='box-border flex items-center self-stretch leading-[22px] text-[16px]'
            >
              Clear filter
              <ClearIcon />
            </button>
          )}
          <button
            id='filter-button'
            className='box-border flex justify-center items-center self-stretch gap-[10px]
            h-[30px] py-0 pr-[10px] pl-[5px] rounded-[5px]
            leading-[22px] text-[16px] border border-slate-300 bg-white 
            hover:bg-slate-50 transition duration-300'
          >
            <FilterIcon />
            Filter
          </button>
        </div>
        <button
          id='add-new'
          className='box-border flex justify-center items-center self-stretch gap-[10px]
          h-[30px] py-0 px-[10px] rounded-[5px]
          leading-[22px] text-[16px] 
          text-white bg-highlighted hover:bg-highlighted-hov
          transition duration-300'
        >
          <AddIcon />
          Add new
        </button>
      </div>
    </div>
  );
}
