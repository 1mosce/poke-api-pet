const initialState = {
  pokemons: [],
  pokemonQueryRequest: {},
  loading: false,
  error: null,
  isOpen: false,
};

const pokemons = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MODAL":
      return { ...state, isOpen: action.payload };
    case "GET_POKEMON_QUERY_SUCCES":
      return {
        ...state,
        loading: false,
        error: null,
        pokemonQueryRequest: action.payload,
      };
    case "GET_USERS_REQUEST":
      return { ...state, loading: true };
    case "GET_USERS_SUCCESS":
      return { loading: false, error: null, pokemons: action.payload };
    case "GET_USERS_FAILURE":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default pokemons;
