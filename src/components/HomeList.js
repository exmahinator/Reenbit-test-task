import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import TestImage from "../img/testImg_Opt.jpg";
import { fetchAllCharacters } from "../redux/characters/characterOperations";
import {
  selectVisibleCharacters,
  selectCharactersLoading,
  selectCharactersError,
} from "../redux/characters/characterSelectors";
import { ThreeCircles } from "react-loader-spinner";

function HomeList() {
  const dispatch = useDispatch();

  const getVisibleCharacters = useSelector(selectVisibleCharacters);
  const getLoading = useSelector(selectCharactersLoading);
  const getError = useSelector(selectCharactersError);

  const listLength = getVisibleCharacters.length;
  const sortedInAlphabeticalOrder = [...getVisibleCharacters].sort(
    (firstCharacter, secondCharacter) =>
      firstCharacter.name.localeCompare(secondCharacter.name)
  );

  useEffect(() => {
    if (listLength === 0) {
      dispatch(fetchAllCharacters());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {getLoading && (
        <div className="character__loader">
          <ThreeCircles
            height="100"
            width="100"
            color="rgb(0,176,199)"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor=""
            innerCircleColor=""
            middleCircleColor=""
          />
        </div>
      )}
      {getError && (
        <p className="character__error">
          Ooops... There is no one here... Rick is searching for Morty... Come
          back later...
        </p>
      )}
      {listLength > 0 && !getError && (
        <div className="character__container">
          <h1 className="visually-hidden">List of heroes</h1>
          <ul className="character__list">
            {sortedInAlphabeticalOrder.map(({ id, name, species, image }) => {
              return (
                <li className="character__item" key={id}>
                  <NavLink to="details">
                    <div className="character__itemContainer">
                      <img
                        src={image}
                        alt={name}
                        width="308px"
                        className="character__image"
                      />
                      <div className="character__itemSubContainer">
                        <h2 className="character__name">{name}</h2>
                        <p className="character__specie">{species}</p>
                      </div>
                    </div>
                  </NavLink>
                </li>
              );
            })}
            {/* <li className="character__item">
              <NavLink to="details">
                <div className="character__itemContainer">
                  <img
                    src={TestImage}
                    alt="Person from the cartoon"
                    width="308px"
                    className="character__image"
                  />
                  <div className="character__itemSubContainer">
                    <h2 className="character__name">WOOOOOOOAH!</h2>
                    <p className="character__specie">Human</p>
                  </div>
                </div>
              </NavLink>
            </li> */}
          </ul>
        </div>
      )}
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
    </>
  );
}

export default HomeList;
