import React, { Component } from 'react'
import Thumbnail from './Thumbnail'

export default class movieLists extends Component {
    constructor(props){
        super(props)
        this.props.actions.FetchMovieList()
    }

    watchMovie = e => {
        this.props.actions.WatchMovie(this.props.movieList[parseInt(e.currentTarget.getAttribute("movieid"))])
    }

    render() {
        return (
        <div className='gallery-container'>
            <p>Genre</p>
            <div className='gallery-grid'>
            
            {this.props.movieList.map(
                (movie, index) => 
                <div key={movie.movieid} movieid={index} onClick={this.watchMovie.bind(this)}>
                    <Thumbnail movieid={index} image={movie.image} title={movie.title} video={movie.video}/>
                </div>
            )}
            </div>
        </div>
        )
    }
}