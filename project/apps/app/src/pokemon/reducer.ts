import type { PokemonState, PokemonAction } from "./types";

function pokemonReducer(
  state: PokemonState,
  action: PokemonAction
): PokemonState {
  switch (action.type) {
    case "success":
      return {
        loading: false,
        error: "",
        data: Array.isArray(action.payload) ? action.payload : [],
      };
    case "error":
      return {
        loading: false,
        error:
          typeof action.payload === "string"
            ? action.payload
            : "Something went wrong, please try again.",
        data: [],
      };
    case "loading":
      return {
        loading: true,
        error: "",
        data: [],
      };
    default:
      return state;
  }
}

export default pokemonReducer;
