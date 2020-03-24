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
    <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo center">Upcoming Events</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="#">BE_LIVE</a></li>
      </ul>
    </div>
  </nav>
  );
}
}

export default App;
