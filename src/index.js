import "./index.css";

// Redux
import { Provider } from "react-redux";
import { configureStore } from "./app/store/configureStore";

import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";
import App from "./app/layout/App";

const store = configureStore();
const rootEle = document.getElementById("root");

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEle
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
