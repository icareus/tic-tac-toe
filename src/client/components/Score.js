import React from 'react';
import { connect } from 'react-redux';
import { calculateScore } from '../actions';
import R from 'ramda';

class Score extends React.Component {
  constructor(props) {
    super(props);
  };

  onCalculateScore = (id) => {
    this.props.calculateScore(this.props.grid[id], 'horizontal');
  };

  render() {
    const score = R.forEach(this.onCalculateScore, this.props.grid);
    return (
      <div className='score'>
        <h3> { score } </h3>
      </div>
    )
  }
};

Score.PropTypes = {
  grid: React.PropTypes.array.isRequired,
};

export default connect(state => ({ grid: state.grid }), { calculateScore })(Score);
