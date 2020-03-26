import React from 'react'
import M from 'materialize-css'

class Event extends React.Component {

	componentDidMount = () => {
		const elems = document.querySelectorAll('.collapsible');
		const instances = M.Collapsible.init(elems, {
			accordion: true
		  });
	}

	handleClick = (host) => {
		console.log(host.name)	
	}

	renderRsvpUsers = () => {
		return this.props.eventObj.attributes.users.map(user => {
				return user.name + " "
		})
	}

	render() {

		const { host } = this.props.eventObj.attributes
		const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }
		const eventStart = new Date(this.props.eventObj.attributes.start_date).toLocaleDateString('en-US', DATE_OPTIONS)
		const eventEnd = new Date(this.props.eventObj.attributes.end_date).toLocaleDateString('en-US', DATE_OPTIONS) 
		return(
				<li>
					<div class="collapsible-header" onClick={() => this.handleClick(host)}>
					
					<div class="row">
						<div style={{maxWidth:100}} class="col s2">
							<p><span>{eventStart}</span></p>
							<p><span>- {eventEnd}</span></p>
						</div>
						<div class="col s2">
							<p><img style={{maxHeight:130, maxWidth:130}} class="responsive-img" src={this.props.eventObj.attributes.img_url} /></p>
						</div>
						<div class="col s4">
							<span class="flow-text">{this.props.eventObj.attributes.title}</span>
							<p>click for description</p>
						</div>
						<div class="col s2">
							<p>host: {host.name}</p>
							<p>
							{this.props.eventObj.attributes.private 
							? <i class="material-icons">contact_mail</i>
							: <i class="material-icons">public</i>
							}
							</p>
						</div>	
						<div class="col s2">
							<span class="flow-text">RSVPs:</span>
							<p>{this.renderRsvpUsers()}</p>
						</div>
						</div>
						</div>
					<div class="collapsible-body">
						<span>{this.props.eventObj.attributes.description}</span>
					</div>
					
				</li>
		)
	}
}

export default Event;