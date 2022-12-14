import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/index.css';
import Home from './Home';
import App from './App';
import Inscription from './Inscription';
import Error from './Error';
import reportWebVitals from './reportWebVitals';
import {Routes, BrowserRouter, Route} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path='/' exact element={<App/>}/>
    <Route path='Inscription' element={<Inscription/>}/>
    <Route path='Home' element={<Home/>}/>
    <Route path='*' element={<Error/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
