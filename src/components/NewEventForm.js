import React, { Component } from "react";
import M from "materialize-css"

export default class NewEventForm extends Component {
    constructor() {
        super()
        this.state = {
            formData: {
                title: "",
                start_date: "2020-04-06 00:00:00",
                end_date: "2020-04-20 00:00:00",
                ongoing: false,
                description: "Join us as we all shout fuck you together, but onl...",
                private: false,
                url: "www.facebook.com",
                img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTrTDhOIlFbP2CK2SqjG7w9QL0uB7S2iHau3talnbpizQrX9DD_",
                host_id: 9
            },
            formViewable: false
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
    }

    handleSubmit = (event) => {
        event.preventDefault()
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
        console.log(event.target)
        this.setState({
            formData: {
                ...this.state.formData,
                [event.target.name]: event.target.checked
            }
        })
    }

    handleCalendar = (event) => {
        // event.persist()
        console.log(event.target.value)
    }

    render() {
        // console.log(this.state.formData)
        return (
            <div>
                <div className="modal-trigger fixed-action-btn" id='action-button' data-target="modal1" >
                    <a className="btn-floating btn-large red" href="#modal1">
                        <i className="large material-icons">add</i>
                    </a>
                </div>
                <div id="modal1" className="modal">
                    <div className="modal-content" >
                        <form onSubmit={this.handleSubmit} >
                            <label htmlFor='title'>Title of Event</label>
                            <input onChange={this.handleFormTyping} id='title' type='text' name='title' value={this.state.formData.title} /><br />
                            <label htmlFor='start_date'>Start Date</label>
                            <input id='start_date' type='text' className="datepicker" name='start_date' /><br />
                            <label>
                            <input onChange={this.handleCheckBox} name='ongoing' type="checkbox" className="filled-in" />
                            <span>Check this box for events with no defined start or end time</span>
                            </label><br />                 
                            <br/><input type='submit' />
                        </form>
                    </div>
                </div>
            </div>








        )
    }
}