import { createStore } from "redux";

let reducer = (state, action) => {
  if (action.type === "login-success") return { ...state, loginStatus: true };
  return state;
};

let store = createStore(
  reducer,
  { loginStatus: false },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
