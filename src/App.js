import React, { Component } from 'react';
import './styles/global.css';
import './App.css';
import Header from './components/common/Header/Header';
import ProgramIndex from './components/Program/ProgramIndex'

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
