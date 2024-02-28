import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux"; // import createStore directly from 'redux'
import reducer from "./Component/Reducer.jsx";
import App from "./App.jsx";
import "./index.css";

// Create the Redux store
const store = legacy_createStore(reducer);

// Render the app
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <>
      <App />
    </>
  </Provider>
);
