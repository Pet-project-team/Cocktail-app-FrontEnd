import React from "react";
import { Link } from "react-router-dom";

export default function CocktailCard({ cardInfo, id }) {
  return (
    <div className="w-calc-20 relative">
      <button className="like-btn box-border absolute right-[20px] top-[20px] cursor-pointer z-10">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 21L10.55 19.7C8.86667 18.1834 7.475 16.875 6.375 15.775C5.275 14.675 4.4 13.6875 3.75 12.8125C3.1 11.9375 2.64583 11.1334 2.3875 10.4C2.12917 9.66669 2 8.91669 2 8.15002C2 6.58336 2.525 5.27502 3.575 4.22502C4.625 3.17502 5.93333 2.65002 7.5 2.65002C8.36667 2.65002 9.19167 2.83336 9.975 3.20002C10.7583 3.56669 11.4333 4.08336 12 4.75002C12.5667 4.08336 13.2417 3.56669 14.025 3.20002C14.8083 2.83336 15.6333 2.65002 16.5 2.65002C18.0667 2.65002 19.375 3.17502 20.425 4.22502C21.475 5.27502 22 6.58336 22 8.15002C22 8.91669 21.8708 9.66669 21.6125 10.4C21.3542 11.1334 20.9 11.9375 20.25 12.8125C19.6 13.6875 18.725 14.675 17.625 15.775C16.525 16.875 15.1333 18.1834 13.45 19.7L12 21Z"
            fill={cardInfo.isLiked ? "#0A64FF" : "none"}
            stroke={cardInfo.isLiked ? "none" : "hsla(0, 0%, 0%, 0.85)"}
            stroke-width="2"
          />
        </svg>
      </button>
      <Link
        to={"cocktails/" + id}
        className="cocktail-card 
        box-border relative flex flex-col justify-between items-center 
        p-[10px] pb-[30px] rounded-[20px]
      bg-white shadow-def-md"
      >
        <div>
          <img
            src={cardInfo.cocktailPhoto}
            className="card__photo w-[170px] h-[242px] shrink-0"
          ></img>
        </div>
        <div className="card__info flex flex-col justify-end items-center self-stretch gap-[10px]">
          <p className="main-component-name text-primary-text text-center text-[16px] font-normal leading-[22px]">
            {cardInfo.mainCompName}
          </p>
          <p className="cocktail-name text-primary-text text-center text-[20px] font-normal leading-[22px]">
            {cardInfo.cocktailName}
          </p>
        </div>
      </Link>
    </div>
  );
}
