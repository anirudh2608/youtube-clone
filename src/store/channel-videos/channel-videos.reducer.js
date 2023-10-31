import { CHANNEL_VIDEOS_ACTION_TYPES } from "./channel-videos.types"

const INITIAL_STATE = {
    videos: [],
    isLoading: true,
    error: null
}

export const channelVideosReducer = (state = INITIAL_STATE, action) => {

    const { payload, type } = action

    switch (type) {

        case CHANNEL_VIDEOS_ACTION_TYPES.FETCH_VIDEOS_BY_CHANNEL_START:
            return {
                ...state,
                isLoading: true
            }

        case CHANNEL_VIDEOS_ACTION_TYPES.FETCH_VIDEOS_BY_CHANNEL_SUCCESS:
            return {
                ...state,
                videos: payload,
                isLoading: false
            }

        case CHANNEL_VIDEOS_ACTION_TYPES.FETCH_VIDEOS_BY_CHANNEL_FAILED:
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