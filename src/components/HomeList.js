import React from "react";
import TestImage from "../img/testImg_Opt.jpg";

function HomeList() {
  return (
    <>
      <h1 className="visually-hidden">List of heroes</h1>
      <ul className="character__list">
        <li className="character__item">
          <a href="/">
            <div className="character__container">
              <img
                src={TestImage}
                alt="Person from the cartoon"
                width="308px"
                className="character__image"
              />
              <div className="character__subContainer">
                <h2 className="character__name">Rick Sanchez</h2>
                <p className="character__specie">Human</p>
              </div>
            </div>
          </a>
        </li>
        <li className="character__item">
          <a href="/">
            <div className="character__container">
              <img
                src={TestImage}
                alt="Person from the cartoon"
                width="308px"
                className="character__image"
              />
              <div className="character__subContainer">
                <h2 className="character__name">Rick Sanchez</h2>
                <p className="character__specie">Human</p>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </>
  );
}

export default HomeList;
