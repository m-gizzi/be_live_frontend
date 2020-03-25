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
			<ul class="collapsible">
				{this.renderData()}
			</ul>
		)
	}
}

export default EventsContainer;