import {connect} from 'react-redux'
import { LoginButton } from '../Components'
import actions from '../Actions'

const mapStatetoProps = state => ({
    
})

const mapDispatchtoProps = dispatch => ({
    actions:{
      LoginClick: val => dispatch(actions.LoginAction(val))
    }
})
export default connect(mapStatetoProps, mapDispatchtoProps)(LoginButton)