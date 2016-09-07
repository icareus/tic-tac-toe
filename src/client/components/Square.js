import React from 'react';

const Square = ({ onSquareClick, square }) => {

  const handleClick = () => {
    onSquareClick(square.id, square.value);
  };

  return (
    <div className='square' onClick={ handleClick } >
      <p>{ square.value } </p>
    </div>
  )
} ;

Square.PropTypes = {
  id: React.PropTypes.number.isRequired,
  onSquareClick: React.PropTypes.func.isRequired,
};

export default Square;
