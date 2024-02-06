import React from "react";
import CocktailCard from "./CocktailCard";
import cocktailsList from "../cocktails.json";

export default function Cocktails() {
  return (
    <div id="cocktails">
      {cocktailsList.map((card) => (
        <CocktailCard key={card.id} id={card.id} cardInfo={card.cardInfo} />
      ))}
    </div>
  );
}
