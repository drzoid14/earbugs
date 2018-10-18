import {SET_COMPARISON, PLAY_BUTTON, SET_USER, GET_VIDEOS} from '../actions';
import * as JWT from 'jwt-decode';



const initialState = {
    video1: null,
    video2: null,
    start1: null,
    start2: null,
    end1: null,
    end2: null,
    autoplay:0,
    videoList: [],
    user: null,
    title: null
}

export default function videoReducer(state=initialState, action)  {
    if(action.type===SET_COMPARISON) {
        return Object.assign({}, state, {
            video1: action.comparison.video1,
            video2: action.comparison.video2,
            start1: action.comparison.start1,
            start2: action.comparison.start2,
            end1: action.comparison.end1,
            end2: action.comparison.end2,
            title: action.comparison.title
        });
    }

    if(action.type===SET_USER) {
        console.log(action)
        const decodedToken = JWT(action.user.authToken);
        console.log(decodedToken)
        
        console.log(action.user.authToken)
        localStorage.authToken=action.user.authToken;
        localStorage.id=decodedToken.user.id
        return Object.assign({}, state, {
            user: decodedToken.user
        })
    }

    if(action.type===GET_VIDEOS) {
        console.log(action.user)
        return Object.assign({}, state, {
            videoList: action.user
        })
    }
   
    if(action.type===PLAY_BUTTON) {
        return Object.assign({}, state, {
            autoplay: action.autoplay
        })
    }

    
    return state
}



