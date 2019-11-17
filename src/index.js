// Redux
import { Provider } from "react-redux";
import { configureStore } from "./app/store/configureStore";
import React from "react";
import ReactDOM from "react-dom";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import "./index.css";

import ReduxToastr from "react-redux-toastr";

import * as serviceWorker from "./serviceWorker";
import App from "./app/layout/App";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./app/common/util/ScrollToTop";
import { loadEvents } from "./features/event/EventActions";

const store = configureStore();
store.dispatch(loadEvents());

const rootEle = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
        <ReduxToastr
          position="bottom-right"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
        />
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
