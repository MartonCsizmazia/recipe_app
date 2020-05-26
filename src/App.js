import React from 'react';
import logo from './logo.svg';
import './App.css';

const App= () =>{

    const APP_ID = "a43c5a10";
    const APP_KEY = 'a8619d932136bcf4ff9de55a3ea4a7a7';
//BACK TEXT ALTGR +7 `
    const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return (
    <div className="App">
      <form className="search-form">
          <input className="search-bar" type="text"/>
          <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  );
};

export default App;
