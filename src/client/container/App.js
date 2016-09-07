import React from 'react';
import { connect } from 'react-redux';
import Title from '../components/Title';
import Grid from '../components/Grid';
import Player from '../components/Player';
import { changeValue, gridCreated } from '../actions';

class App extends React.Component {
 
  render() {
    console.log('RENDER APP');
    return(
      <div className='app'>
        <Title title='Tic Tac Toe' />
        <Grid />
        <Player id='1' />
        <Player id='2' />
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

