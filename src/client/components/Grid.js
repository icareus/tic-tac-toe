import React from 'react';
import { connect } from 'react-redux';
import Square from './Square';
import R from 'ramda';
import { changeValue, gridCreated } from '../actions';

class Grid extends React.Component {
  constructor(props) {
    super(props);
  };

 


  render() {
    console.log('grid', this.props.grid);
    return(
      <div className='grid'>
       
      </div>
    )
  };
};

Grid.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  grid: React.PropTypes.array.isRequired,
};

export default connect(state => ({ grid: state.grid }))(Grid);
