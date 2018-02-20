import { GET_CURRENT_MOVIE, FETCH_TRAILER, ADD_TO_FAVORITE } from './movieConstants.js'
import { API_KEY } from './../Main/mainConstants.js'
import axios from 'axios'


export let watchCurrentMovie = (movie) => {
    let videoUrl1 = 'https://api.themoviedb.org/3/movie/',
        videoUrl2 = `/videos?api_key=${API_KEY}&append_to_response=videos`,
        youtubeUrl = 'http://www.youtube.com/embed/';

    return (dispatch) => {
        axios.get(videoUrl1 + movie.id + videoUrl2)
            .then(response => {
                let key = response.data.results[0].key;
                dispatch({
                    type: FETCH_TRAILER,
                    video: youtubeUrl + key,
                    id: movie.id,
                    title: movie.title,
                    overview: movie.overview,
                    vote_average: movie.vote_average
                })
            })
    }
}

export let addToFavorite = (movie) => {
    return (dispatch) => {
        console.log(movie)
        dispatch({
            type: ADD_TO_FAVORITE,
            payload: {
                title: movie.title,
                overview: movie.overview,
                id: movie.id,
                vote_average: movie.vote_average
            }
        })
    }
}
