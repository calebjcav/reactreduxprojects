import {connect} from 'react-redux'
import { MovieVideo } from '../Components'
import actions from '../Actions'

const mapStatetoProps = state => ({
    url: state.url
})

const mapDispatchtoProps = dispatch => ({
    actions:{
        
    }
})
export default connect(mapStatetoProps, mapDispatchtoProps)(MovieVideo)