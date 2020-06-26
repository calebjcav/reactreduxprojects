import wm from './watchMovie'
import fm from './FetchMovieList'
import fmf from './FetchMovieListFulfilled'
import Dm from './DisplayMovie'

export const DisplayMovie = Dm
export const WatchMovie = wm
export const FetchMovieList = fm
export const FetchMovieListFulfilled = fmf
export default ({FetchMovieList, FetchMovieListFulfilled, WatchMovie, DisplayMovie})