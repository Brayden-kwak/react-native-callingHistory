import './css/body.css';
import './css/app.css';
import './css/header.css';
import './css/footer.css';

import App from './App.jsx';
import Footer from './Footer.jsx';

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App /> 
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
