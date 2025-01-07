import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemonsSuccess, removePokemon } from './pokemonReducer';

function App() {
  const pokemons = useSelector((state) => state.pokemon.list);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const fetchPokemons = async () => {
      const data = await fetchPokemons();
      dispatch(fetchPokemonsSuccess(data));
    };
    fetchPokemons();
  }, []);

  return (
    <div>
      <h1>Pokémon List</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>
            {pokemon.name}
            <button onClick={() => dispatch(removePokemon(pokemon.name))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
