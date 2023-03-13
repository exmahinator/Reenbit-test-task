import React, { useEffect, Suspense, lazy, useMemo } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
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
  const sortedInAlphabeticalOrder = useMemo(() => [...getVisibleCharacters].sort(
    (firstCharacter, secondCharacter) =>
      firstCharacter.name.localeCompare(secondCharacter.name)
  ), [getVisibleCharacters]);


  useEffect(() => {
    if (listLength === 0) {
      console.log("It works inside useEffect");
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
      {listLength === 0 && (
        <p className="character__error">
          Ooops... There is no character with that name... Maybe they have not
          been born yet... Please search for another one.
        </p>
      )}
      {listLength > 0 && !getError && (
        <div className="character__container">
          <h1 className="visually-hidden">List of heroes</h1>
          <ul className="character__list">
            {sortedInAlphabeticalOrder.map(({ id, name, species, image }, index) => {
              // const resultComponent = lazy(() => {
              //   return (
              //     <li className="character__item" key={id}>
              //       <NavLink to="details">
              //         <div className="character__itemContainer">
              //           <img
              //             loading="lazy"
              //             src={image}
              //             alt={name}
              //             width="308px"
              //             className="character__image lazyload "
              //           />
              //           <div className="character__itemSubContainer">
              //             <h2 className="character__name">{name}</h2>
              //             <p className="character__specie">{species}</p>
              //           </div>
              //         </div>
              //       </NavLink>
              //     </li>
              //   );
              // });
              // return resultComponent;
              return (
                <li className="character__item" key={id}>
                  <NavLink to="details">
                    <div className="character__itemContainer">
                      <img
                        // loading={index >= 10 ? "lazy" : undefined}
                        loading="lazy"
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
          </ul>
        </div>
      )}
    </>
  );
}

export default HomeList;
