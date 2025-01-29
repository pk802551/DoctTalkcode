import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "../src/assets/css/hero.css"
import '../src/assets/css/mentor.css'
import '../src/assets/css/course.css'
import '../src/assets/css/header.css'
import '../src/assets/css/banner.css'
import '../src/assets/css/footer.css'
import "../src/assets/css/homepage.css"
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
