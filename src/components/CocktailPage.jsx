import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import { useParams } from "react-router";
import "../styles/coctail-page.css";
import coctailsList from "../cocktails.json";
import ingredientsList from "../ingredients.json";

export default function CocktailPage() {
  const params = useParams();
  const cocktailPageInfo = coctailsList[params.id - 1].pageInfo;
  const images = cocktailPageInfo.photos.map((photo) => ({
    original: photo,
    thumbnail: photo,
  }));

  const [tab, setTab] = useState(1);
  const [measurement, setMeasurement] = useState(1);

  return (
    <>
      <div id="top-buttons">
        <button></button>
        <button></button>
      </div>
      <div id="cocktail-page">
        <div id="cocktail-main-info">
          <div
            className={images.length > 4 ? "scroll-enable" : "scroll-disable"}
          >
            <ImageGallery
              showNav={false}
              showPlayButton={false}
              showFullscreenButton={false}
              items={images}
            />
          </div>
          <h1>{cocktailPageInfo.cocktailName}</h1>
          <p>{cocktailPageInfo.cocktailDescription}</p>
          <div id="share-links">
            <p>Share</p>
            <a href="">
              <img src="/twitter.svg" alt="" />
            </a>
            <a href="">
              <img src="/facebook.svg" alt="" />
            </a>
            <button type="button">
              <img src="/content_copy.svg" alt="" />
            </button>
          </div>
        </div>
        <div id="cocktail-secondary-info">
          <div id="navigation">
            <nav>
              <button
                className={
                  "nav-info-button" +
                  " " +
                  (tab == 1
                    ? "highlighted-cocktail-page-btn"
                    : "unhighlighted-cocktail-page-btn")
                }
                type="button"
                onClick={() => {
                  setTab(1);
                }}
              >
                <p>Ingredients</p>
              </button>
              <button
                className={
                  "nav-info-button" +
                  " " +
                  (tab == 2
                    ? "highlighted-cocktail-page-btn"
                    : "unhighlighted-cocktail-page-btn")
                }
                type="button"
                onClick={() => {
                  setTab(2);
                }}
              >
                <p>Recipe</p>
              </button>
              <button
                className={
                  "nav-info-button" +
                  " " +
                  (tab == 3
                    ? "highlighted-cocktail-page-btn"
                    : "unhighlighted-cocktail-page-btn")
                }
                type="button"
                onClick={() => {
                  setTab(3);
                }}
              >
                <p>Video tutorial</p>
              </button>
            </nav>
            <div id="measurement">
              <p id="measurement-title">Measurement:</p>
              <button
                className={
                  "nav-info-button" +
                  " " +
                  (measurement == 2
                    ? "highlighted-cocktail-page-btn"
                    : "unhighlighted-cocktail-page-btn")
                }
                type="button"
                onClick={() => {
                  setMeasurement(2);
                }}
              >
                <p>ml</p>
              </button>
              <button
                className={
                  "nav-info-button" +
                  " " +
                  (measurement == 1
                    ? "highlighted-cocktail-page-btn"
                    : "unhighlighted-cocktail-page-btn")
                }
                type="button"
                onClick={() => {
                  setMeasurement(1);
                }}
              >
                <p>oz</p>
              </button>
            </div>
          </div>
          {tab == 1 && (
            <div id="cocktail-secondary-info__content">
              <h1>Ingredients</h1>
              <table>
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Name</th>
                    <th scope="col">Measurement</th>
                    <th scope="col">Links</th>
                  </tr>
                </thead>
                <tbody>
                  {cocktailPageInfo.ingredients.map((ingredient) => (
                    <tr>
                      <th scope="col">
                        <img
                          src={ingredientsList[ingredient.ingredienId].photo}
                        />
                      </th>
                      <th scope="col">
                        <p>{ingredientsList[ingredient.ingredienId].name}</p>
                      </th>
                      <th scope="col">
                        {ingredient.numberOZ && (
                          <p>
                            {measurement == 1
                              ? ingredient.numberOZ + " oz "
                              : ingredient.numberOZ * 30 + " ml "}
                          </p>
                        )}
                        {ingredient.number && <p>{ingredient.number}</p>}
                        {!(ingredient.numberOZ || ingredient.number) && (
                          <p>-</p>
                        )}
                      </th>
                      <th scope="col">
                        <button type="button">Add to filter</button>
                        {ingredient.haveLink && (
                          <a
                            href={ingredientsList[ingredient.ingredienId].url}
                            target="_blank"
                          >
                            Buy
                          </a>
                        )}
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* <ul id="ingredients">
              {cocktailPageInfo.ingredients.map((ingredient) => (
                <li className="ingredient">
                  {ingredient.haveLink && (
                    <a
                      href={ingredientsList[ingredient.ingredienId].url}
                      target="_blank"
                    >
                      <img src="/openInNewTab.svg" alt="" />
                    </a>
                  )}
                  <img src={ingredientsList[ingredient.ingredienId].photo} />
                  {ingredient.numberOZ && (
                    <p>
                      {ingredient.numberOZ + " oz " + ingredient.ingredienTitle}
                    </p>
                  )}
                  {ingredient.number && (
                    <p>{ingredient.number + " " + ingredient.ingredienTitle}</p>
                  )}
                  {!(ingredient.numberOZ || ingredient.number) && (
                    <p>{ingredient.ingredienTitle}</p>
                  )}
                </li>
              ))}
            </ul> */}
              <h1>Equipment</h1>
              <div id="equipments"></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
