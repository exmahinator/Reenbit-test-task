import React from "react";
import RnMTitle from "../img/RickNMorty_Opt.png";

function Title() {
  return (
    <div className="title__container">
      <img src={RnMTitle} alt="Rick and Morty Logo" width={312} />
    </div>
  );
}

export default Title;
