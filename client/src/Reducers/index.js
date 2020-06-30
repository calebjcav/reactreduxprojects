import { combineReducers} from 'redux'
import thm from './Thumbnail'
import mv from './MovieVideo'
import input from './base/input'
import listFulfilled from './GetListFulfilled'
import lf from './LoginFulfilled'

export default combineReducers({
    Thumbnail: thm,
    video: mv,
    LoginFulfilled: lf,
    username: input('username'),
    password: input('password'),
    movies: listFulfilled('FETCH_MOVIELIST_FULFILLED'),
    genres: listFulfilled('FETCH_GENRELIST_FULFILLED'),
})