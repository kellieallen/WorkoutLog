import React from 'react';
import Navbar from './Components/Navbar/navbar';
import Auth from './Components/Auth/Auth';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Pies</h1>
      <Auth />
    </div>
  );
}

export default App; // the default export of this  function is the one above
