import React from 'react';
import CocktailCard from './CocktailCard';
import cocktailsList from '../cocktails.json';

export default function Cocktails() {
  return (
    <div
      id='cocktails'
      className='flex items-start content-start gap-[30px] self-stretch flex-wrap p-0 pb-[30px] list-none'
    >
      {cocktailsList.map((card) => (
        <CocktailCard key={card.id} id={card.id} cardInfo={card.cardInfo} />
      ))}
    </div>
  );
}
