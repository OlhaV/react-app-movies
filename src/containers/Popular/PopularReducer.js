import { FETCH_MOVIES_START,
         FETCH_MOVIES_RECEIVED,
         FETCH_MOVIES_ERROR
} from './PopularConstants.js'


const initialState = {
    popularMovies: [],
    fetching: false,
    fetchError: 'No error'
}

const popularReducer = (state = {initialState}, action) => {
    switch(action.type) {
        case FETCH_MOVIES_START:
            return Object.assign({}, state,
                state.fetching = true
            )
        case FETCH_MOVIES_RECEIVED:
            return Object.assign({}, state,
                state.popularMovies = action.payload
            )
        case FETCH_MOVIES_ERROR:
            return Object.assign({}, state,
                state.fetchError = action.payload
            )
        default:
            return state
    }
}

export default popularReducer
