import React, { useEffect, useState } from "react";
import "./App.scss";
import { fetchByQuery, fetchPokemons, getModal } from "./actions";
import { useSelector, useDispatch, connect } from "react-redux";
import { SinglePokemon } from "./components/singlePokemon";

export function App({ userData, fetchPokemons }) {
  const dispatch = useDispatch();

  const [pokemonUrl, setPokemonUrl] = useState();
  const [searchValue, setSearchValue] = useState();
  const [searchBufferValue, setSearchBufferValue] = useState();

  const pokemons = userData.pokemons;
  const loading = userData.loading;
  const pokemonQuery = userData.pokemonQueryRequest;
  const error = userData.error;
  let isOpen = userData.isOpen;

  useEffect(() => {
    fetchPokemons();
  }, []);

  useEffect(() => {
    if (!searchValue) {
      return;
    }
    dispatch(fetchByQuery(searchValue));
  }, [searchValue]);

  return (
    <div className="container">
      <h1>Welcome to Pokemon Api WebSite!</h1>
      {isOpen && <SinglePokemon url={pokemonUrl} loading={loading} />}
      {loading && <h2>Loading...</h2>}
      {error && !loading && <h2>{error}</h2>}
      <h3>Choose Your Pokemon!</h3>
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => {
            setSearchBufferValue(e.target.value);
          }}
        />
        <button
          type="submit"
          id="submit"
          onClick={() => {
            setSearchValue(searchBufferValue);
          }}
        >
          Submit
        </button>
        <button
          type="submit"
          onClick={() => {
            setSearchValue("");
          }}
        >
          Clear
        </button>
      </div>
      <div className="pokemon_wrapper">
        {!searchValue &&
          pokemons &&
          pokemons.map((pokemon, i) => (
            <div className="pokemon" key={i}>
              <h3>{pokemon.name}</h3>
              <button
                className="learn-more"
                onClick={() => {
                  let isOpen = true;
                  setPokemonUrl(pokemon.url);
                  dispatch(getModal(isOpen));
                  window.scrollTo(0, 0);
                }}
              >
                Learn More
              </button>
            </div>
          ))}

        {pokemonQuery && searchValue && (
          <div className="pokemon">
            <h3>{pokemonQuery.name}</h3>
            <button
              type="submit"
              onClick={() => {
                let isOpen = true;
                setPokemonUrl(
                  `https://pokeapi.co/api/v2/pokemon/${pokemonQuery.name}`
                );
                dispatch(getModal(isOpen));
                window.scrollTo(0, 0);
              }}
            >
              Learn More
            </button>
          </div>
        )}
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
