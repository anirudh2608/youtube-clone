import baseAPI from "../baseApi"

export const getChannelSubscription = (channelId, accessToken) => {
    return baseAPI("/subscriptions", {
        params: {
            part: 'snippet',
            forChannelId: channelId,
            mine: false,
        },
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    })
}