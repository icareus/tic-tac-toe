import React from 'react';

const Square = ({ id, onSquareClick, value }) => {

  const handleClick = () => {
    onSquareClick(id, value);
  };

  return (
    <div className='square' onClick={ handleClick } >
      <p>{ value } </p>
    </div>
  )
};

Square.PropTypes = {
  id: React.PropTypes.number.isRequired,
  onSquareClick: React.PropTypes.func.isRequired,
  value: React.PropTypes.string.isRequired,
};

export default Square;
