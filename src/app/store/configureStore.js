import { createStore } from "redux";
import rootReducer from "../reducers/rootReducer";
import { devToolsEnchancer } from "redux-devtools-extension";

export const configureStore = () => {
  const store = createStore(rootReducer);

  return store;
};
