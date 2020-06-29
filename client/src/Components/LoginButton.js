import React, { Component } from 'react'


export default class LoginButton extends Component {
    constructor(props){
        super(props)
    }

LoginClick = e => {this.props.actions.LoginClick(true)}

    render() {
        return(
            <button onClick={this.LoginClick}>Login</button>
        )
    }
}