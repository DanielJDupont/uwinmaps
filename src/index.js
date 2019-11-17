// Redux
import { Provider } from "react-redux";

import React from "react";
import ReactDOM from "react-dom";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import "./index.css";
import ReduxToastr from "react-redux-toastr";
import * as serviceWorker from "./serviceWorker";
import App from "./app/layout/App";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./app/common/util/ScrollToTop";
import { configureStore } from "./app/store/configureStore";

const store = configureStore();

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

serviceWorker.unregister();
