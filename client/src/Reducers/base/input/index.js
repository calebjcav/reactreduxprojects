import { combineReducers } from 'redux'
import property from './property'
import valid from './valid'
import classnames from './array'

export default target => combineReducers({value:property(target,'VALUE'), valid:valid(target), type:property(target,'TYPE'), classnames:classnames(target)})