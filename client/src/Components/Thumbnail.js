import React, { Component } from 'react'

//individual thumbnail component
export default class Thumbnail extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
        <div key={this.props.movieid}>
            <img src={this.props.image} alt={this.props.title} style={{
                width: '100px',
                height: '150px',
             }} />
            <p>{this.props.title}</p>
        </div>
        )
    }
}