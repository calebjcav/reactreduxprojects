import React from 'react'
import { MovieList, MovieVideo, Modal } from '../Containers'

export default class VideoPage extends React.Component {
    constructor(props){
        super(props)
    }

  render() {
    return this.props.LoginFulfilled ? <div>
      <h1>Media Server App</h1>
        <div>
        <MovieList />    
        <Modal>
            <MovieVideo />
            <p>Comments</p>
        </Modal>
        </div>
    </div>
    : null
  }
}