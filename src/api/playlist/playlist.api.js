import baseAPI from "../baseApi"

export const getPlaylist = (uploadPlaylistId) => {
    return baseAPI('/playlistItems', {
        params: {
            part: 'snippet,contentDetails',
            playlistId: uploadPlaylistId,
            maxResults: 30,
        }
    })
}