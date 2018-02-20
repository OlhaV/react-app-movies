// import { FETCH_MOVIE_START,
//     FETCH_MOVIE_RECEIVED,
//     FETCH_MOVIE_ERROR
// } from './WatchConstants.js'
//
// const initialState = {
//     movieSource: 'No source',
//     fetching: false,
//     fetchError: 'No error',
//     overview: 'No overview',
//     title: 'No title'
// }
//
// const watchReducer = (state = {initialState}, action) => {
//     switch(action.type) {
//         case FETCH_MOVIE_START:
//             return Object.assign({},
//                 state,
//                 state.fetching = true
//             )
//         case FETCH_MOVIE_RECEIVED:
//             return Object.assign({},
//                 state,
//                 state.fetching = false,
//                 state.movieSourse = action.movieSourse,
//                 state.overview = action.overview,
//                 state.title = action.title
//             )
//         case FETCH_MOVIE_ERROR:
//             return Object.assign({},
//                 state,
//                 state.fetching = true,
//                 state.fetchError = action.payload
//             )
//         default:
//             return state
//     }
// }
//
// export default watchReducer
