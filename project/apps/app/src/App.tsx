import { useState, useEffect } from "react";

export default function PokemonList() {
  // Defining constants that are used
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Using useEffect hook for fetching the data from the api.
  useEffect(() => {
    const fetchPokemons = async () => {
      // Using try catch blocks to set up the things and handle errors.
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=151"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch Pokemon data");
        }
        const data = await response.json();
        setPokemon(data.results); // update the state with pokemon list
        setLoading(false); // turn off loading
      } catch (error) {
        setError(error); // Handle error
        setLoading(false);
      }
    };
    fetchPokemons();
  }, []); // Empty dependency array to fetch only once

  // Loading UI while the in the first setup.
  if (loading) return <div>Loading...</div>;

  // Displaying error messages to define the errors
  // that helps to understand the flow.
  if (error) <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Pokémon List</h1>
      <ul>
        {pokemon.map((pokemon, index) => (
          <li key={index}>
            <span>{pokemon.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}