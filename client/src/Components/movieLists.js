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
            <div className='gallery-grid'>
            {this.props.movieList.map(
                (movie) => 
                <div key={movie.movieid} movieid={movie.movieid} onClick={this.watchMovie.bind(this)}>
                    <Thumbnail movieid={movie.movieid} image={movie.image} title={movie.title} />
                </div>
            )}
            </div>
        </div>
        )
    }
}