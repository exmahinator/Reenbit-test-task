import React from "react";
import { NavLink } from "react-router-dom";
import TestImage from "../img/testImg_Opt.jpg";

function HomeList() {
  return (
    <div className="character__container">
      <h1 className="visually-hidden">List of heroes</h1>
      <ul className="character__list">
        <li className="character__item">
          <NavLink to="details">
            <div className="character__itemContainer">
              <img
                src={TestImage}
                alt="Person from the cartoon"
                width="308px"
                className="character__image"
              />
              <div className="character__itemSubContainer">
                <h2 className="character__name">Rick Sanchez</h2>
                <p className="character__specie">Human</p>
              </div>
            </div>
          </NavLink>
        </li>
        <li className="character__item">
          <NavLink to="details">
            <div className="character__itemContainer">
              <img
                src={TestImage}
                alt="Person from the cartoon"
                width="308px"
                className="character__image"
              />
              <div className="character__itemSubContainer">
                <h2 className="character__name">Rick Sanchez</h2>
                <p className="character__specie">Human</p>
              </div>
            </div>
          </NavLink>
        </li>
        <li className="character__item">
          <NavLink to="details">
            <div className="character__itemContainer">
              <img
                src={TestImage}
                alt="Person from the cartoon"
                width="308px"
                className="character__image"
              />
              <div className="character__itemSubContainer">
                <h2 className="character__name">Rick Sanchez</h2>
                <p className="character__specie">Human</p>
              </div>
            </div>
          </NavLink>
        </li>
        <li className="character__item">
          <NavLink to="details">
            <div className="character__itemContainer">
              <img
                src={TestImage}
                alt="Person from the cartoon"
                width="308px"
                className="character__image"
              />
              <div className="character__itemSubContainer">
                <h2 className="character__name">Rick Sanchez</h2>
                <p className="character__specie">Human</p>
              </div>
            </div>
          </NavLink>
        </li>
        <li className="character__item">
          <NavLink to="details">
            <div className="character__itemContainer">
              <img
                src={TestImage}
                alt="Person from the cartoon"
                width="308px"
                className="character__image"
              />
              <div className="character__itemSubContainer">
                <h2 className="character__name">Rick Sanchez</h2>
                <p className="character__specie">Human</p>
              </div>
            </div>
          </NavLink>
        </li>
        <li className="character__item">
          <NavLink to="details">
            <div className="character__itemContainer">
              <img
                src={TestImage}
                alt="Person from the cartoon"
                width="308px"
                className="character__image"
              />
              <div className="character__itemSubContainer">
                <h2 className="character__name">Rick Sanchez</h2>
                <p className="character__specie">Human</p>
              </div>
            </div>
          </NavLink>
        </li>
        <li className="character__item">
          <NavLink to="details">
            <div className="character__itemContainer">
              <img
                src={TestImage}
                alt="Person from the cartoon"
                width="308px"
                className="character__image"
              />
              <div className="character__itemSubContainer">
                <h2 className="character__name">Rick Sanchez</h2>
                <p className="character__specie">Human</p>
              </div>
            </div>
          </NavLink>
        </li>
        <li className="character__item">
          <NavLink to="details">
            <div className="character__itemContainer">
              <img
                src={TestImage}
                alt="Person from the cartoon"
                width="308px"
                className="character__image"
              />
              <div className="character__itemSubContainer">
                <h2 className="character__name">Rick Sanchez</h2>
                <p className="character__specie">Human</p>
              </div>
            </div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default HomeList;
