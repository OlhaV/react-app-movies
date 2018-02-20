import { FETCH_MOVIES_START,
         FETCH_MOVIES_RECEIVED,
         FETCH_MOVIES_ERROR
} from './PopularConstants.js'
import {API_KEY} from './../Main/mainConstants.js'
import axios from 'axios'


export let fetchPopular = () => {
    return (dispatch) => {
        dispatch({type: FETCH_MOVIES_START})
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
            .then(response => {
                dispatch({
                    type: FETCH_MOVIES_RECEIVED,
                    payload: response.data.results
                })
            })
            .catch(err => {
                dispatch({
                    type : FETCH_MOVIES_ERROR,
                    payload: err
                })
            })
        }
}
