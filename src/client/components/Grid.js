import React from 'react';
import Square from './Square';

const Grid = () => {
  const grid = [];
  for (let i = 0; i != 9; i = i + 1) {
    grid[i] = <Square key={i} />
  };
  return (
      <div className='grid'>
        { grid }
      </div>
    )
}

export default Grid;
