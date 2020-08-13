import React from 'react';
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import './assets/styles/global.css';
import Routes from './routes';
import {generateReducers} from "./reducers";

const store = createStore(
  generateReducers(),
  applyMiddleware(thunk)
);

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
