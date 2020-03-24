import React from 'react';
// import logo from './logo.svg';
// import './App.css';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      events: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/events')
      .then(resp => resp.json())
      .then(eventData => {
        this.setState({
          events: eventData
        })
      })
  }

render() {
  console.log(this.state.events)
  return (
    <div className="container">
        <ul className="collection">
        <a href="#!" className="collection-item"><div>Alvinn</div></a>
          <li className="collection-item">Alvin</li>
          <li className="collection-item">Alvin</li>
          <li className="collection-item">Alvin</li>
        </ul>
    </div>
  );
}
}

export default App;
