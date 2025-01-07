import { useState, useEffect } from 'react';
import PokemonList from './components/ui/PokemonList';

export default function PokemonListContainer() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
      const data = await response.json();
      setPokemonList(data.results);
    };
    fetchPokemonList();
  }, []);

  return (
    <div>
      <PokemonList pokemonList={pokemonList} />
    </div>
  );
}
