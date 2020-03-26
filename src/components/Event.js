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
		// console.log('----', this.props.eventObj.attributes.host_id)
		// const { host_id } = this.props.eventObj.attributes
		const { host } = this.props.eventObj.attributes
		// const { users } = this.props.eventObj.attributes
		// console.log('hopefully user name:', host.name)
		// const privateStatus = <i class="material-icons">contact_mail</i>
		const smallFont = {
			fontSize: "10px"
		}
		return(
				<li>
					<div class="collapsible-header" onClick={() => this.handleClick(host)}>
					
					<div class="row">
						<div style={{maxWidth:100}} class="col s1">
							<span>{this.props.eventObj.attributes.start_date}</span>
							<span>- {this.props.eventObj.attributes.end_date}</span>
						</div>
						<div class="col s1 offset-s2">
							<img style={{maxHeight:100}} class="circle responsive-img" src={this.props.eventObj.attributes.img_url} />
						</div>
						<div class="col s4">
							<span class="flow-text">{this.props.eventObj.attributes.title}</span><br />
							<span>click for description</span>
						</div>
						<div class="col s1">
							<span>host: {host.name}</span>
							<p>
							{this.props.eventObj.attributes.private 
							? <i class="material-icons">contact_mail</i>
							: <i class="material-icons">public</i>
							}
							</p>
						</div>	
						<div class="col s1 offset-s1">
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