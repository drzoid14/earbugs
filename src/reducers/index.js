import {SET_COMPARISON, PLAY_BUTTON, SET_USER, GET_VIDEOS, SET_AUTH} from '../actions'

const initialState = {
    video1: null,
    video2: null,
    start1: null,
    start2: null,
    end1: null,
    end2: null,
    autoplay:0,
    videoList: [],
    user: null
}

export default function videoReducer(state=initialState, action)  {
    if(action.type===SET_COMPARISON) {
        return Object.assign({}, state, {
            video1: action.comparison.video1,
            video2: action.comparison.video2,
            start1: action.comparison.start1,
            start2: action.comparison.start2,
            end1: action.comparison.end1,
            end2: action.comparison.end2
        });
    }

    if(action.type===SET_USER) {
        console.log(action.user)
        localStorage.authToken=action.authToken;
        console.log(localStorage.authToken)
        return Object.assign({}, state, {
            user:action.id
        })
    }

    if(action.type===GET_VIDEOS) {
        return Object.assign({}, state, {
            videoList: action.user
        })
    }
   
    if(action.type===PLAY_BUTTON) {
        return Object.assign({}, state, {
            autoplay: action.autoplay
        })
    }

    if(action.type===SET_AUTH) {
        console.log(action)
        localStorage.authToken=action.auth.authToken
    }
    
    return state
}



