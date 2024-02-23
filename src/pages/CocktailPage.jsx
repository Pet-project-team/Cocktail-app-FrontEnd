import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import {
  PreviousIcon,
  NextIcon,
  TwitterIcon,
  FacebookIcon,
  CopyIcon,
  AddIcon,
  CartIcon,
} from "../assets/cocktailPage/icons/CocktailPageIcons";
import "../styles/cocktail-page.css";
import cocktailsList from "../cocktails.json";
import ingredientsList from "../ingredients.json";
import equipmentsList from "../equipments.json";

export default function CocktailPage() {
  const params = useParams();
  const cocktailPageInfo = cocktailsList[params.id - 1].pageInfo;
  const images = cocktailPageInfo.photos.map((photo) => ({
    original: photo,
    thumbnail: photo,
  }));

  const [tab, setTab] = useState(1);
  const [measurement, setMeasurement] = useState(1);
  const [isCopied, setIsCopied] = useState(false);
  const currentID = parseInt(params.id);
  const currentURL = window.location.href;

  return (
    <>
      <div id="top-links" className="flex justify-between h-[30px] mb-[20px]">
        <Link
          className="flex items-center text-primary-text text-[16px] transition-all duration-300 hover:text-highlighted"
          to={currentID - 1 === 0 ? "/" : "/cocktails/" + (currentID - 1)}
        >
          <PreviousIcon className="transition-all duration-300" />
          {currentID - 1 === 0 ? "On main page" : "Previous cocktail"}
        </Link>
        <Link
          className="flex items-center text-primary-text text-[16px] transition-all duration-300 hover:text-highlighted"
          to={"/cocktails/" + (currentID + 1)}
        >
          Next cocktail
          <NextIcon className="transition-all duration-300" />
        </Link>
      </div>
      <div
        id="cocktail-page"
        className="flex items-start justify-between gap-[30px] self-stretch 
                  mb-[40px] p-[40px] rounded-[20px]
                bg-white shadow-def-md"
      >
        <div
          id="cocktail-main-info"
          className="flex flex-col items-center gap-[10px] min-w-[300px] w-[25%] max-w-[433px]"
        >
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
          <h1 className="text-primary-text text-center text-[28px] font-normal leading-[150%] m-auto">
            {cocktailPageInfo.cocktailName}
          </h1>
          <p className="text-primary-text text-[16px] leading-[150%] m-auto">
            {cocktailPageInfo.cocktailDescription}
          </p>
          <div
            id="share-links"
            className="flex items-center gap-[10px] self-stretch"
          >
            <p className="text-primary-text text-[16px] leading-[150%] m-0">
              Share
            </p>
            <TwitterShareButton
              className="box-border relative h-[25px] cursor-pointer"
              title={
                "An incredible recipe for " +
                cocktailPageInfo.cocktailName +
                " that will definitely turn out delicious!"
              }
              url={currentURL}
            >
              <TwitterIcon />
            </TwitterShareButton>
            <FacebookShareButton
              className="box-border relative h-[25px] cursor-pointer"
              title={
                "An incredible recipe for " +
                cocktailPageInfo.cocktailName +
                " that will definitely turn out delicious!"
              }
              url={currentURL}
            >
              <FacebookIcon />
            </FacebookShareButton>
            <button
              type="button"
              className="box-border relative h-[25px] cursor-pointer"
              onClick={() => {
                navigator.clipboard
                  .writeText(
                    "An incredible recipe for " +
                      cocktailPageInfo.cocktailName +
                      " that will definitely turn out delicious!\n" +
                      currentURL
                  )
                  .then(() => {
                    // If successful, update the isCopied state value
                    setIsCopied(true);
                    setTimeout(() => {
                      setIsCopied(false);
                    }, 1500);
                  });
              }}
            >
              <CopyIcon />
              {isCopied && (
                <span className="text-primary-text cursor-default absolute top-[30px] left-[50%] translate-x-[-50%]">
                  Copied!
                </span>
              )}
            </button>
          </div>
        </div>
        <div id="cocktail-secondary-info" className="w-[70%] h-min">
          <div id="navigation" className="flex justify-between mb-[10px]">
            <nav className="flex h-[36px] gap-[30px]">
              <button
                className={
                  "nav-info-button box-border h-[36px] flex cursor-pointer transition-all duration-300 text-[16px] leading-[150%] m-auto hover:text-highlighted" +
                  " " +
                  (tab === 1
                    ? "border-b-2 border-b-highlighted text-highlighted"
                    : "text-primary-text")
                }
                type="button"
                onClick={() => {
                  setTab(1);
                }}
              >
                Essentials
              </button>
              <button
                className={
                  "nav-info-button box-border h-[36px] flex cursor-pointer transition-all duration-300 text-[16px] leading-[150%] m-auto hover:text-highlighted" +
                  " " +
                  (tab === 2
                    ? "border-b-2 border-b-highlighted text-highlighted"
                    : "text-primary-text")
                }
                type="button"
                onClick={() => {
                  setTab(2);
                }}
              >
                Recipe
              </button>
              <button
                className={
                  "nav-info-button box-border h-[36px] flex cursor-pointer transition-all duration-300 text-[16px] leading-[150%] m-auto hover:text-highlighted" +
                  " " +
                  (tab === 3
                    ? "border-b-2 border-b-highlighted text-highlighted"
                    : "text-primary-text")
                }
                type="button"
                onClick={() => {
                  setTab(3);
                }}
              >
                Video tutorial
              </button>
            </nav>
            {tab === 1 && (
              <div id="measurement" className="flex gap-[30px]">
                <p
                  id="measurement-title"
                  className="text-primary-text text-[16px] leading-[150%] h-[36px] pb-[12px] m-0"
                >
                  Measurement:
                </p>
                <button
                  className={
                    "nav-info-button box-border h-[36px] flex cursor-pointer transition-all duration-300 text-[16px] leading-[150%] m-auto hover:text-highlighted border-b-2" +
                    " " +
                    (measurement === 2
                      ? " border-b-highlighted text-highlighted"
                      : "border-b-transparent text-primary-text")
                  }
                  type="button"
                  onClick={() => {
                    setMeasurement(2);
                  }}
                >
                  ml
                </button>
                <button
                  className={
                    "nav-info-button box-border h-[36px] flex cursor-pointer transition-all duration-300 text-[16px] leading-[150%] m-auto hover:text-highlighted border-b-2" +
                    " " +
                    (measurement === 1
                      ? " border-b-highlighted text-highlighted"
                      : "border-b-transparent text-primary-text")
                  }
                  type="button"
                  onClick={() => {
                    setMeasurement(1);
                  }}
                >
                  oz
                </button>
              </div>
            )}
          </div>
          {tab === 1 && (
            <div id="ingredients-tab">
              <div id="cocktail-secondary-info__content">
                <h2 className=" text-primary-text text-start text-[24px] font-normal leading-[150%] mb-[10px]">
                  Ingredients
                </h2>
                <table id="ingredients-table" className='border-collapse m-w-[100%] mb-[40px]'>
                  <thead>
                    <tr>
                      <th className='relative p-[10px]' scope="col"></th>
                      <th className='relative p-[10px]' scope="col">Name</th>
                      <th className='relative p-[10px]' scope="col">Measurement</th>
                      <th className='relative p-[10px]' scope="col">Links</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cocktailPageInfo.ingredients.map((ingredient) => (
                      <tr>
                        <th id="image-cell" className='rounded-l-[30px] w-[120px] relative p-[10px]' scope="col">
                          <img
                            src={ingredientsList[ingredient.ingredienId].photo}
                            alt={ingredientsList[ingredient.ingredienId].name}
                          />
                        </th>
                        <th className='relative p-[10px]' scope="col">
                          <p className="text-primary-text text-[16px] leading-[150%] m-auto">
                            {ingredientsList[ingredient.ingredienId].name}
                          </p>
                        </th>
                        <th className='relative p-[10px]' scope="col">
                          {ingredient.numberOZ && (
                            <p className="text-primary-text text-[16px] leading-[150%] m-auto">
                              {measurement === 1
                                ? ingredient.numberOZ + " oz "
                                : ingredient.numberOZ * 30 + " ml "}
                            </p>
                          )}
                          {ingredient.number && <p>{ingredient.number}</p>}
                          {!(ingredient.numberOZ || ingredient.number) && (
                            <p className="text-primary-text text-[16px] leading-[150%] m-auto">
                              -
                            </p>
                          )}
                        </th>
                        <th className='relative rounded-r-[30px] w-[195px] p-[25px]' scope="col">
                          <div className="btn-container">
                            <button className="ingredient-btn" type="button">
                              <AddIcon />
                              Add to filter
                            </button>
                            {ingredient.haveLink && (
                              <a
                                className="ingredient-btn"
                                href={
                                  ingredientsList[ingredient.ingredienId].url
                                }
                                target="_blank"
                                rel="noreferrer"
                              >
                                <CartIcon />
                                Marketplace
                              </a>
                            )}
                          </div>
                        </th>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <h2 className=" text-primary-text text-start text-[24px] font-normal leading-[150%] mb-[10px]">
                  Equipment
                </h2>
                <table id="equipments-table">
                  <thead>
                    <tr>
                      <th className='relative p-[10px]' scope="col"></th>
                      <th className='relative p-[10px]' scope="col">Name</th>
                      <th className='relative p-[10px]' scope="col">Links</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cocktailPageInfo.equipments.map((equipment) => (
                      <tr>
                        <th id="image-cell" className='w-[120px] relative p-[10px] rounded-l-[30px]' scope="col">
                          <img
                            src={equipmentsList[equipment.equipmentId].photo}
                            alt={equipmentsList[equipment.equipmentId].name}
                          />
                        </th>
                        <th className='relative p-[10px]' scope="col">
                          <p className="text-primary-text text-[16px] leading-[150%] m-auto">
                            {equipmentsList[equipment.equipmentId].name}
                          </p>
                        </th>
                        <th className='relative rounded-r-[30px] w-[195px] p-[25px]' scope="col">
                          <div className="btn-container">
                            <button className="ingredient-btn" type="button">
                              <AddIcon />
                              Add to filter
                            </button>
                            {equipment.haveLink && (
                              <a
                                className="ingredient-btn"
                                href={equipmentsList[equipment.equipmentId].url}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Marketplace
                              </a>
                            )}
                          </div>
                        </th>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {tab === 2 && (
            <div id="recipe-tab">
              <h1
                className=" text-primary-text text-center text-[28px] font-normal leading-[150%] m-auto"
                id="recipe-title"
              >
                Step by step
              </h1>
              {cocktailPageInfo.recipe.map((element) => (
                <>
                  {element.type === "p" && (
                    <p
                      id="recipe-step"
                      className="text-primary-text text-[16px] leading-[150%] m-auto"
                    >
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
