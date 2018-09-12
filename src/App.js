import React, { Component } from 'react';
import './App.css';
import Header from './common/Header/Header';

class App extends Component {
  render() {

    const title = 'Title dinamyc';

    return (
      <div className="App">
        <Header title={ title }/>
      </div>
    );
  }
}

export default App;
