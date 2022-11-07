import React, { useState } from "react";

export default function Band() {
  const [colorOne, isColorOne] = useState(50);
  const [colorTwo, isColorTwo] = useState(50);
  const [colorThree, isColorThree] = useState(50);

  const colS = {
    background: `rgb(${colorOne}, ${colorTwo}, ${colorThree})`,
  };

  const l = () => {
    isColorOne(
      colorOne + Math.random() * 55 > 254
        ? colorOne - Math.random() * 255
        : colorOne + Math.random() * 55
    );
    isColorTwo(
      colorTwo + Math.random() * 55 > 254
        ? colorTwo - Math.random() * 255
        : colorTwo + Math.random() * 55
    );
    isColorThree(
      colorThree + Math.random() * 55 > 254
        ? colorThree - Math.random() * 255
        : colorThree + Math.random() * 55
    );
  };

  const blackBand = () => {
    isColorOne((colorOne) => (colorOne = 0));
    isColorTwo((colorTwo) => (colorTwo = 0));
    isColorThree((colorThree) => (colorThree = 0));
  };

  const whiteBand = () => {
    isColorOne((colorOne) => (colorOne = 255));
    isColorTwo((colorTwo) => (colorTwo = 255));
    isColorThree((colorThree) => (colorThree = 255));
  };

  console.log(`${colorOne}, ${colorTwo}, ${colorThree}`)


  return (
    <div
      onMouseOver={l}
      onDoubleClick={whiteBand}
      onClick={blackBand}
      style={colS}
    ></div>
  );
}
