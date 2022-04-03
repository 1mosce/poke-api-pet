import axios from "axios";
import { useEffect, useState } from "react";
import { getModal } from "./../actions";
import { useDispatch } from "react-redux";
import "./singlePokemon.scss";

export const SinglePokemon = ({ url }) => {
  const dispatch = useDispatch();
  const [pokemonName, setPokemonName] = useState();
  const [pokemonAbillities, setPokemonAbillities] = useState([]);
  const [pokemonMoves, setPokemonMoves] = useState([]);
  const [pokemonStats, setPokemonStats] = useState([]);
  const [pokemonSprites, setPokemonSprites] = useState();

  useEffect(() => {
    axios.get(url).then((res) => {
      setPokemonName(res.data.name);
      setPokemonAbillities(res.data.abilities);
      setPokemonMoves(res.data.moves);
      setPokemonStats(res.data.stats);
      setPokemonSprites(res.data.sprites.front_default);
    });
  }, []);

  return (
    <div className="pokemon_modal">
      <div className="pokemon_title">
        <h1>{pokemonName}</h1>
        <img src={pokemonSprites} />
        <button
          onClick={() => {
            let isOpen = false;
            dispatch(getModal(isOpen));
          }}
        >
          Close this
        </button>
      </div>
      <div className="pokemon_info">
        <div className="pokemon_info_abilities">
          <h3>His abilities</h3>
          {pokemonAbillities.map((abilities, index) => (
            <p key={index}>{abilities.ability.name}</p>
          ))}
        </div>
        <div className="pokemon_info_moves">
          <h3>His Moves</h3>
          {pokemonMoves.map((move, index) => (
            <p key={index}>{move.move.name}</p>
          ))}
        </div>
        <div className="pokemon_info_stats">
          <h3>His Moves</h3>
          {pokemonStats.map((stat, index) => (
            <div key={index} className="stats">
              <p>{stat.base_stat}</p>
              <p>{stat.effort}</p>
              <p>{stat.stat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
