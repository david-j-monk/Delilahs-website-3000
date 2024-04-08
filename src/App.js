import logo from './imajea/dee_load_screen.png';
import spinning_pizza from './imajea/PIZZA.png'
import bunny from './imajea/bunnypic.jpg'
import splat from './imajea/splat.png'

import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [actualAnswer, setActualAnswer] = useState(0);
  const [typedAnswer, setTypedAnswer] = useState("");
  const [correct, setCorrect] = useState(false);
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    setFirstNumber(Math.floor(Math.random() * (12 - 0 + 1)));
    setSecondNumber(Math.floor(Math.random() * (12 - 0 + 1)));
  }, []);

  useEffect(() => {
    setActualAnswer(firstNumber * secondNumber);
  }, [firstNumber, secondNumber]);

  const checkAnswer = () => {
    setCorrect(parseInt(typedAnswer) === actualAnswer);
    setClicked(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          {firstNumber} x {secondNumber} ={" "}
          <input
            className="answerfield"
            type="text"
            value={typedAnswer}
            onChange={(e) => setTypedAnswer(e.target.value)}
          />
          {clicked && <span style={{ marginLeft: "10px" }}>{correct ? "✔" : "❌"}</span>}
          <br />
          <input type="button" value="Check Answer" onClick={checkAnswer} />
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>PIZZA GIRL!!!</p>
        <img src={spinning_pizza} className="peza" alt="pizza" />
        <hr width="50%" />
        <p>My fave animal 😁</p>
        <a href="https://www.google.com/search?q=bunny&tbm=isch">
          <div className="bunnydiv">
            <img src={bunny} className="bunnypic" alt="bunny" />
            <p>⬆ click me ⬆</p>
          </div>
        </a>
        <br /><br />
        <hr width="50%" />
        <p>My fave colour 😜</p>
        <a href='https://fiberglasswarehouse.com/cdn/shop/files/ForestGreen1610_grande.jpg'>
          <img src={splat} className="splat" alt="splat" />
          <p>⬆ click me ⬆</p>
        </a>
        <hr width="50%" />
      </header>
    </div>
  );
}

export default App;
