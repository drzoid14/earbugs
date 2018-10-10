import {SET_VIDEO_1, SET_VIDEO_2, SET_START_1, SET_START_2, SET_END_1, SET_END_2, PLAY_BUTTON} from '../actions'

const initialState = {
    video1: null,
    video2: null,
    start1: null,
    start2: null,
    end1: null,
    end2: null,
    autoplay:0
}

export default function videoReducer(state=initialState, action)  {
    if(action.type===SET_VIDEO_1) {
        return Object.assign({}, state, {
            video1: action.video1
        });
    }

    if(action.type===SET_VIDEO_2) {
        return Object.assign({}, state, {
            video2: action.video2
        });
    }

    if(action.type===SET_START_1) {
        return Object.assign({}, state, {
            start1: action.start1
        });
    }

    if(action.type===SET_START_2) {
        return Object.assign({}, state, {
            start2: action.start2
        });
    }

    if(action.type===SET_END_1) {
        return Object.assign({}, state, {
            end1: action.end1
        });
    }

    if(action.type===SET_END_2) {
        return Object.assign({}, state, {
            end2: action.end2
        });
    }

    if(action.type===PLAY_BUTTON) {
        return Object.assign({}, state, {
            autoplay: action.autoplay
        })
    }
    console.log(state);
    return state
}



