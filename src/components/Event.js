import React from 'react'

class Event extends React.Component {

	handleClick = (event) => {
		const{ id } = event.target;
		console.log(id)
	}
	render() {
		// console.log(this.props.eventObj.attributes.title)
		return(
			<ul class="collapsible">
				<li>
					<div class="collapsible-header" onClick={(event) => this.handleClick(event)} >
						<i class="material-icons">filter_drama</i>
						<div id={this.props.eventObj.id}>{this.props.eventObj.attributes.title}</div>
					</div>
					<div class="collapsible-body">
						<span>{this.props.eventObj.attributes.description}</span>
					</div>
				</li>
			</ul>
		)
	}
}

export default Event;