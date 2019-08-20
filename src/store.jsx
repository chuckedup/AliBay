import { createStore } from "redux";

let reducer = (state, action) => {
  if (action.type === "login-success")
    return { ...state, loginStatus: true, username: action.username };
  if (action.type === "logout")
    return { ...state, loginStatus: false, username: "" };
  if (action.type === "search")
    return {
      ...state,
      search: {
        query: action.search.search,
        brand: action.search.brand,
        movement: action.search.movement,
        min: action.search.min,
        max: action.search.max,
        style: action.search.style
      }
    };
  if (action.type === "adv-search")
    return {
      ...state,
      search: {
        ...state.search,
        brand: action.search.brand,
        movement: action.search.movement,
        min: action.search.min,
        max: action.search.max,
        style: action.search.style
      }
    };
  return state;
};

let store = createStore(
  reducer,
  {
    loginStatus: false,
    username: "",
    search: {
      query: "",
      brand: "",
      movement: "",
      style: "",
      min: 0,
      max: 100000
    }
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
