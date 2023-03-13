import { createSlice } from "@reduxjs/toolkit";

import { fetchAllCharacters, fetchCharacterById } from "./characterOperations";

const initialState = {
  characters: {
    info: {},
    items: [],
    isLoading: false,
    error: null,
  },
  character: {
    item: {},
    isLoading: false,
    error: null,
  },
  filter: '',
};

const handlePending = (state) => {
  state.characters.error = null;
  state.characters.isLoading = true;
};

const handleRejected = (state, action) => {
  state.characters.isLoading = false;
  state.characters.error = action.payload;
};

const handlePendingSingle = (state) => {
  state.character.isLoading = true;
  state.character.error = null;
};

const handleRejectedSingle = (state, action) => {
  state.character.isLoading = false;
  state.character.error = action.payload;
};

const sliceCharacters = createSlice({
  name: "characters",
  initialState,
  reducers: {
    filterCharacters(state, { payload }) {
      return { ...state, filter: payload };
    },
  },
  extraReducers: {
    [fetchAllCharacters.pending]: handlePending,
    [fetchAllCharacters.fulfilled](state, action) {
      console.log("Action payload at fetchAllCharacters:", action.payload);
      state.characters.isLoading = false;
      state.characters.error = null;
      state.characters.info = action.payload.info;
      state.characters.items = action.payload.results;
    },
    [fetchAllCharacters.rejected]: handleRejected,
    [fetchCharacterById.pending]: handlePendingSingle,
    [fetchCharacterById.fulfilled](state, action) {
      state.character.isLoading = false;
      state.character.error = null;
      state.character.item = action.payload;
    },
    [fetchCharacterById.rejected]: handleRejectedSingle,
  },
});

export const charactersReducer = sliceCharacters.reducer;
export const { filterCharacters } = sliceCharacters.actions;