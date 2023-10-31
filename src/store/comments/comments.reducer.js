import { COMMENTS_ACTION_TYPES } from "./comments.types"

const INITIAL_STATE = {
    comments: [],
    isLoading: true,
    error: null
}

export const commentsReducer = (state = INITIAL_STATE, action) => {

    const { payload, type } = action

    switch (type) {

        case COMMENTS_ACTION_TYPES.FETCH_VIDEO_COMMENTS_START:
            return {
                ...state,
                isLoading: true
            }

        case COMMENTS_ACTION_TYPES.FETCH_VIDEO_COMMENTS_SUCCESS:
            return {
                ...state,
                comments: payload,
                isLoading: false
            }

        case COMMENTS_ACTION_TYPES.FETCH_VIDEO_COMMENTS_FAILED:
        case COMMENTS_ACTION_TYPES.ADD_COMMENT_FAILED:
            return {
                ...state,
                isLoading: false,
                error: payload,
                comments: []
            }

        default:
            return state
    }
}