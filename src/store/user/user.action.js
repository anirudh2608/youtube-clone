import { USER_ACTION_TYPES } from "./user.types"


export const checkUserSession = () => {
    return ({
        type: USER_ACTION_TYPES.CHECK_USER_SESSION
    })
}

export const googleLogInStart = () => {
    return ({  
        type: USER_ACTION_TYPES.GOOGLE_LOG_IN_START
    })
}


export const logInSuccess = (user) => {
    return ({
        type: USER_ACTION_TYPES.LOG_IN_SUCCESS,
        payload: user
    })
}

export const logInFailed = (error) => {
    return ({
        type: USER_ACTION_TYPES.LOG_IN_FAILED,
        payload: error
    })
}


export const logOutStart = () => {
    return ({
        type: USER_ACTION_TYPES.LOG_OUT_START
    })
}

export const logOutSuccess = () => {
    return ({
        type: USER_ACTION_TYPES.LOG_OUT_SUCCESS
    })
}

export const logOutFailed = (error) => {
    return ({
        type: USER_ACTION_TYPES.LOG_OUT_FAILED,
        payload: error
    })
}
