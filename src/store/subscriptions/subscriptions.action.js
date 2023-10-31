import { SUBSCRIPTIONS_ACTION_TYPES } from "./subscriptions.types"


export const fetchSubscriptionsStart = (accessToken) => {
    return ({
        type: SUBSCRIPTIONS_ACTION_TYPES.FETCH_SUBSCRIPTIONS_START,
        payload: accessToken
    })
}

export const fetchSubscriptionsSuccess = (subscriptions) => {
    return ({
        type: SUBSCRIPTIONS_ACTION_TYPES.FETCH_SUBSCRIPTIONS_SUCCESS,
        payload: subscriptions
    })
}

export const fetchSubscriptionsFailed = (error) => {
    return ({
        type: SUBSCRIPTIONS_ACTION_TYPES.FETCH_SUBSCRIPTIONS_FAILED,
        payload: error
    })
}

