import React from 'react';
import { connect } from 'react-redux';
import Square from './Square';
import R from 'ramda';
import { setValue, gridCreated } from '../actions';

class Grid extends React.Component {
  constructor(props) {
    super(props);
  };

   onSquareClick = (id, value) => {
    this.props.setValue(id, value);
  };

  
  render() {
    console.log('RENDER GRID');

    const data = R.map((square) => (
      <Square key={square.id} id={square.id} value={square.value} onSquareClick={this.onSquareClick} />
    ), this.props.grid);

    console.log(data);
    return (
      <div className='grid'>
       {data}
      </div>
    )
  }
};
  

Grid.propTypes = {
  setValue: React.PropTypes.func.isRequired,
  dispatch: React.PropTypes.func.isRequired,
  grid: React.PropTypes.array.isRequired,
};

export default connect(state => ({ grid: state.grid }), { setValue })(Grid);
