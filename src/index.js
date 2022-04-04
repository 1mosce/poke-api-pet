import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const store = compose(applyMiddleware(thunk))(createStore)(reducers);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
