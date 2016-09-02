import React from 'react';
import { connect } from 'react-redux';
import Title from '../components/Title';
import Grid from '../components/Grid';

export default class App extends React.Component {

  render() {
    return(
      <div className='app'>
        <Title title='Tic Tac Toe' />
        <Grid />
      </div>
    )
  };
};

connect()(App);

