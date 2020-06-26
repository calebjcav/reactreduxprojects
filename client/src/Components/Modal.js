import React from "react";
export default class Modal extends React.Component {
    constructor(props){
        super(props)
    }

    onClose = e => {
        this.props.actions.DisplayMovie('')
      }

  render() {
    return this.props.url.length>0 ? <div className='modal'> 
        {this.props.children}  
        <button
        onClick={this.onClose}>Close</button>
        </div> : 
        null
  }
}