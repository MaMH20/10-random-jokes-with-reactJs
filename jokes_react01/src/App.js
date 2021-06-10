import React, { useState } from 'react';
import JokeList from './JokeList';
import './App.css';


function App() {
 const[data, setDate] = useState([])


  return (
    
      <div className="App">
       <JokeList />
       </div>
  
  );
}

export default App;
