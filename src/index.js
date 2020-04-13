import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import RIOT_API_KEY from './config/rito.js';
import searchForProfile from './components/searchProfile.js';
import searchForChamps from './components/searchChamps.js';



ReactDOM.render(<App searchForProfile={searchForProfile} RIOT_API_KEY={RIOT_API_KEY}/>,document.getElementById('app'));

