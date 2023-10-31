import { SEARCH_VIDEOS_ACTION_TYPES } from "./search-results.types"


export const fetchSearchVideosStart = (keyword, nextPageToken) => {
    return ({
        type: SEARCH_VIDEOS_ACTION_TYPES.FETCH_SEARCH_VIDEOS_START,
        payload: { keyword, nextPageToken }
    })
}

export const fetchSearchVideosSuccess = (videos) => {
    return ({
        type: SEARCH_VIDEOS_ACTION_TYPES.FETCH_SEARCH_VIDEOS_SUCCESS,
        payload: videos
    })
}

export const fetchSearchVideosFailed = (error) => {
    return ({
        type: SEARCH_VIDEOS_ACTION_TYPES.FETCH_SEARCH_VIDEOS_FAILED,
        payload: error
    })
}

