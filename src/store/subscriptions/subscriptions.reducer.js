import {SUBSCRIPTIONS_ACTION_TYPES} from "./subscriptions.types"

const INITIAL_STATE = {
    subscriptions: [],
    isLoading: true,
    error: null
}

export const subscriptionsReducer = (state = INITIAL_STATE, action) => {

    const { payload, type } = action

    switch (type) {

        case SUBSCRIPTIONS_ACTION_TYPES.FETCH_SUBSCRIPTIONS_START:
            return {
                ...state,
                isLoading: true
            }

        case SUBSCRIPTIONS_ACTION_TYPES.FETCH_SUBSCRIPTIONS_SUCCESS:
            return {
                ...state,
                subscriptions: payload,
                isLoading: false
            }

        case SUBSCRIPTIONS_ACTION_TYPES.FETCH_SUBSCRIPTIONS_FAILED:
            return {
                ...state,
                isLoading: false,
                error: payload
            }

        default:
            return state
    }
}