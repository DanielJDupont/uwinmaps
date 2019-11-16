import "./index.css";

// Redux
import { Provider } from "react-redux";
import { configureStore } from "./app/store/configureStore";
import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./app/layout/App";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./app/common/util/ScrollToTop";

const store = configureStore();
const rootEle = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </Provider>,
  rootEle
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
