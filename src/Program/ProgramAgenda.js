import React from 'react';

// Stateful react component (class)
export default class ProgramAgenda extends React.Component {

  componentDidMount() {
    console.log('componentDidMount');

    const url = 'http://conference.webtraining.fun/api/talks';

    fetch( url )
    .then( response => response.json() )
    .then( result => {
      console.log(result);
    })
    .catch( err => console.log(err) );

  }

  render() {
    return <div>
      Agenda
    </div>
  }
}