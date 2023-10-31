import { WATCH_VIDEO_ACTION_TYPES } from "./watch-video.types"



export const fetchVideoByIdStart = (videoId) => {
    return ({
        type: WATCH_VIDEO_ACTION_TYPES.FETCH_VIDEO_BY_ID_START,
        payload: videoId
    })
}

export const fetchVideoByIdSuccess = (error) => {
    return ({
        type: WATCH_VIDEO_ACTION_TYPES.FETCH_VIDEO_BY_ID_SUCCESS,
        payload: error
    })
}

export const fetchVideoByIdFailed = (error) => {
    return ({
        type: WATCH_VIDEO_ACTION_TYPES.FETCH_VIDEO_BY_ID_FAILED,
        payload: error
    })
}
