import api from "./api";
import type { Pokemon } from "./types";

export async function fetchAllPokemons(): Promise<Pokemon[]> {
  try {
    const response = await api({
      method: "get",
      url: "v2/pokemon?limit=151",
    });
    if (Array.isArray(response.data?.results)) {
      return response.data.results;
    }
    return [];
  } catch (error) {
    return Promise.reject(error);
  }
}
