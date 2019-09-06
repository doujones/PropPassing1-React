import React from 'react';
import logo from './logo.svg';
import './App.css';

function getTime() {
  return ( new Date()).toLocaleDateString();
}
  const App = () => {
    return (
    <div>
      <div>Current Time</div>
      <h3>{getTime()}</h3>
    </div>
    )
  }
export default App;
