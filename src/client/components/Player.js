import React from 'react';

const Player = ({ id }) => {
  
  return (
    <div className='player'><h3>Player { id }</h3></div>
  )
};

Player.PropTypes = {
  id: React.PropTypes.number.isRequired,
};

export default Player;
