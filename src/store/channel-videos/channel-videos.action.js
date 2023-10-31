import { CHANNEL_VIDEOS_ACTION_TYPES } from "./channel-videos.types"


export const fetchChannelVideosStart = (channelId) => {
    return ({
        type: CHANNEL_VIDEOS_ACTION_TYPES.FETCH_VIDEOS_BY_CHANNEL_START,
        payload: channelId
    })
}

export const fetchChannelVideosSuccess = (videos) => {
    return ({
        type: CHANNEL_VIDEOS_ACTION_TYPES.FETCH_VIDEOS_BY_CHANNEL_SUCCESS,
        payload: videos
    })
}

export const fetchChannelVideosFailed = (error) => {
    return ({
        type: CHANNEL_VIDEOS_ACTION_TYPES.FETCH_VIDEOS_BY_CHANNEL_FAILED,
        payload: error
    })
}
