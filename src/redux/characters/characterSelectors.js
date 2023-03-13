import { createSelector } from "@reduxjs/toolkit";

export const selectCharacters = (state) => state.characters.characters.items;
export const selectCharactersLoading = (state) =>
  state.characters.characters.isLoading;
export const selectCharactersError = (state) =>
  state.characters.characters.error;
export const selectCharactersFilter = (state) => state.characters.filter;

export const selectVisibleCharacters = createSelector(
  [selectCharacters, selectCharactersFilter],
  (characters, charactersFilter) => {
    const normalizedFilter = charactersFilter.trim().toLowerCase();
    return charactersFilter
      ? characters.filter((character) =>
          character.name.toLowerCase().includes(normalizedFilter)
        )
      : characters;
  }
);
