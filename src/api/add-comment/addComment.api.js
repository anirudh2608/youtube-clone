import baseAPI from "../baseApi"

export const addVideoComment = (obj, accessToken) => {
    return baseAPI.post("/commentThreads", obj, {
        params: {
            part: "snippet",
        },
        headers:{
            Authorization: `Bearer ${accessToken}`
        }
    })
}