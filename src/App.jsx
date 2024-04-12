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
            className={switch1 === true ? "off" : "on"}
            onClick={() => {
              setSwitch1(true);
            }}
          >
            ON
          </button>

          <button
            className={switch2 === true ? "off" : "on"}
            onClick={() => {
              setSwitch2(true);
            }}
          >
            ON
          </button>
          <button
            className={switch3 === true ? "off" : "on"}
            onClick={() => {
              setSwitch3(true);
            }}
          >
            ON
          </button>
        </div>
        <div className="off-button">
          <button
            className={switch1 === false ? "off" : "on"}
            onClick={() => {
              setSwitch1(false);
            }}
          >
            OFF
          </button>
          <button
            className={switch2 === false ? "off" : "on"}
            onClick={() => {
              setSwitch2(false);
            }}
          >
            OFF
          </button>
          <button
            className={switch3 === false ? "off" : "on"}
            onClick={() => {
              setSwitch3(false);
            }}
          >
            OFF
          </button>
        </div>
        <button className="no-way">NO WAY!</button>
        <button className="go">GO!</button>
        <button
          className={switch1 && switch2 && switch3 === false ? "no-way" : "go"}
        />
      </div>
    </>
  );
}

export default App;
