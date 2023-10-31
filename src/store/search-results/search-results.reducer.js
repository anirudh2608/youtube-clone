import { SEARCH_VIDEOS_ACTION_TYPES } from "./search-results.types"

const INITIAL_STATE = {
    videos: [],
    isLoading: true,
    error: null
}

export const searchVideosReducer = (state = INITIAL_STATE, action) => {

    const { payload, type } = action

    switch (type) {

        case SEARCH_VIDEOS_ACTION_TYPES.FETCH_SEARCH_VIDEOS_START:
            return {
                ...state,
                isLoading: true
            }

        case SEARCH_VIDEOS_ACTION_TYPES.FETCH_SEARCH_VIDEOS_SUCCESS:
            return {
                ...state,
                videos: payload,
                isLoading: false
            }

        case SEARCH_VIDEOS_ACTION_TYPES.FETCH_SEARCH_VIDEOS_FAILED:
            return {
                ...state,
                isLoading: false,
                error: payload
            }

        default:
            return state
    }
}