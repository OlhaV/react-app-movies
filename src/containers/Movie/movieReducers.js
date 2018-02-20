import { GET_CURRENT_MOVIE, FETCH_TRAILER, ADD_TO_FAVORITE } from './movieConstants.js'

const initialState = {
    movieId: 0,
    movieSource: 'No source',
    overview: 'No overview',
    title: 'No title',
    video: '',
    favoriteMovies: []
}

const movieReducer = (state = {initialState}, action) => {
    switch(action.type) {
        case FETCH_TRAILER:
            return Object.assign({}, state,
                state.title = action.title,
                state.video = action.video
            )
        case ADD_TO_FAVORITE:
            let updatedFavoriteMovies = state.favoriteMovies ? state.favoriteMovies : [];
            updatedFavoriteMovies.push(action.payload);
            return Object.assign({}, state,
                state.favoriteMovies = updatedFavoriteMovies
            )
        default:
            return state
    }
}

export default movieReducer
