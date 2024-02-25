import React from "react";

export default function CocktailPageTab({
  tabName,
  comparedTab,
  tabValue,
  setComparedTab,
}) {
  return (
    <button
      className={
        "nav-info-button box-border h-[36px] flex cursor-pointer transition-all duration-300 text-[16px] leading-[150%] m-auto hover:text-highlighted" +
        " " +
        (comparedTab === tabValue
          ? "border-b-2 border-b-highlighted text-highlighted"
          : "text-primary-text")
      }
      type="button"
      onClick={() => {
        setComparedTab(tabValue);
      }}
    >
      {tabName}
    </button>
  );
}
