import { RELATED_VIDEOS_ACTION_TYPES } from "./relatedVideos.types"


export const fetchRelatedVideosStart = (channelId) => {
    return ({
        type: RELATED_VIDEOS_ACTION_TYPES.FETCH_RELATED_VIDEOS_START,
        payload: channelId
    })
}

export const fetchRelatedVideosSuccess = (videos) => {
    return ({
        type: RELATED_VIDEOS_ACTION_TYPES.FETCH_RELATED_VIDEOS_SUCCESS,
        payload: videos
    })
}

export const fetchRelatedVideosFailed = (error) => {
    return ({
        type: RELATED_VIDEOS_ACTION_TYPES.FETCH_RELATED_VIDEOS_FAILED,
        payload: error
    })
}

