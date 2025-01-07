import { useEffect } from "react";
import { List } from "ui";
import { useAppDispatch, useAppSelector } from "./hooks";
import { selectPokemonState, fetchPokemon } from "./pokemon/slice";

const App = () => {
  const dispatch = useAppDispatch();
  const { loading, error, data } = useAppSelector(selectPokemonState);

  useEffect(() => {
    dispatch(fetchPokemon());
  }, []);

  return (
    <>
      <h1>Pokemon list:</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <List data={data} />
      )}
    </>
  );
};

export default App;