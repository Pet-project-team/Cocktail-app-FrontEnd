import React from "react";
import CocktailCard from "./CocktailCard";
import coctailsList from "../cocktails.json";

export default function Cocktails() {
  return (
    <ul id="cocktails">
      {coctailsList.map((card) => (
        <CocktailCard key={card.id} cardInfo = {card} />
      ))}
    </ul>
  );
}
