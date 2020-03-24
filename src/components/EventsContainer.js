import React from 'react';
import Event from '../components/Event';

class EventsContainer extends React.Component {
	renderData = () => {
		return this.props.events.map(eventObj => {

			return <Event eventObj={eventObj} />
		})
		    
	}

	render() {
		// console.log(this.props)
		return(
		<div>{this.renderData()}</div>
		)
	}
}

export default EventsContainer;