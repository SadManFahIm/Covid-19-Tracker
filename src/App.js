import React from 'react';
import './App.css';
import "leaflet/dist/leaflet.css"
import CoronaVirus from './components/Covid-19/CoronaVirus'

function App() {
  return (
    <div className="app">
      <CoronaVirus/>
    </div>
  );
}

export default App;
