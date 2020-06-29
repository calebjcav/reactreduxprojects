import { combineReducers} from 'redux'
import thm from './Thumbnail'
import mvl from './FetchMovieListFulfilled'
import lf from './LoginFulfilled'
import mv from './MovieVideo'
import input from './base/input'

export default combineReducers({
    Thumbnail: thm,
    movieList: mvl,
    url: mv,
    username: input('username'),
    password: input('password'),
    LoginFulfilled: lf
})