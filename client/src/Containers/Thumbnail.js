import {connect} from 'react-redux'
import { Thumbnail } from '../Components'
import { stat } from 'fs'

const mapStatetoProps = state => ({
    image: state.image, 
    title: state.title,
    movieid: state.movieid,
    video: state.video
})

const mapDispatchtoProps = dispatch => ({
    actions:{
    }
})
export default connect(mapStatetoProps, mapDispatchtoProps)(Thumbnail)