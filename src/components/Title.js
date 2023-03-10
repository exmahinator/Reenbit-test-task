import React from "react";
import RnMTitle from "../img/RickNMorty_Opt.png";
import RnMTitleDesktop from "../img/RickNMortyDesktop_Opt.png";

function Title() {
  return (
    <div className="title__container">
      <picture>
        <source srcset={RnMTitleDesktop} media="(min-width: 1024px)"/>
        <source srcset={RnMTitle} media="(min-width: 300px)"/>
        <img src={RnMTitle} alt="Rick and Morty Logo" />
      </picture>
    </div>
  );
}

export default Title;
