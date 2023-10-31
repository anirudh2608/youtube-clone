import { WATCH_VIDEO_ACTION_TYPES } from "./watch-video.types"

const INITIAL_STATE = {
    video: null,
    isLoading: false,
    error: null
}

export const watchVideoReducer = (state = INITIAL_STATE, action) => {

    const { payload, type } = action

    switch (type) {

        case WATCH_VIDEO_ACTION_TYPES.FETCH_VIDEO_BY_ID_START:
            return {
                ...state,
                isLoading: true
            }

        case WATCH_VIDEO_ACTION_TYPES.FETCH_VIDEO_BY_ID_SUCCESS:
            return {
                ...state,
                video: payload,
                isLoading: false
            }

        case WATCH_VIDEO_ACTION_TYPES.FETCH_VIDEO_BY_ID_FAILED:
            return {
                ...state,
                isLoading: false,
                error: payload,
                video:null
            }

        default:
            return state
    }
}