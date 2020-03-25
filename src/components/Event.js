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
		return(
				<li>
					<div class="collapsible-header" onClick={(event) => this.handleClick(event)} >
						<div class="col s1 pull-s11">
							<div><span class="flow-text">{this.props.eventObj.attributes.start_date}</span></div>
							<div><span class="flow-text">- {this.props.eventObj.attributes.end_date}</span></div>
						</div>
						<div class="col s1 pull-s10">
							<img style={{maxHeight:100}} class="circle responsive-img" src={this.props.eventObj.attributes.img_url} />
							</div>
						<div class="col s4 pull-s8">
							<div class="row">
								<span class="flow-text">{this.props.eventObj.attributes.title}</span>
							</div>
							<div class="row">
								<span>click for description</span>
							</div>
						</div>
						<div class="col s1 pull-s6">
							<div class="row">
								<span class="flow-text">{this.props.eventObj.attributes.title}</span>
							</div>
							<div class="row">
								<span>click for description</span>
							</div>
						</div>
						{/* <i class="material-icons">filter_drama</i> */}
						{/* <div id={this.props.eventObj.id}>{this.props.eventObj.attributes.title}</div> */}
					</div>
					<div class="collapsible-body">
						<span>{this.props.eventObj.attributes.description}</span>
					</div>
				</li>
		)
	}
}

export default Event;