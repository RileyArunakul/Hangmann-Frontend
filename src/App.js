import "./App.css";
import React, { useState } from "react";

function App() {
  // const [guess, setGuess] = useState("loading...");

  const [newGuessInput, setNewGuessInput] = useState("");

  const setNewGuess = () => {
    fetch(`http://localhost:3001/checkGuess/${newGuessInput}`)
      .then((res) => {
        res.text().then((text) => {
          console.log(text);
        });
      })
      .catch((err) => {
        console.log("error!", err);
      });
  };

  return (
    <div>
      <header className="App-header">
        Testing React
        <p> Hangman Game</p>
        <label>Take a Guess</label>
        <input
          name="guess"
          type="text"
          value={newGuessInput}
          onChange={(e) => {
            setNewGuessInput(e.target.value);
          }}
        />
        <button
          className="btn"
          onClick={() => {
            setNewGuess();
          }}
        ></button>
      </header>
    </div>
  );
}

export default App;
