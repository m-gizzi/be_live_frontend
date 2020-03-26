import React, { Component } from "react";
import M from 'materialize-css'

export default class Tags extends Component {
    constructor(){
        super()
        this.state = {
            tag_name: '',
            event_id: undefined
        }
    }

    componentDidMount(){
        const elems = document.getElementById(`tags-number-${this.props.eventKey}`)
        M.Chips.init(elems, {
            onChipAdd: () => this.handleChipAdd()
        });
        this.setState({
            event_id: this.props.eventKey
        })
    }

    renderChips = () => {
        return this.props.tags.map(tag => {
            return (
                <div key={tag.id} className="chip" tabIndex="0">
                {tag.tag_name}
                <i className="material-icons close">close</i>
            </div>
            )
        })
    }

    handleFormTyping = (event) => {
        this.setState({
                tag_name: event.target.value
            }
        )
    }

    handleChipAdd = () => {
        // console.log('success', this.props.eventKey)
        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }

        fetch('http://localhost:3000/tags', reqObj)
        .catch(error => {
            console.log('Error:', error);
        })
    }

    render = () => {
        // console.log(this.state)
        return (
            <div id={`tags-number-${this.props.eventKey}`} className="chips">
                {this.renderChips()}
                <input onChange={this.handleFormTyping} className="input" value={this.state.tag_name} ></input>
            </div>
        )
    }
}