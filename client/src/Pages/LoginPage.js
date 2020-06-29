import React from 'react'
import { Username, Password, LoginButton } from '../Containers'

export default class LoginPage extends React.Component {
    constructor(props){
        super(props)
    }

  render() {
    return this.props.LoginFulfilled ? null : <div>
        <h1>Login</h1>
        <Username />    
        <Password />
        <LoginButton />
        </div>
  }
}