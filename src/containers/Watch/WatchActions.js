import { FETCH_MOVIE_START,
    FETCH_MOVIE_RECEIVED,
    FETCH_MOVIE_ERROR
} from './WatchConstants.js'
import {API_KEY} from './../Main/mainConstants.js'
import axios from 'axios'


export let watchMovie = () => {
    return (dispatch) => {
        dispatch({type: FETCH_MOVIE_START})
        axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${API_KEY}&language=en-US`)
            .then(response => {
                dispatch({
                    type: FETCH_MOVIE_START,
                    payload: response.data.results
                })
            })
            .catch(err => {
                dispatch({
                    type : FETCH_MOVIE_START,
                    payload: err
                })
            })
        }
}
