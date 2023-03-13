import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterCharacters } from "../redux/characters/characterSlice";
import { selectCharactersFilter } from "../redux/characters/characterSelectors";
import { useDebounce } from "../utils/useDebounce";

function SearchBar() {
  const dispatch = useDispatch();

  const filter = useSelector(selectCharactersFilter);

  const [searchValue, setSearchValue] = useState(filter);

  const searchByWord = (event) => {
    // console.log("Value:", event.target.value);
    setSearchValue(event.target.value);
  };

  const searchQuery = useDebounce(searchValue, 300);

  useEffect(() => {
    if (searchQuery || searchValue.length === 0)
      dispatch(filterCharacters(searchValue));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  // const searchByWord = (event) => {
  //   setSearchValue(event.target.value);

  //   setTimeout(() => {
  //     dispatch(filterCharacters(searchValue));
  //   }, 500);
  //   // console.log("Word for search:", searchValue);
  // };

  return (
    <div className="filter__container">
      <div className="filter__subContainer">
        <div className="filter__iconContainer"></div>
        <input
          id="search"
          type="text"
          name="filterCharacter"
          placeholder="Filter by name..."
          className="filter__input"
          value={searchValue}
          // onChange={(event) =>
          //   debounce(() => dispatch(filterCharacters(event.target.value)), 300)
          // }
          onChange={searchByWord}
        />
      </div>
    </div>
  );
}

export default SearchBar;
