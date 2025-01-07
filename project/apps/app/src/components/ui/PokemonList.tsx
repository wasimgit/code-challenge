import List from './List';

export default function PokemonList({ pokemonList }) {
  return (
    <List
      title="Pokémon List"
      items={pokemonList}
      renderItem={(item) => <List.Item key={item.name}>{item.name}</List.Item>}
    />
  );
}
