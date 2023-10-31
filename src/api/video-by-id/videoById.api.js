import baseAPI from "../baseApi"

export const getVideosById = (id) => {
    return baseAPI("/videos", {
        params: {
            part: "snippet,statistics",
            id: id,
        }
    })
}