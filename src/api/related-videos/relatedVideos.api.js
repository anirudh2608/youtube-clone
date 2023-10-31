import baseAPI from "../baseApi"

export const getRelatedVideos = (id) => {
    return baseAPI('/search', {
        params: {
            part: 'snippet',
            chart: "mostPopular",
            videoCategoryId: id,
            maxResults: 15,
            type: 'video',
        }
    })
}