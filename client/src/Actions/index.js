import input from './input'
import va from './ValueAction'
import nva from './NoValueAction'

export const FetchGenreList = nva('FETCH_GENRELIST')
export const FetchMovieList = nva('FETCH_MOVIELIST')
export const FetchGenreListFulfilled = va('FETCH_GENRELIST_FULFILLED')
export const LoginFulfilled = va('LOGIN_FULFILLED')
export const LoginAction = va('LOGIN_ACTION')
export const DisplayMovie = va('DISPLAY_MOVIE')
export const WatchMovie = va('WATCH_MOVIE')
export const FetchMovieListFulfilled = va('FETCH_MOVIELIST_FULFILLED')
export default ({FetchMovieList, FetchMovieListFulfilled, WatchMovie, DisplayMovie, username:input('username'),
password:input('password'), LoginAction, LoginFulfilled, FetchGenreList, FetchGenreListFulfilled})