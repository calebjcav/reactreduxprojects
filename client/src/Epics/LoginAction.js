import { filter, mergeMap, debounceTime, map } from 'rxjs/operators'
import { observable } from 'rxjs';
import actions from '../Actions'
import { ajax } from 'rxjs/ajax'

export default  (action$, state$) => action$.pipe(
    filter(action => action.type === 'LOGIN_ACTION'),
    debounceTime(250),
  mergeMap(action => (
        ajax.getJSON("http://localhost:3002/api/login").pipe(
            map(response => actions.LoginFulfilled(response.auth))
        )
    )
  )
)