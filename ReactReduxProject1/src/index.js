import React from 'react';
import ReactDOM from 'react-dom';

import keys from '../keys';
const API_KEY = keys().youtube_api;

import SearchBar from './components/search_bar';


const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}


ReactDOM.render(<App />, document.querySelector('.container'));
