import React, { Component } from 'react'

export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            formValue: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            formValue: event.target.value
        })
    }
    
    handleLoginClick = () => {
        this.props.handleCurrentUserChange(this.state.formValue)
    }

    render = () => {
        return (
            <div>
                <a className="waves-effect waves-light btn modal-trigger" href="#modal2">Modal</a>
                <div id="modal2" className="modal bottom-sheet">
                    <div className="modal-content">
                        <h4>Login for full access</h4>
                        <label htmlFor='user-login'>Who are you?</label>
                        <input onChange={this.handleChange} type='text' id='user-login' value={this.state.formValue} />
                    </div>
                    <div className="modal-footer">
                        <input onClick={this.handleLoginClick} type='submit' value='Login' className="modal-close waves-effect waves-green btn-flat" />
                    </div>
                </div>
            </div>
        )
    }
}