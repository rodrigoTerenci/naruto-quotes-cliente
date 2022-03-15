import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { GlobalStyle } from './components/';
import App from './pages/app/App';
import reportWebVitals from './reportWebVitals';
//import QRCode from "react-qr-code"; <QRCode value="https://3000-rodrigoterenci-narutoquo-0mtns68rywh.ws-us31.gitpod.io" />



ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
