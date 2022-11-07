import React, { useState } from "react";
import "./Modal.css";

export default function Modal({ active, setActive }) {
  const [blue, setBlue] = useState(`rgb(${0}, ${0}, ${255})`);
  const [red, setRed] = useState(`rgb(${255}, ${0}, ${0})`);
  const [green, setGreen] = useState(`rgb(${0}, ${255}, ${0})`);
  const [yellow, setYellow] = useState(`rgb(${255}, ${255}, ${0})`);

  let colBlue = {
    background: `${blue}`,
  };
  let colRed = {
    background: `${red}`,
  };
  let colGreen = {
    background: `${green}`,
  };
  let colYellow = {
    background: `${yellow}`,
  };

  const b = () => {
    setBlue("red");
  };
  const r = () => {
    setRed("yellow");
  };
  const g = () => {
    setGreen("white");
  };
  const y = () => {
    setYellow("gray");
  };

  if (
    blue === "red" &&
    red === "yellow" &&
    green === "white" &&
    yellow === "gray"
  ) {
    setBlue(`rgb(${0}, ${0}, ${255})`);
    setRed(`rgb(${255}, ${0}, ${0})`);
    setGreen(`rgb(${0}, ${255}, ${0})`);
    setYellow(`rgb(${255}, ${255}, ${0})`);
  }

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="colorModal" onClick={b} style={colBlue}>
          BLUE
        </div>
        <div className="colorModal" onClick={r} style={colRed}>
          RED
        </div>
        <div className="colorModal" onClick={g} style={colGreen}>
          GREEN
        </div>
        <div className="colorModal" onClick={y} style={colYellow}>
          YELLOW
        </div>
        <a
          className="btnMus"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        ></a>
      </div>
    </div>
  );
}
