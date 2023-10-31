import baseAPI from "../baseApi"

export const popularVideos = (nextPageToken) => {
    return baseAPI("/videos", {
        params: {
            part: "snippet,contentDetails,statistics",
            chart: "mostPopular",
            regionCode: "IN",
            maxResults: 20,
            pageTokken: nextPageToken
        }
    })
}