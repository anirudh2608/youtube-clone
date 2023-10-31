import { RELATED_VIDEOS_ACTION_TYPES } from "./relatedVideos.types"

const INITIAL_STATE = {
    videos: [],
    isLoading: true,
    error: null
}

export const relatedVideosReducer = (state = INITIAL_STATE, action) => {

    const { payload, type } = action

    switch (type) {

        case RELATED_VIDEOS_ACTION_TYPES.FETCH_RELATED_VIDEOS_START:
            return {
                ...state,
                isLoading: true
            }

        case RELATED_VIDEOS_ACTION_TYPES.FETCH_RELATED_VIDEOS_SUCCESS:
            return {
                ...state,
                videos: payload,
                isLoading: false
            }

        case RELATED_VIDEOS_ACTION_TYPES.FETCH_RELATED_VIDEOS_FAILED:
            return {
                ...state,
                isLoading: false,
                error: payload,
                videos: []
            }

        default:
            return state
    }
}