import { useState } from "react";
import "./App.css";

function App() {
  const [dots, setDots] = useState([]);
  const [deletedDots, setDeletedDots] = useState([]);

  const click = (e) => {
    const newDot = {
      X: e.clientX,
      Y: e.clientY,
    };
    setDots((prev) => [...prev, newDot]);
    setDeletedDots([]);
    console.log(newDot);
  };

  const undo = () => {
    if (dots.length === 0) return;

    setDeletedDots((prev) => [...prev, dots.at(-1)]);

    setDots((prev) => {
      const newDots = [...prev];
      newDots.pop();
      return newDots;
    });
    console.log(dots);
  };

  const redo = () => {
    if (deletedDots.length === 0) return;
    setDots((prev) => [...prev, deletedDots.at(-1)]);

    setDeletedDots((prev) => {
      const newDots = [...prev];
      newDots.pop();
      return newDots;
    });
  };
  return (
    <main>
      <h1>Click in the area below</h1>
      <div className='btns'>
        <button id='undo-btn' onClick={undo}>
          Desfazer
        </button>
        <button id='redo-btn' onClick={redo}>
          Refazer
        </button>
      </div>
      <div id='click-area' onClick={click}>
        {dots.map((dot) => (
          <div
            key={dot.X}
            className='dot'
            style={{ top: dot.Y, left: dot.X }}
          ></div>
        ))}
      </div>
    </main>
  );
}

export default App;
