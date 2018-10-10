export const SET_VIDEO_1 = 'SET_VIDEO_1'
export const setVideo1 = video1 => ({
    type:SET_VIDEO_1,
    video1
})

export const SET_VIDEO_2 = 'SET_VIDEO_2'
export const setVideo2 = video2 => ({
    type:SET_VIDEO_2,
    video2
})

export const SET_START_1='SET_START_1'
export const setStart1 = start1 => ({
    type: SET_START_1,
    start1
})

export const SET_START_2='SET_START_2'
export const setStart2 = start2 => ({
    type: SET_START_2,
    start2
})

export const SET_END_2='SET_END_2'
export const setEnd2 = end2 => ({
    type: SET_END_2,
    end2
})

export const SET_END_1='SET_END_1'
export const setEnd1 = end1 => ({
    type: SET_END_1,
    end1
})

export const PLAY_BUTTON='PLAY_BUTTON'
export const playButton = autoplay => ({
    type: PLAY_BUTTON,
    autoplay
})