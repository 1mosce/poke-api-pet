const initialState = {
  pokemons: [],
  loading: false,
  error: null,
  isOpen: false,
};

const pokemons = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MODAL":
      return { ...state, isOpen: action.payload };
    case "GET_USERS_REQUEST":
      return { ...state, loading: true };
    case "GET_USERS_SUCCESS":
      return { loading: false, pokemons: action.payload };
    case "GET_USERS_FAILURE":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default pokemons;
