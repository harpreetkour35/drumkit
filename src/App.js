import React, { useEffect } from "react";
import background from "./image.jpg";
import "./App.css";

import soundfile1 from "./audios/boom.wav";
import soundfile2 from "./audios/clap.wav";
import soundfile3 from "./audios/hihat.wav";
import soundfile4 from "./audios/kick.wav";
import soundfile5 from "./audios/openhat.wav";
import soundfile6 from "./audios/ride.wav";
import soundfile7 from "./audios/snare.wav";
import soundfile8 from "./audios/tink.wav";
import soundfile9 from "./audios/tom.wav";

function App() {

  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      let keyPressed = event.key.toUpperCase();
      playing(keyPressed);
      changeStyle(keyPressed);
    })
  }
  )


  function changeStyle(param) {
    
    if (param === 'A') {
      let pressedElement = document.getElementsByClassName('pressed');
      pressedElement[0].classList.remove('newclass', 'pressed')
      let element = document.getElementById(param) 
      element.classList.add("newclass", 'pressed');

    } else if (param === 'S') {
      let pressedElement = document.getElementsByClassName('pressed');
      pressedElement[0].classList.remove('newclass', 'pressed')
      let element = document.getElementById(param) 
      element.classList.add("newclass", 'pressed');

    } else if (param === 'D') {
      let pressedElement = document.getElementsByClassName('pressed');
      pressedElement[0].classList.remove('newclass', 'pressed')
      let element = document.getElementById(param) 
      element.classList.add("newclass", 'pressed');
    }
    else if (param === 'F') {
      let pressedElement = document.getElementsByClassName('pressed');
      pressedElement[0].classList.remove('newclass', 'pressed')
      let element = document.getElementById(param) 
      element.classList.add("newclass", 'pressed');
    }
    else if (param === 'G') {
      let pressedElement = document.getElementsByClassName('pressed');
      pressedElement[0].classList.remove('newclass', 'pressed')
      let element = document.getElementById(param) 
      element.classList.add("newclass", 'pressed');
    }
    else if (param === 'H') {
      let pressedElement = document.getElementsByClassName('pressed');
      pressedElement[0].classList.remove('newclass', 'pressed')
      let element = document.getElementById(param) 
      element.classList.add("newclass", 'pressed');
    }
    else if (param === 'J') {
      let pressedElement = document.getElementsByClassName('pressed');
      pressedElement[0].classList.remove('newclass', 'pressed')
      let element = document.getElementById(param) 
      element.classList.add("newclass", 'pressed');
    } 
  }
  
  function playing(alphabet) {
      switch (alphabet) {
        case "A":
          return(
            new Audio(soundfile1).play()
          )
        case "S":
          return new Audio(soundfile2).play() 
        case "D":
          return new Audio(soundfile3).play();
        case "F":
          return new Audio(soundfile4).play();
        case "G":
          return new Audio(soundfile5).play();
        case "H":
          return new Audio(soundfile6).play();
        case "J":
          return new Audio(soundfile7).play();
        case "K":
          return new Audio(soundfile8).play();
        case "L":
          return new Audio(soundfile9).play();
        default:
          return null;
      }
    }

  return (
    <div className="App">
      <img src={background} alt="back" />
      <div className="flex-container">
        <h1 style={{display: "none"}} id= 'Image' className="pressed">Drumkit</h1>
        <button id= 'A' className='key'>A</button>
        <button id= 'S' className='key'>S</button>
        <button id= 'D' className='key'>D</button>
        <button id= 'F' className='key'>F</button>
        <button id= 'G' className='key'>G</button>
        <button id= 'H' className='key'>H</button>
        <button id= 'J' className='key'>J</button>
      </div>
    </div>
  );
}

export default App;
