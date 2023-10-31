import baseAPI from "../baseApi"

export const getSubscriptions = (accessToken) => {
    return baseAPI("/subscriptions", {
        params: {
            part: "snippet,contentDetails",
            mine: true
        },
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
}