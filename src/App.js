import React, { useState, useEffect } from "react";
import "./App.css";

const API_URL = `https://api.chucknorris.io/jokes/random`

function App() {

  const [joke, setJoke] = useState('')

  const generateJoke = () =>{
    fetch(API_URL)
    .then(res => res.json())
    .then(data => setJoke(data.value))
  }

  useEffect(() => {
  generateJoke()
  }, [])
  

  return <div className="box">
    <h2>CHUCK NORRIS JOKES GENERATOR</h2>
    <p dangerouslySetInnerHTML={{__html:joke}}/>
    <button onClick={generateJoke}>Get New Joke</button>

  </div>;

}

export default App;
