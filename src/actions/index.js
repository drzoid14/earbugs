const {API_BASE_URL} = require('../config')

export const SET_COMPARISON='SET_COMPARISON'
export const setComparison = comparison =>({
    type: SET_COMPARISON,
    comparison
})

export const PLAY_BUTTON='PLAY_BUTTON'
export const playButton = autoplay => ({
    type: PLAY_BUTTON,
    autoplay
})

export const SET_USER = 'SET_USER';
export const setUser = user =>({
    type: SET_USER,
    user
})

export const GET_VIDEOS = 'GET_VIDEOS';
export const getVideos = user =>({
    type:GET_VIDEOS,
    user
})

export const GET_USER = 'GET_USER';
export const getUser = user =>({
    type: GET_USER,
    user
})

export const SET_AUTH='SET_AUTH';
export const setAuth = auth =>({
    type: SET_AUTH,
    auth
})

export const signIn = user => dispatch =>{
    return fetch(`${API_BASE_URL}/users`, {
        method: 'get',
        headers: {'content-type': 'application/json'}
    }).then(res=> {
        if(!res.ok){
            return Promise.reject(res.statusText);
        } 
        return res.json()
    }).then(user=> {
        console.log(user)
        dispatch(getUser(user));

    });
    
}
 

export const getProfile = userId => dispatch =>{
fetch(`${API_BASE_URL}/videos/user/${userId}`, {
    method:'get',
    headers: {'content-type': 'application/json'}
}).then(res => {
    if(!res.ok){
        return Promise.reject(res.statusText);
    }
    return res.json()
}).then(user=> {
    dispatch(getVideos(user));
});
}

export const newUser = user => dispatch =>{
    fetch(`${API_BASE_URL}/users`, {
        method:'post',
        body: JSON.stringify(user),
        headers: {'content-type': 'application/json'}
    }).then(res => {
        if(!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(resp => {
        console.log(resp)
        console.log(user)
        dispatch(getAuth(user));
    });
}


export const postComparison = comparison => dispatch => {
    fetch(`${API_BASE_URL}/videos`,{
        method:'post',
        body:JSON.stringify(comparison),
        headers: {'content-type': 'application/json',
                'authorization': 'Bearer ' + localStorage.authToken
    }
    }).then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(videos => {
        dispatch(setComparison(videos));
    });
};

export const getAuth = user => dispatch => {
    fetch(`${API_BASE_URL}/login`, {
        method: 'post',
        body: JSON.stringify(user),
        headers: {'content-type': 'application/json'}
    }).then(res => {
        if(!res.ok){
            return Promise.reject(res.statusText);
        }
        return res.json()
    }).then(auth => {
        dispatch(setUser(auth));
    });
};
