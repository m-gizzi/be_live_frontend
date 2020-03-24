import React from 'react';
import Event from '../components/Event';

class EventsContainer extends React.Component {
	renderData = () => {
		return this.props.events.map(eventObj => {
			return <Event event={eventObj} />
		})
	}

	render() {
		return(
			<div></div>
		)
	}
}

export default EventsContainer;