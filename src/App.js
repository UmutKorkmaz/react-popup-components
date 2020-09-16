import React from 'react';
import './App.css';
import Popup from "./components/reactjs-popup";

function App() {
  return (
    <div className="App">
      <Popup icon="ri-account-circle-line" link="Informative Popup" title="Setting Changed" content="Account change made successfully" button="OK" buttonStyle="bg-blue-700 text-white"/>
    </div>
  );
}

export default App;
