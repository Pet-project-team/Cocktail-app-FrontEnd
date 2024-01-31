import React from "react";
import ImageGallery from "react-image-gallery";
import { useParams } from "react-router";
import "../styles/coctail-page.css";
import coctailsList from "../cocktails.json";

export default function CocktailPage() {
  const params = useParams();

  const cocktailPageInfo = coctailsList[params.id - 1].pageInfo;

  const images = cocktailPageInfo.photos.map((photo) => ({
    original: photo,
    thumbnail: photo,
  }));
  return (
    <>
      <div id="top-buttons">
        <button></button>
        <button></button>
      </div>
      <div id="cocktail-page">
        <div id="cocktail-main-info">
          <div className={images.length > 4 ? "scroll-enable" : ""}>
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
        <div id="cocktail-secondary-info"></div>
      </div>
    </>
  );
}
