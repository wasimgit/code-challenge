import { buildCreateSlice, asyncThunkCreator } from "@reduxjs/toolkit";
import type { PokemonState } from "./types";
import { fetchAllPokemons } from "./async";

const createAppSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const initialState: PokemonState = {
  loading: false,
  error: "",
  data: [],
};

export const pokemonSlice = createAppSlice({
  name: "pokemon",
  initialState,
  reducers: (create) => ({
    fetchPokemon: create.asyncThunk(fetchAllPokemons, {
      pending: (state) => {
        state.loading = true;
      },
      rejected: (state, action) => {
        state.error =
          (action.payload as string) ??
          "Something went wrong, please try again.";
      },
      fulfilled: (state, action) => {
        state.data = action.payload;
      },
      settled: (state) => {
        state.loading = false;
      },
    }),
  }),
  selectors: {
    selectPokemonState: (state) => state,
    selectPokemons: (state) => state.data,
  },
});

export const { fetchPokemon } = pokemonSlice.actions;
export const { selectPokemonState, selectPokemons } = pokemonSlice.selectors;

export default pokemonSlice.reducer;
