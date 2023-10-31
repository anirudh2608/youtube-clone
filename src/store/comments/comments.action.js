import { COMMENTS_ACTION_TYPES } from "./comments.types"



export const fetchCommentsStart = (videoId) => {
    return ({
        type: COMMENTS_ACTION_TYPES.FETCH_VIDEO_COMMENTS_START,
        payload: videoId
    })
}

export const fetchCommentsSuccess = (comments) => {
    return ({
        type: COMMENTS_ACTION_TYPES.FETCH_VIDEO_COMMENTS_SUCCESS,
        payload: comments
    })
}

export const fetchCommentsFailed = (error) => {
    return ({
        type: COMMENTS_ACTION_TYPES.FETCH_VIDEO_COMMENTS_FAILED,
        payload: error
    })
}


export const addCommentStart = (videoId, comment, accessToken) => {
    return ({
        type: COMMENTS_ACTION_TYPES.ADD_COMMENT_START,
        payload: { videoId, comment, accessToken }
    })
}

export const addCommentSuccess = (comments) => {
    return ({
        type: COMMENTS_ACTION_TYPES.ADD_COMMENT_SUCCESS,
        payload: comments
    })
}

export const addCommentFailed = (error) => {
    return ({
        type: COMMENTS_ACTION_TYPES.ADD_COMMENT_FAILED,
        payload: error
    })
}
