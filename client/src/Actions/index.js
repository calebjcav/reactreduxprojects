import wm from './watchMovie'
import fm from './FetchMovieList'
import fmf from './FetchMovieListFulfilled'
import Dm from './DisplayMovie'
import input from './input'
import la from './LoginAction'
import lf from './LoginFulfilled'

export const LoginFulfilled = lf
export const LoginAction = la
export const DisplayMovie = Dm
export const WatchMovie = wm
export const FetchMovieList = fm
export const FetchMovieListFulfilled = fmf
export default ({FetchMovieList, FetchMovieListFulfilled, WatchMovie, DisplayMovie, username:input('username'),
password:input('password'), LoginAction, LoginFulfilled})