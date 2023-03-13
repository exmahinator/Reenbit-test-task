import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://rickandmortyapi.com/api";

export const fetchAllCharacters = createAsyncThunk(
  "contacts/fetchAllCharacters",
  async (_, thunkAPI) => {
    try {
      //   let resultObj = {};
      let totalArray = [];
      let technicalInfo = {};
      const res = await axios.get("/character");
      for (let i = 2; i < res.data.info.pages + 1; i++) {
        // let nextRequest = res.data.info.next;
        const innerRes = await axios.get(`https://rickandmortyapi.com/api/character?page=${i}`)
        totalArray = [...totalArray, ...innerRes.data.results]
        technicalInfo = innerRes.data.info;
        // console.log(`Data at ${i} request:`, innerRes.data.results);
        console.log("Total array of characters:", totalArray);
        console.log("Technical info:", technicalInfo);

        // console.log("Data on each step:", innerRes.data.results);
      }
      //   resultObj = {...resultObj, ...res.data}
      //   console.log("ResultOBJ:", resultObj);
      //   console.log("Result fetchAll:", res);
      //   console.log("Result fetchAll final data:", res.data);
      //   console.log("Technical info:", res.data.info);
      //   if (res.data.info.next !== null) {

      //   }
      //   const anotherRes = await axios.get("https://rickandmortyapi.com/api/character?page=2");
      //   resultObj = {...resultObj, anotherRes.data.result}

      //   console.log("ResultOBJ after 2 requests:", resultObj);

      return {results: totalArray, info: technicalInfo}
    //   return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCharacterById = createAsyncThunk(
  "contacts/fetchCharacterById",
  async (id, thunkAPI) => {
    try {
      const res = await axios.get(`/character/${id}`);
      console.log("Result get one character:", res);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
