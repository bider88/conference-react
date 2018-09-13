import React, { Component } from 'react';
import './App.css';
import Header from './common/Header/Header';
import ProgramIndex from './Program/ProgramIndex'

class App extends Component {
  render() {

    const title = 'Title dinamyc';

    return (
      <div className="App">
        <Header title={ title }/>
        <ProgramIndex></ProgramIndex>
      </div>
    );
  }
}

export default App;
