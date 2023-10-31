import baseAPI from "../baseApi"

export const getChannelDetails = (channelId, part) => {
    return baseAPI("/channels", {
        params: {
            part,
            id: channelId
        }
    })
}