import { VIDEOS_ACTION_TYPES } from "./videos.types"


export const fetchPopularVideosStart = (nextPageToken) => {
    return ({
        type: VIDEOS_ACTION_TYPES.FETCH_POPULAR_VIDEOS_START,
        payload: nextPageToken
    })
}

export const fetchPopularVideosSuccess = (videos) => {
    return ({
        type: VIDEOS_ACTION_TYPES.FETCH_POPULAR_VIDEOS_SUCCESS,
        payload: videos
    })
}

export const fetchPopularVideosFailed = (error) => {
    return ({
        type: VIDEOS_ACTION_TYPES.FETCH_POPULAR_VIDEOS_FAILED,
        payload: error
    })
}



export const fetchCategoryVideosStart = (category, nextPageToken) => {
    return ({
        type: VIDEOS_ACTION_TYPES.FETCH_CATEGORY_VIDEOS_START,
        payload: { category, nextPageToken }
    })
}

export const fetchCategoryVideosSuccess = (videos) => {
    return ({
        type: VIDEOS_ACTION_TYPES.FETCH_CATEGORY_VIDEOS_SUCCESS,
        payload: videos
    })
}

export const fetchCategoryVideosFailed = (error) => {
    return ({
        type: VIDEOS_ACTION_TYPES.FETCH_CATEGORY_VIDEOS_FAILED,
        payload: error
    })
}

