import React from 'react';
import './App.css';
import Slider from './components/Slider/Slider'
import Roster from './components/Roster/Roster';
import DetailsImg from './components/DetailsImg/DetailsImg';

function App() {
  return (
    <div className="App">
      <Slider />
      <Roster />
    </div>
  );
}

export default App;
