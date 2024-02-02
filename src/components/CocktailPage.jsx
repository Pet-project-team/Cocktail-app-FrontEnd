import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "../styles/coctail-page.css";
import coctailsList from "../cocktails.json";
import ingredientsList from "../ingredients.json";
import equipmentsList from "../equipments.json";

export default function CocktailPage() {
  const params = useParams();
  const cocktailPageInfo = coctailsList[params.id - 1].pageInfo;
  const images = cocktailPageInfo.photos.map((photo) => ({
    original: photo,
    thumbnail: photo,
  }));

  const [tab, setTab] = useState(1);
  const [measurement, setMeasurement] = useState(1);
  const currentID = parseInt(params.id);

  return (
    <>
      <div id="top-links">
        {currentID - 1 === 0 ? (
          <Link to="/">
            <img src="/previous-icon.svg"></img>
            On main page
          </Link>
        ) : (
          <Link to={"/cocktails/" + (currentID - 1)}>
            <img src="/previous-icon.svg"></img>
            Previous cocktail
          </Link>
        )}
        <Link to={"/cocktails/" + (currentID + 1)}>
          Next cocktail
          <img src="/next-icon.svg"></img>
        </Link>
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
            <button type="button">
              <img src="/twitter.svg" alt="" />
            </button>
            <button type="button">
              <img src="/facebook.svg" alt="" />
            </button>
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
                  (tab === 1
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
                  (tab === 2
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
                  (tab === 3
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
            {tab === 1 && (
              <div id="measurement">
                <p id="measurement-title">Measurement:</p>
                <button
                  className={
                    "nav-info-button" +
                    " " +
                    (measurement === 2
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
                    (measurement === 1
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
            )}
          </div>
          {tab === 1 && (
            <div id="ingredients-tab">
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
                            alt={ingredientsList[ingredient.ingredienId].name}
                          />
                        </th>
                        <th scope="col">
                          <p>{ingredientsList[ingredient.ingredienId].name}</p>
                        </th>
                        <th scope="col">
                          {ingredient.numberOZ && (
                            <p>
                              {measurement === 1
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
                              rel="noreferrer"
                            >
                              Buy
                            </a>
                          )}
                        </th>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <h1>Equipment</h1>
                <div id="equipments">
                  <table>
                    <thead>
                      <tr>
                        <th scope="col"></th>
                        <th scope="col">Name</th>
                        <th scope="col">Links</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cocktailPageInfo.equipments.map((equipment) => (
                        <tr>
                          <th scope="col">
                            <img
                              src={equipmentsList[equipment.equipmentId].photo}
                              alt={equipmentsList[equipment.equipmentId].name}
                            />
                          </th>
                          <th scope="col">
                            <p>{equipmentsList[equipment.equipmentId].name}</p>
                          </th>
                          <th scope="col">
                            <button type="button">Add to filter</button>
                            {equipment.haveLink && (
                              <a
                                href={equipmentsList[equipment.equipmentId].url}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Buy
                              </a>
                            )}
                          </th>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
          {tab === 2 && (
            <div id="recipe-tab">
              {cocktailPageInfo.recipe.map((element) => (
                <>
                  {element.type === "p" && (
                    <p id="recipe-step">
                      {element.step && <span>{element.step}</span>}
                      {" " + element.content}
                    </p>
                  )}
                  {element.type === "img" && (
                    <img
                      id="recipe-step-img"
                      alt="related to step text"
                      src={element.url}
                    ></img>
                  )}
                </>
              ))}
            </div>
          )}
          {tab === 3 && (
            <div id="video-tab">
              <iframe
                width="100%"
                src={cocktailPageInfo.youtubeURL}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen="true"
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
