import React from 'react';
import Event from '../components/Event';

class EventsContainer extends React.Component {
	renderData = () => {
		return this.props.events.map(eventObj => {

			return <Event key={eventObj.id} eventObj={eventObj} />
		})
		    
	}

	render() {
		// console.log(this.props)
		return(
			<ul className="collapsible">
				{this.renderData()}
			</ul>
		)
	}
}

export default EventsContainer;