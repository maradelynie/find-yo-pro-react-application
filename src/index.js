import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as collor from "./theme.js";


import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Asap', sans-serif;
    color:${collor.text};
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Baloo 2', cursive;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
