import React from 'react';
import SearchBar from './components/SearchBar'
import EventsContainer from './components/EventsContainer'
import NewEventForm from './components/NewEventForm'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      events: [],
      searchTerm: '',
      filterObj: {
        publicOnly: false,
        currentlyOngoing: false,
        userRSVPd: false,
        norwegian: false
      }
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/events')
      .then(resp => resp.json())
      .then(eventsData => {       
        this.setState({
          events: eventsData.data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  addNewEventToState = (eventsData) => {      
    this.setState({
      events: eventsData.data,
    })
  }

  handleSearchTermChange = (event) => {
    this.setState({
        searchTerm: event.target.value
    })
}

  handleFilterChange = (event) => {
    event.persist()
    this.setState(prevState => ({
      filterObj: {
        ...this.state.filterObj,
        [event.target.name]: !(prevState.filterObj[event.target.name])
      }
    }))
  }

  searchAndFilterResults = () => {
    let searchResults
    if (this.state.searchTerm === '') {
      searchResults = this.state.events
    } else {
        searchResults = this.state.events.filter(event => {
          const descriptionCheck = event.attributes.description.toLowerCase().includes(this.state.searchTerm.toLowerCase())
          const titleCheck = event.attributes.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
          const tagCheck = event.attributes.tags.find(tag => {
            return tag.tag_name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
          })
          return tagCheck || descriptionCheck || titleCheck
      })
    }

    let publicOnlyResults
    if (this.state.filterObj.publicOnly) {
      publicOnlyResults = searchResults.filter(event => {
        return !event.attributes.private
      })
    } else {
      publicOnlyResults = searchResults
    }

    let ongoingResults
    if (this.state.filterObj.currentlyOngoing) {
      ongoingResults = publicOnlyResults.filter(event => {
        return event.attributes.ongoing
      })
    } else {
      ongoingResults = publicOnlyResults
    }

    return ongoingResults
  }

render() {
  // console.log(this.state)
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
      <SearchBar
        handleSearchTermChange={this.handleSearchTermChange}
        searchTerm={this.state.searchTerm}
        handleFilterChange={this.handleFilterChange}
      />
      <EventsContainer events={this.searchAndFilterResults()} />
      <NewEventForm addNewEventToState={this.addNewEventToState} />
    </div>
  );
}
}

export default App;
