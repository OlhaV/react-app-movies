import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from './../enhancers/thunk.js'
import movieReducer from './../containers/Movie/movieReducers.js'
import watchReducer from './../containers/Watch/WatchReducer.js'
import popularReducer from './../containers/Popular/PopularReducer.js'
import mainReducer from './../containers/Main/mainReducers.js'



const reducers = combineReducers({
    main: mainReducer,
    movie: movieReducer,
    watch: watchReducer,
    popularMovies: popularReducer
})

const logger = (store) => (next) => (action) => {
    next(action)
}

const middleWare = applyMiddleware(thunkMiddleware, createLogger());
const store = createStore(reducers, {}, middleWare);

export default store
