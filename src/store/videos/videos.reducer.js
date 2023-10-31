import { VIDEOS_ACTION_TYPES } from "./videos.types"

const INITIAL_STATE = {
    videos: [],
    nextPageToken: null,
    activeCategory: "All",
    isLoading: false,
    error: null
}

export const videosReducer = (state = INITIAL_STATE, action) => {

    const { payload, type } = action

    switch (type) {

        case VIDEOS_ACTION_TYPES.FETCH_POPULAR_VIDEOS_START:
        case VIDEOS_ACTION_TYPES.FETCH_CATEGORY_VIDEOS_START:
            return {
                ...state,
                isLoading: true
            }

        case VIDEOS_ACTION_TYPES.FETCH_POPULAR_VIDEOS_SUCCESS:
        case VIDEOS_ACTION_TYPES.FETCH_CATEGORY_VIDEOS_SUCCESS:
            const { videos, nextPageToken, activeCategory } = payload
            return {
                ...state,
                videos:
                    state.activeCategory === activeCategory ?
                        [...state.videos, ...videos] :
                        videos
                ,
                nextPageToken: nextPageToken,
                activeCategory: activeCategory,
                isLoading: false
            }

        case VIDEOS_ACTION_TYPES.FETCH_POPULAR_VIDEOS_FAILED:
        case VIDEOS_ACTION_TYPES.FETCH_CATEGORY_VIDEOS_FAILED:
            return {
                ...state,
                isLoading: false,
                error: payload
            }

        default:
            return state
    }
}