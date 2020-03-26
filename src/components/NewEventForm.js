import React, { Component } from "react";
import M from "materialize-css"

export default class NewEventForm extends Component {
    constructor() {
        super()
        this.state = {
            formData: {
                title: "",
                start_date: "",
                end_date: "",
                ongoing: false,
                description: "",
                private: false,
                url: "",
                img_url: "",
                host_id: 2
            }
        }
    }

    componentDidMount = () => {
        const elems = document.querySelectorAll('.fixed-action-btn');
        M.FloatingActionButton.init(elems, {
            direction: 'left',
            hoverEnabled: false
          });
        const elemsTwo = document.querySelectorAll('.modal');
        M.Modal.init(elemsTwo);
        const elemsThree = document.querySelectorAll('.datepicker');
        M.Datepicker.init(elemsThree);
        const elemsFour = document.querySelectorAll('.timepicker');
        M.Timepicker.init(elemsFour);
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const startDateForm = document.getElementById('start_date').value
        const endDateForm = document.getElementById('end_date').value
        const startTimeForm = document.getElementById('start_time').value
        const endTimeForm = document.getElementById('end_time').value
        this.setState({
            formData: {
                ...this.state.formData,
                start_date: (startDateForm + ' ' + startTimeForm),
                end_date: (endDateForm + ' ' + endTimeForm)
            }
        }, this.sendFetch)
    }

    sendFetch = () => {
        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.formData)
        }

        fetch('http://localhost:3000/events', reqObj)
        .then(resp => resp.json())
        .then(newEvent => {
            this.props.addNewEventToState(newEvent)
        })
        .catch(error => {
            console.log('Error:', error);
        })
    }

    handleFormTyping = (event) => {
        this.setState({
            formData: {
                ...this.state.formData,
                [event.target.name]: event.target.value
            }
        })
    }

    handleCheckBox = (event) => {
        // console.log(event.target)
        this.setState({
            formData: {
                ...this.state.formData,
                [event.target.name]: event.target.checked
            }
        })
    }

    render() {
        console.log(this.state.formData)
        return (
            <div>
                <div className="modal-trigger fixed-action-btn" id='action-button' data-target="modal1" >
                    <a className="btn-floating btn-large red" href="#modal1">
                        <i className="large material-icons">add</i>
                    </a>
                </div>
                <div id="modal1" className="modal" style={{maxHeight:'90%'}}>
                    <div className="modal-content" >
                        <form onSubmit={this.handleSubmit} >
                            <label htmlFor='title'>Title of Event</label>
                            <input onChange={this.handleFormTyping} id='title' type='text' name='title' value={this.state.formData.title} /><br />
                            <div class="row">
                                <div className="col s6">
                                    <label htmlFor='start_date'>Start Date</label>
                                    <input id='start_date' type='text' className="datepicker" name='start_date' /><br />
                                    <label htmlFor='start_time'>Start Time</label>
                                    <input id='start_time' type="text" class="timepicker" />
                                </div>
                                <div className="col s6">
                                    <label htmlFor='end_date'>End Date</label>
                                    <input id='end_date' type='text' className="datepicker" name='end_date' /><br />
                                    <label htmlFor='end_time'>End Time</label>
                                    <input id='end_time' type="text" class="timepicker" />
                                </div>
                            </div>
                            <label>
                            <input onChange={this.handleCheckBox} name='ongoing' type="checkbox" className="filled-in" />
                            <span>Check this box for events with no defined start or end time</span>
                            </label><br />
                            <label htmlFor='description'>Description of Event</label>
                            <input onChange={this.handleFormTyping} type='text' id='description' name='description' value={this.state.formData.description} /><br />                 
                            <label>
                            <input onChange={this.handleCheckBox} name='private' type="checkbox" className="filled-in" />
                            <span>Check if this is a private event (url not required for private events)</span>
                            </label><br />
                            <label htmlFor='url'>Event URL</label>
                            <input onChange={this.handleFormTyping} type='text' id='url' name='url' value={this.state.formData.url} /><br />                 
                            <label htmlFor='img_url'>Image URL</label>
                            <input onChange={this.handleFormTyping} type='text' id='img_url' name='img_url' value={this.state.formData.img_url} /><br />                 
                            <br/><input type='submit' />
                        </form>
                    </div>
                </div>
            </div>








        )
    }
}