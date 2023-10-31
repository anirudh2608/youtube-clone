import baseAPI from "../baseApi"

export const getVideoDetails = (id) => {
    return baseAPI("/videos", {
        params: {
            part: "contentDetails,statistics",
            id: id
        }
    })
}