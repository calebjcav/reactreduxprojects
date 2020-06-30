import {connect} from 'react-redux'
import { MovieVideo } from '../Components'
import actions from '../Actions'

const mapStatetoProps = state => ({
    video: state.video
})

const mapDispatchtoProps = dispatch => ({
    actions:{
        
    }
})
export default connect(mapStatetoProps, mapDispatchtoProps)(MovieVideo)