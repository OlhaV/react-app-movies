import { REDIRECT } from './mainConstants.js'

const initialState = {
    childPage: window.location.hash.substr(1)
}

const mainReducer = (state = {initialState}, action) => {
    switch(action.type) {
        case REDIRECT:
            return Object.assign({}, state,
                state.childPage = action.payload,
                )
        default:
            return state
    }
}

export default mainReducer
