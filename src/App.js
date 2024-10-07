import "./App.css";
import React, { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const inputhandle = (event) => {
    setInput(event.target.value);
  };

  const resulthandle = () => {
    setResult(evaluate(input));
    setInput("");
  };
  return (
    <div>
      <center>
        <div>
          <h1 className="heading">- - - - CALCULATOR - - - -</h1>
        </div>
        <div>
          <input
            type="text"
            className="inputbox"
            value={input}
            onChange={inputhandle}
          />
        </div>
        <div>
          <button className="result" onClick={resulthandle}>
            RESULT
          </button>
        </div>
        <div>
          <h2>
            RESULT = <span className="resultcolor">{result}</span>
          </h2>
        </div>
        <div>
          <div>
            <button onClick={() => setInput(input + "1")}>1</button>
            <button onClick={() => setInput(input + "2")}>2</button>
            <button onClick={() => setInput(input + "3")}>3</button>
            <button onClick={() => setInput(input + "4")}>4</button>
            <button onClick={() => setInput(input + "5")}>5</button>
          </div>
          <div>
            <button onClick={() => setInput(input + "6")}>6</button>
            <button onClick={() => setInput(input + "7")}>7</button>
            <button onClick={() => setInput(input + "8")}>8</button>
            <button onClick={() => setInput(input + "9")}>9</button>
            <button onClick={() => setInput(input + "0")}>0</button>
          </div>
          <div>
            <button onClick={() => setInput(input + "+")}>+</button>
            <button onClick={() => setInput(input + "-")}>-</button>
            <button onClick={() => setInput(input + "*")}>*</button>
            <button onClick={() => setInput(input + "/")}>/</button>
            <button onClick={() => setInput("")}>CLR</button>
          </div>
        </div>
      </center>
    </div>
  );
}

export default App;
