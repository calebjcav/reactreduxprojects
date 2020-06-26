import { combineReducers} from 'redux'
import thm from './Thumbnail'
import mvl from './FetchMovieListFulfilled'
import mv from './MovieVideo'

export default combineReducers({
    Thumbnail: thm,
    movieList: mvl,
    url: mv
})