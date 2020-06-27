import React, { Component } from 'react'
import ReactPlayer from 'react-player'

export default class MovieVideo extends Component {
    constructor(props){
        super(props)
        
    }
    render(){
        return(
            <div className ="modal-body">
            {this.props.url.length > 0 ? <ReactPlayer
                url={this.props.url}
                className='react-player modal-body' 
                playing
                width='100%'
                height='100%'
                controls='true'
            /> : ""}
            </div>
        )
    }
}