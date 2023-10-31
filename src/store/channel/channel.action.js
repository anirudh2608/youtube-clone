import { CHANNEL_ACTION_TYPES } from "./channel.types"


export const fetchChannelByIdStart = (channelId) => {
    return ({
        type: CHANNEL_ACTION_TYPES.FETCH_CHANNEL_BY_ID_START,
        payload: channelId
    })
}

export const fetchChannelByIdSuccess = (channel) => {
    return ({
        type: CHANNEL_ACTION_TYPES.FETCH_CHANNEL_BY_ID_SUCCESS,
        payload: channel
    })
}

export const fetchChannelByIdFailed = (error) => {
    return ({
        type: CHANNEL_ACTION_TYPES.FETCH_CHANNEL_BY_ID_FAILED,
        payload: error
    })
}



export const fetchSubscriptionStatusStart = (channelId,accessToken) => {
    return ({
        type: CHANNEL_ACTION_TYPES.FETCH_SUBSCRIPTION_STATUS_START,
        payload: {channelId,accessToken}
    })
}

export const fetchSubscriptionStatusSuccess = (status) => {
    return ({
        type: CHANNEL_ACTION_TYPES.FETCH_SUBSCRIPTION_STATUS_SUCCESS,
        payload: status
    })
}

export const fetchSubscriptionStatusFailed = (error) => {
    return ({
        type: CHANNEL_ACTION_TYPES.FETCH_SUBSCRIPTION_STATUS_FAILED,
        payload: error
    })
}


