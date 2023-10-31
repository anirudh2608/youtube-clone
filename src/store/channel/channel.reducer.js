import { CHANNEL_ACTION_TYPES } from "./channel.types"

const INITIAL_STATE = {
    channel: {},
    isLoading: true,
    error: null
}

export const channelReducer = (state = INITIAL_STATE, action) => {

    const { payload, type } = action

    switch (type) {

        case CHANNEL_ACTION_TYPES.FETCH_CHANNEL_BY_ID_START:
            return {
                ...state,
                isLoading: true
            }

        case CHANNEL_ACTION_TYPES.FETCH_CHANNEL_BY_ID_SUCCESS:
            return {
                ...state,
                channel: payload,
                isLoading: false
            }

        case CHANNEL_ACTION_TYPES.FETCH_CHANNEL_BY_ID_FAILED:
            return {
                ...state,
                isLoading: false,
                error: payload,
                channel:{}
            }

        default:
            return state
    }
}