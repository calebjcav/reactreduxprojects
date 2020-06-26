import { filter, debounceTime, mergeMap, map } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'
import { observable } from 'rxjs';
import actions from '../Actions';

export default (action$, state$) => action$.pipe(
    filter(action => action.type === 'FETCH_MOVIELIST'),
    debounceTime(250),
    mergeMap(action => (
        ajax.getJSON("http://localhost:3002/api/movieList").pipe(
            map(response => actions.FetchMovieListFulfilled(response))
        )
    ))
  );