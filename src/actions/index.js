import axios from "axios";

export const getModal = (isOpen) => {
  return {
    type: "GET_MODAL",
    payload: isOpen,
  };
};

const getPokemonsRequest = () => {
  return {
    type: "GET_USERS_REQUEST",
  };
};

const getPokemonsSuccess = (users) => {
  return {
    type: "GET_USERS_SUCCESS",
    payload: users,
  };
};

const getPokemonsFailure = (error) => {
  return {
    type: "GET_USERS_FAILURE",
    payload: error,
  };
};

const url = "https://pokeapi.co/api/v2/pokemon?limit=1126";

export const fetchPokemons = () => {
  return (dispatch) => {
    dispatch(getPokemonsRequest());
    axios
      .get(url)
      .then((res) => {
        const users = res.data.results;
        dispatch(getPokemonsSuccess(users));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(getPokemonsFailure(errorMessage));
      });
  };
};
