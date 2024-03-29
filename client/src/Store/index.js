import { createStore, applyMiddleware, compose } from 'redux'
import reducers from '../Reducers'
import { createEpicMiddleware } from 'redux-observable';
import fml from '../Epics'
import mv from '../Epics/moviePuller'

const epicMiddleware = createEpicMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducers,
  composeEnhancers(
    applyMiddleware(epicMiddleware)
  )
);

epicMiddleware.run(mv)
epicMiddleware.run(fml)