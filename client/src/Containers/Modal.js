import {connect} from 'react-redux'
import { Modal } from '../Components'
import actions from '../Actions'

const mapStatetoProps = state => ({
    video: state.video
})

const mapDispatchtoProps = dispatch => ({
    actions:{
      DisplayMovie: val => dispatch(actions.DisplayMovie(val))
    }
})
export default connect(mapStatetoProps, mapDispatchtoProps)(Modal)