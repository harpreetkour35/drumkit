import React, { useState, useEffect } from "react";
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

  const [ activeKey, setActiveKey] = useState()

  const soundKeyMap = {
    A: soundfile1, 
    S: soundfile2,
    D: soundfile3,
    F: soundfile4,
    G: soundfile5,
    H: soundfile6,
    J: soundfile7,
    K: soundfile8,
    P: soundfile9
  };

  const handleKeyDown = (e) => {
    let keyPressed = e.key.toUpperCase();
    playing(keyPressed);
    changeStyle(keyPressed);
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    }
  }, []);

  useEffect(() => {
    console.log('DEF');
  }, [activeKey]);


  function changeStyle(param) {
    setActiveKey(param)
  }
  
  function playing(alphabet) {
    return new Audio(soundKeyMap[alphabet]).play() 
  }

  return (
    <div className="App">
      <img src={background} alt="back" />
      <div className="flex-container">
        {
          Object.keys(soundKeyMap).map((soundKey) => <button key={soundKey} className={`key ${activeKey === soundKey ? 'newclass': ''}`}>{soundKey}</button>)
        }
                
      </div>
    </div>
  );
}

export default App;
