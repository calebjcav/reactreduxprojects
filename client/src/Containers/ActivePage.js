import {connect} from 'react-redux'
import { VideoPage, LoginPage } from '../Pages'

const mapStatetoProps = state => ({
  LoginFulfilled: state.LoginFulfilled
})

const mapDispatchtoProps = dispatch => ({
    actions:{
    }
})

export const VP = connect(mapStatetoProps, mapDispatchtoProps)(VideoPage)
export const LP = connect(mapStatetoProps, mapDispatchtoProps)(LoginPage)
export default {VideoPage: VP, LoginPage: LP}