import baseAPI from "../baseApi"

export const getVideoComments = (videoId) => {
    return baseAPI("/commentThreads", {
        params: {
            part: "snippet",
            videoId
        }
    })
}