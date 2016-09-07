import React from 'react';
import { connect } from 'react-redux';
import Title from '../components/Title';
import Grid from '../components/Grid';
import { changeValue, gridCreated } from '../actions';

class App extends React.Component {
 
  onSquareClick = (value) => {
    console.log('onSquareClick', value);
    this.props.dispatch(changeValue(value));
  };

  render() {
    return(
      <div className='app'>
        <Title title='Tic Tac Toe' />
        <Grid /> 
      </div>
    )
  };
};

App.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  grid: React.PropTypes.array.isRequired,
  square: React.PropTypes.object.isRequired,
};

export default connect()(App);

