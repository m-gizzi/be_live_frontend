import React from 'react'

class Event extends React.Component {

	handleClick = () => {
		console.log('let us boogie')
	}
	render() {
		// console.log(this.props.event.attributes.title)
		return(
			<ul class="collapsible">
				<li>
					<div class="collapsible-header" onClick={(event) => this.handleClick(event.target)} >
						<i class="material-icons">filter_drama</i>
						{this.props.event.attributes.title}
					</div>
					<div class="collapsible-body">
						<span>{this.props.event.attributes.description}</span>
					</div>
				</li>
			</ul>
		)
	}
}

export default Event;