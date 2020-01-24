import React, { useState } from 'react';
import DataLoader from './DataLoader';

function Selector() {
  const [count, setCount] = useState(1);

  const handlePlus = () => {
    return setCount(count + 1);
  };

  const handleMinus = () => {
    return setCount(count - 1);
  };

  const handleInput = e => {
    const number = Number(e.target.value);
    return setCount(number);
  };

  return (
    <div>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
      <input type="number" value={count} onChange={e => handleInput(e)} />
      <DataLoader pokeId={count} />
    </div>
  );
}

export default Selector;
