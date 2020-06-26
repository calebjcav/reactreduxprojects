import {connect} from 'react-redux'
import { Thumbnail } from '../Components'

const mapStatetoProps = state => ({
    image: state.image, 
    title: state.title,
    movieid: state.movieid,
})

const mapDispatchtoProps = dispatch => ({
    actions:{
    }
})
export default connect(mapStatetoProps, mapDispatchtoProps)(Thumbnail)