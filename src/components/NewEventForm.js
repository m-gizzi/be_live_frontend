import React, { Component } from "react";

export default class NewEventForm extends Component {
    constructor() {
        super()
        this.state = {
            title: "Fuck off Coronavirus 4: the Fuckening",
            start_date: "2020-04-06 00:00:00",
            end_date: "2020-04-20 00:00:00",
            ongoing: false,
            description: "Join us as we all shout fuck you together, but onl...",
            private: false,
            url: "www.facebook.com",
            img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTrTDhOIlFbP2CK2SqjG7w9QL0uB7S2iHau3talnbpizQrX9DD_",
            host_id: 5
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }

        fetch('http://localhost:3000/events', reqObj)
        .then(resp => resp.json())
        .then(newEvent => {
            this.props.addNewEventToState(newEvent.data)
        })
        .catch(error => {
            console.log('Error:', error);
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <input type='submit' />
            </form>
        )
    }
}