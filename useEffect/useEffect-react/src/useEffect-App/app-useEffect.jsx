// useEffect() => React Hook that tells REACT To do some CODE WHEN (pick one) : 
//            1) The component re-renders
//            2) The component mounts
//            3) The value of a dependency variable changes

// Syntax : useEffect(function , [dependencies])

// useEffect(() => {}) ====== Runs only when component is re-rendered.
// useEffect(() => {}, []) ====== Runs only when component mounts (once).
// useEffect(() => {}, [dependency]) ===== Runs on mount + when value changes.


import React, {useState, useEffect}  from 'react';
import './App.css';

function App() {

let [count, setCount] = useState(0);
let [color, setColor] = useState("green");

function handleIncrement() {
  setCount(c => c + 1);
}

function handleDecrement() {
  setCount(c => c - 1);
}

function handleColorChange() {
  setColor(c => c === "green"? "red" : "green");
}

useEffect(() => {
  document.title = `Count: ${count} Color : ${color}`;
}, [count, color] );

return(
<>
  <p className='counter-content' style={{color: color}}>Count: {count}</p>
  <button className="increment" onClick={handleIncrement}>Add</button>
  <button className="decrement" onClick={handleDecrement}>Subtract</button>
  <button className="change-color" onClick={handleColorChange}>Change Color</button>
</>
)
}
