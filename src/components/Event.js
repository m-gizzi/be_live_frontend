import React from 'react'
import M from 'materialize-css'

class Event extends React.Component {

	componentDidMount = () => {
		const elems = document.querySelectorAll('.collapsible');
		const instances = M.Collapsible.init(elems, {
			accordion: true
		  });
	}

	handleClick = (event) => {
		const{ id } = event.target;
		console.log(id)
	}
	render() {
		// console.log(this.props.eventObj.attributes.title)
		return(
				<li>
					<div class="collapsible-header" onClick={(event) => this.handleClick(event)} >
						<i class="material-icons">filter_drama</i>
						<div id={this.props.eventObj.id}>{this.props.eventObj.attributes.title}</div>
					</div>
					<div class="collapsible-body">
						<span>{this.props.eventObj.attributes.description}</span>
					</div>
				</li>
		)
	}
}

export default Event;