import { USER_ACTION_TYPES } from "./user.types"

const INITIAL_STATE = {
    accessToken: null,
    currentUser: null,
    isLoading: false,
    error: null
}

export const userReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action

    switch (type) {
        case USER_ACTION_TYPES.LOG_IN_SUCCESS:
            const { accessToken, userDetails } = payload
        return {
            ...state,
            currentUser: userDetails,
            accessToken: accessToken
        }

        case USER_ACTION_TYPES.LOG_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                accessToken: null
            }


        case USER_ACTION_TYPES.LOG_OUT_FAILED:
        case USER_ACTION_TYPES.LOG_IN_FAILED:
            return {
                ...state,
                error: payload
            }

        default:
            return state
    }
}