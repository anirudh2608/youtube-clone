import baseAPI from "../baseApi"

export const getSearchVideos = (keyword, nextPageToken, type) => {
    return baseAPI("/search", {
        params: {
            part: "snippet",
            maxResults: 20,
            pageTokken: nextPageToken,
            q: keyword,
            type
        }
    })
}