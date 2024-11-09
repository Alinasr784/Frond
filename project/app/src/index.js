import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './js/header'
import Carousel from './js/carousel'
import "./css/home.css"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='home'>
      <Header/>
      <Carousel/>
    </div>
  </React.StrictMode>
);