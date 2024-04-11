import { useState } from "react";

import "./App.css";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <>
      <div className="buttons">
        <div className="on-button">
          <button
            className="on"
            onClick={() => {
              setSwitch1(true);
              switch1 === true ? background - color : blueviolet;
              color: white: null;
            }}
          >
            ON
          </button>

          <button
            className="on"
            onClick={() => {
              setSwitch2(true);
            }}
          >
            ON
          </button>
          <button
            className="on"
            onClick={() => {
              setSwitch3(true);
            }}
          >
            ON
          </button>
        </div>
        <div className="off-button">
          <button
            className="off"
            onClick={() => {
              setSwitch1(false);
            }}
          >
            OFF
          </button>
          <button
            className="off"
            onClick={() => {
              setSwitch2(false);
            }}
          >
            OFF
          </button>
          <button
            className="off"
            onClick={() => {
              setSwitch3(false);
            }}
          >
            OFF
          </button>
        </div>
        <button className="validation"> NO WAY!</button>
      </div>
    </>
  );
}

export default App;
