import React from "react";
import background from "./image.jpg";
import "./App.css";


window.addEventListener("keydown", (event) => {
  let keyPressed = event.key.toUpperCase();
  console.log(keyPressed);
});

function App() {
  return (
    <div className="App">
      <img src={background} alt="back" />
      <div className="flex-container">
        <button className="key">A</button>
        <button className="key">S</button>
        <button className="key">D</button>
        <button className="key">F</button>
        <button className="key">G</button>
        <button className="key">H</button>
        <button className="key">J</button>
      </div>
    </div>
  );
}



export default App;
