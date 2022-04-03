import React, { useEffect, useState } from "react";
import "./App.scss";
import { fetchPokemons, getModal } from "./actions";
import { useSelector, useDispatch, connect } from "react-redux";
import { SinglePokemon } from "./components/singlePokemon";

function App({ userData, fetchPokemons }) {
  const dispatch = useDispatch();

  const [pokemonUrl, setPokemonUrl] = useState();

  const pokemons = userData.pokemons;
  const loading = userData.loading;
  const error = userData.error;
  let isOpen = userData.isOpen;

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div className="container">
      <h1>Welcome to Pokemon Api WebSite!</h1>
      {isOpen && <SinglePokemon url={pokemonUrl} />}
      {loading && <h2>Loading...</h2>}
      {error && !loading && <h2>{error}</h2>}
      <h3>Choose Your Pokemon!</h3>
      <div className="pokemon_wrapper">
        {pokemons &&
          pokemons.map((pokemon, i) => (
            <div className="pokemon" key={i}>
              <h3>{pokemon.name}</h3>
              <button
                onClick={() => {
                  let isOpen = true;
                  setPokemonUrl(pokemon.url);
                  dispatch(getModal(isOpen));
                }}
              >
                Learn More
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.pokemons,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPokemons: () => dispatch(fetchPokemons()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
