import {connect} from 'react-redux'
import { MovieList } from '../Components'
import actions from '../Actions'

const mapStatetoProps = state => ({
    movieList: state.movies
})

const mapDispatchtoProps = dispatch => ({
    actions:{
        FetchMovieList: () => dispatch(actions.FetchMovieList()),
        WatchMovie: val => dispatch(actions.WatchMovie(val))
    }
})
export default connect(mapStatetoProps, mapDispatchtoProps)(MovieList)