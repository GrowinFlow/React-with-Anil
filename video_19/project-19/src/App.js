import React from 'react'
import './App.css';
import NotRecommended from './NotRecommended';
import {Profile, Profile2} from './Profile';

function App() {

  return (
    <div className="App">
      <h1> Conditional redering | if condation</h1>
      <hr />
      <hr />
      <NotRecommended />
      <hr />
      <hr />
      <Profile />
      <hr />
      <hr />
      <Profile2 />

    </div>
  );
}
export default App;
