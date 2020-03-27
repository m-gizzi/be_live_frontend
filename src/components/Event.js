import React from 'react'
import M from 'materialize-css'
import Tags from './Tags';

class Event extends React.Component {

	componentDidMount = () => {
		const elems = document.querySelectorAll('.collapsible');
		M.Collapsible.init(elems, {
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
		const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZone: 'UTC' }
		const eventStart = new Date(this.props.eventObj.attributes.start_date).toLocaleDateString('en-US', DATE_OPTIONS)
		const eventEnd = new Date(this.props.eventObj.attributes.end_date).toLocaleDateString('en-US', DATE_OPTIONS) 
		return(
				<li>
					<div className="collapsible-header" onClick={() => this.handleClick(host)}>
					
					<div className="row">
						<div style={{maxWidth:100}} className="col s3 offset-s1">
							<p><span>{eventStart}</span></p>
							<p><span>- {eventEnd}</span></p>
						</div>
						<div className="col s2">
							<p><img className="responsive-img" alt={this.props.eventObj.attributes.title} src={this.props.eventObj.attributes.img_url} /></p>
						</div>
						<div className="col s4">
							<h5>{this.props.eventObj.attributes.title}</h5>
							<a href={`http://${this.props.eventObj.attributes.url}`}>link</a>
						</div>
						<div className="col s1">
							<p>host: {host.name}</p>
							<p>
							{this.props.eventObj.attributes.private 
							? <i className="material-icons">contact_mail</i>
							: <i className="material-icons">public</i>
							}
							</p>
						</div>	
						<div className="col s2">
							<p>RSVPs:</p>
							<p>{this.renderRsvpUsers()}</p>
						</div>
						</div>
						</div>
					<div className="collapsible-body">
						<span>{this.props.eventObj.attributes.description}</span>
						<Tags eventKey={this.props.eventObj.id} tags={this.props.eventObj.attributes.tags} />
					</div>
				</li>
		)
	}
}

export default Event;