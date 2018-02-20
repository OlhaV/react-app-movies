import {
    REDIRECT,
    WATCH_PAGE,
    POPULAR_PAGEGE,
    CAST_PAGE,
    FAVORITE_PAGEAGE,
    OVERVIEW_PAGEAGE,
    API_KEY }
from './mainConstants.js'


export let redirect = (page) => {
    return (dispatch) => {
        dispatch({
            type: REDIRECT,
            payload: page
        });
    }
}
