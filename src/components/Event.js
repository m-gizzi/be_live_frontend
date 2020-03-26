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
				return "• " + user.name + " "
		})
	}

	render() {
		// console.log('----', this.props.eventObj.attributes.host_id)
		// const { host_id } = this.props.eventObj.attributes
		const { host } = this.props.eventObj.attributes
		// const { users } = this.props.eventObj.attributes
		// console.log('hopefully user name:', host.name)
		// const privateStatus = <i class="material-icons">contact_mail</i>
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
							<div class="row">
								<span class="flow-text">{this.props.eventObj.attributes.title}</span>
							</div>
							<div class="row" id={this.props.eventObj.id}>
								<span>click for description</span>
							</div>
						</div>
						<div class="col s1">
							<div class="row">
								<span class="flow-text">host: {host.name}</span>
							</div>
							<div class="row">
								{this.props.eventObj.attributes.private 
								? <i class="material-icons">contact_mail</i>
								: <i class="material-icons">public</i>
								}
							</div>
						</div>	
						<div class="col s1">
							<div class="row">
								<span class="flow-text">RSVPs: {this.renderRsvpUsers()}</span>
							</div>
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