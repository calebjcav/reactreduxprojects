import { filter, mergeMap, debounceTime } from 'rxjs/operators'
import { observable } from 'rxjs';

export default  (action$, state$) => action$.pipe(
    filter(action => action.type === 'WATCH_MOVIE'),
    debounceTime(250),
    mergeMap(action => ([
        { type: 'DISPLAY_MOVIE', payload: (action.payload.image.split('.')[0] + '.mp4').replace("Thumbnails", "Videos") }
    ]))
  );