interface Pokemon {
    name: string;
  }
  
  interface PokemonState {
    loading: boolean;
    error: string;
    data: Pokemon[];
  }
  
  export type { Pokemon, PokemonState };
  