import React from "react";
import { NavLink } from "react-router-dom";
import MainContainer from "../components/MainContainer";

import TestImageMobile from "../img/testImgMobile_Opt.jpg";
import TestImageDesktop from "../img/testImgDesktop_Opt.jpg";

function DetailsPage() {
  return (
    <MainContainer>
      <NavLink to="/" className="details__link">
        <div className="details__linkIconContainer"></div>
        <span className="details__linkText">GO BACK</span>
      </NavLink>
      <div className="details__container">
        <div className="details__imgContainer">
          <picture>
            <source srcSet={TestImageDesktop} media="(min-width: 1024px)"/>
            <source srcSet={TestImageMobile} media="(min-width: 300px)"/>
            <img src={TestImageMobile} alt="Requested hero"/>
          </picture>
        </div>
        <div className="details__descriptionContainer">
          <h1 className="details__name">Rick Sanchez</h1>
          <div className="details__descriptionSubContainer">
            <h2 className="details__infoText">Informations</h2>
            <ul className="details__list">
              <li className="details__item">
                <h3 className="details__itemHeader">Gender</h3>
                <p className="details__itemInfo">Male</p>
              </li>
              <li className="details__item">
                <h3 className="details__itemHeader">Status</h3>
                <p className="details__itemInfo">Alive</p>
              </li>
              <li className="details__item">
                <h3 className="details__itemHeader">Specie</h3>
                <p className="details__itemInfo">Human</p>
              </li>
              <li className="details__item">
                <h3 className="details__itemHeader">Origin</h3>
                <p className="details__itemInfo">Earth</p>
              </li>
              <li className="details__item">
                <h3 className="details__itemHeader">Type</h3>
                <p className="details__itemInfo">Unknown</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </MainContainer>
  );
}

export default DetailsPage;
