import React from 'react';
import SearchBar from './components/SearchBar'
import EventsContainer from './components/EventsContainer'
import NewEventForm from './components/NewEventForm'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      events: [],
      users: [],
      tags: [],
      searchTerm: ''
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/events')
      .then(resp => resp.json())
      .then(eventsData => {
        const users = eventsData.included.filter(entry => 
          entry.type === 'user')
        const tags = eventsData.included.filter(entry => 
          entry.type === 'tag')          
        this.setState({
          events: eventsData.data,
          users: users,
          tags: tags
        })
      })
  }

  addNewEventToState = (eventsData) => {
    const users = eventsData.included.filter(entry => 
      entry.type === 'user')
    const tags = eventsData.included.filter(entry => 
      entry.type === 'tag')          
    this.setState({
      events: eventsData.data,
      users: users,
      tags: tags
    })
  }

  handleSearchTermChange = (event) => {
    this.setState({
        searchTerm: event.target.value
    })
}

render() {
  console.log(this.state)
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
