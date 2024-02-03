import React from "react";
import CocktailCard from "./CocktailCard";
import coctailsList from "../cocktails.json";

export default function Cocktails() {
  return (
    <div id="cocktails">
      {coctailsList.map((card) => (
        <CocktailCard key={card.id} id={card.id} cardInfo={card.cardInfo} />
      ))}
    </div>
  );
}
