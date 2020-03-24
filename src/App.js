import React from 'react';
import SearchBar from './components/SearchBar'


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
      .then(eventData => {
        this.setState({
          events: eventData
        })
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
      <SearchBar handleSearchTermChange={this.handleSearchTermChange} searchTerm={this.state.searchTerm} />
    </div>
  );
}
}

export default App;
