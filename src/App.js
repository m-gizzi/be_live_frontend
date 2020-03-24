import React from 'react';
import SearchBar from './components/SearchBar'
import EventsContainer from './components/EventsContainer'
import NewEventForm from './components/NewEventForm'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      events: [],
      searchTerm: ''
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/events')
      .then(resp => resp.json())
      .then(eventsData => {
        // console.log(eventsData)
        this.setState({
          events: eventsData.data
        })
      })
  }

  addNewEventToState = (response) => {
    this.setState({
      events: response
    })
  }

  handleSearchTermChange = (event) => {
    this.setState({
        searchTerm: event.target.value
    })
}

render() {
  // console.log(this.state.events.data)
  return (
    <div className="container">
      <nav>
<div className="nav-wrapper">
          <a href="#" className="brand-logo center">Upcoming Events</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="#">BE_LIVE</a></li>
         </ul>
        </div>
      </nav>
      <SearchBar handleSearchTermChange={this.handleSearchTermChange} searchTerm={this.state.searchTerm} />
      <EventsContainer events={this.state.events} />
      <NewEventForm addNewEventToState={this.addNewEventToState} />
    </div>
  );
}
}

export default App;
