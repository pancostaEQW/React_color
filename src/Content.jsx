import React, { useState } from "react";
import "./App.css";
import Band from "./Band";
import Modal from "./Modal";


function Content() {
  const [modalActive, setModalActive] = useState(false);
  const [bands, setBands] = useState([
    [],[],[],[],[],[],[],[],[],[],[],[],[],[],
    [],[],[],[],[],[],[],[],[],[],[],[],[],[],
    [],[],[],[],[],[],[],[],[],[],[],[],[],[]
  ])
  

  console.log(bands)

  return (
    
    <div>
      <main>
        <button className="btn" onClick={() => setModalActive(true)}>
          Start color
        </button>
       {bands.map((band, index) => (<Band key={index}/>))}
      </main>
      <Modal active={modalActive} setActive={setModalActive}></Modal>
    </div>
    
  );
}

export default Content;