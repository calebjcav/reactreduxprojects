import { filter, mergeMap, debounceTime, map } from 'rxjs/operators'
import actions from '../Actions'
import { ajax } from 'rxjs/ajax'

export default  (action$, state$) => action$.pipe(
    filter(action => action.type === 'LOGIN_ACTION'),
    debounceTime(250),
    mergeMap(action => (
      ajax({
        crossDomain: true,
        url: "http://localhost:3002/api/login",
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'rxjs-custom-header': 'Rxjs'
        },
        body: {
          username: state$.value.username.value,
          password: state$.value.password.value
        },
        responseType: "json"
      })
      .pipe(
        map(resp => actions.LoginFulfilled(resp.response.auth))
      )
    )
  )
)