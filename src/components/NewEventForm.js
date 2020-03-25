import React, { Component } from "react";
import M from "materialize-css"

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
            host_id: 2
        }
    }

    componentDidMount = () => {
        const elems = document.querySelectorAll('.fixed-action-btn');
        const instances = M.FloatingActionButton.init(elems, {
            direction: 'left',
            hoverEnabled: false
          });
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
            this.props.addNewEventToState(newEvent)
        })
        .catch(error => {
            console.log('Error:', error);
        })
    }

    render() {
        return (
            <div class="fixed-action-btn">
                <a class="btn-floating btn-large red">
                    <i class="large material-icons">add</i>
                </a>
                <ul>
                    <li>
                        <form class="btn-floating" onSubmit={this.handleSubmit} >
                            <input type='submit' />
                        </form>
                    </li>
                </ul>
            </div>








        )
    }
}