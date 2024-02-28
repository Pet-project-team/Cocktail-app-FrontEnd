import React from 'react';

import {
  AddIcon,
  CartIcon,
} from '../../assets/cocktail_page/icons/CocktailPageIcons';

export default function CocktailPageTable({ items, list, measurement }) {
  let id = 0;
  return (
    <table className='border-collapse m-w-[100%] mb-[40px]'>
      <thead>
        <tr className='group'>
          <th
            className='relative p-[10px] font-normal group-odd:after:bg-white'
            scope='col'
          ></th>
          <th
            className='relative p-[10px] font-normal group-odd:after:bg-white'
            scope='col'
          >
            Name
          </th>
          {measurement && (
            <th
              className='relative p-[10px] font-normal group-odd:after:bg-white'
              scope='col'
            >
              Measurement
            </th>
          )}
          <th
            className='relative p-[10px] font-normal group-odd:after:bg-white'
            scope='col'
          >
            Links
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map(
          (item) => (
            list[item.ingredienId]
              ? (id = item.ingredienId)
              : (id = item.equipmentId),
            (
              <tr className='odd:bg-slate-100 group'>
                <th
                  className='rounded-l-[30px] w-[120px] relative p-[10px] group-odd:after:bg-white'
                  scope='col'
                >
                  <img
                    className='block w-[100px] aspect-square object-contain bg-white rounded-[20px]'
                    src={list[id].photo}
                    alt={list[id].name}
                  />
                </th>
                <th
                  className='relative p-[10px] font-normal
                  after:block after:bg-slate-100 after:absolute after:bottom-[50%] after:left-0 after:h-[85%] after:w-[1px] after:rounded after:translate-y-[50%]
                  group-odd:after:bg-white'
                  scope='col'
                >
                  <p className='text-primary-text text-[16px] leading-[150%] m-auto'>
                    {list[id].name}
                  </p>
                </th>
                {measurement && (
                  <th
                    className='relative p-[10px] font-normal
                    after:block after:bg-slate-100 after:absolute after:bottom-[50%] after:left-0 after:h-[85%] after:w-[1px] after:rounded after:translate-y-[50%]
                    group-odd:after:bg-white'
                    scope='col'
                  >
                    {item.numberOZ && (
                      <p className='text-primary-text text-[16px] leading-[150%] m-auto'>
                        {measurement === 1
                          ? item.numberOZ + ' oz '
                          : item.numberOZ * 30 + ' ml '}
                      </p>
                    )}
                    {item.number && <p>{item.number}</p>}
                    {!(item.numberOZ || item.number) && (
                      <p className='text-primary-text text-[16px] leading-[150%] m-auto'>
                        -
                      </p>
                    )}
                  </th>
                )}
                <th
                  className='relative rounded-r-[30px] w-[195px] p-[25px] font-normal
                  after:block after:bg-slate-100 after:absolute after:bottom-[50%] after:left-0 after:h-[85%] after:w-[1px] after:rounded after:translate-y-[50%]
                  group-odd:after:bg-white'
                  scope='col'
                >
                  <div
                    className='flex flex-col items-center gap-[10px]
                                  w-[145px] h-full m-auto'
                  >
                    <button
                      className='flex justify-around items-center gap-[10px]
                      h-[30px] w-full py-0 pr-[10px] pl-[8px] rounded-[5px]
                      text-[16px] font-normal text-nowrap
                      border border-slate-200 bg-white hover:bg-slate-50
                      transition-all duration-300'
                      type='button'
                    >
                      <AddIcon />
                      Add to filter
                    </button>
                    {item.haveLink && (
                      <a
                        className='flex justify-around items-center gap-[10px]
                        h-[30px] w-full py-0 pr-[10px] pl-[8px] rounded-[5px]
                        text-[16px] font-normal text-nowrap
                        border border-slate-200 bg-white hover:bg-slate-50
                        transition-all duration-300'
                        href={list[id].url}
                        target='_blank'
                        rel='noreferrer'
                      >
                        <CartIcon />
                        Marketplace
                      </a>
                    )}
                  </div>
                </th>
              </tr>
            )
          )
        )}
      </tbody>
    </table>
  );
}
