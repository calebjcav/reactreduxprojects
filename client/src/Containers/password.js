import {connect} from 'react-redux'
import { password } from '../Components'
import actions from '../Actions'

const mapStateToProps = target => state => {
    return {
        value: state[target].value,
        valid: state[target].valid,
        type: state[target].type,
        classnames: state[target].classnames 
    }
}

const mapDispatchToProps = target => dispatch => {
    return {
        actions: {
            type: val => dispatch(actions[target].type(val)),
            value: val => dispatch(actions[target].value(val)),
            valid: val => dispatch(actions[target].valid(val)),
            addClass: val => dispatch(actions[target].classnames.add(val)),
            removeClass: val => dispatch(actions[target].classnames.remove(val)),
            loginAction: val => dispatch(actions.LoginAction(val))
        }
    } 
}

export default connect(mapStateToProps('password'), mapDispatchToProps('password'))(password)