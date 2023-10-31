import { all, call, put, takeLatest } from "redux-saga/effects";

import {
    fetchCategoryVideosFailed,
    fetchCategoryVideosSuccess,
    fetchPopularVideosFailed,
    fetchPopularVideosSuccess
} from "./videos.action";

import { popularVideos } from "../../api/popular-videos/popularVideos";
import { getSearchVideos } from "../../api/search-videos/searchVideos.api";

import { VIDEOS_ACTION_TYPES } from "./videos.types";



function* fetchPopularVideos({ payload }) {

    try {
        const { data } = yield call(popularVideos, payload)
        const { items, nextPageToken } = data

        yield put(fetchPopularVideosSuccess({
            videos: items,
            nextPageToken: nextPageToken,
            activeCategory: "All"
        }))

    } catch (error) {
        yield console.log(error)
        yield put(fetchPopularVideosFailed(error))
    }

}

function* fetchCategoryVideos({ payload }) {
    try {
        const { category, nextPageToken } = payload

        const { data } = yield getSearchVideos(category, nextPageToken, "video")
        const { items } = data

        yield put(fetchCategoryVideosSuccess({
            videos: items,
            nextPageToken,
            activeCategory: category
        }))

    } catch (error) {
        yield put(fetchCategoryVideosFailed(error))
    }
}




function* onFetchPopularVideosStart() {
    yield takeLatest(VIDEOS_ACTION_TYPES.FETCH_POPULAR_VIDEOS_START, fetchPopularVideos)
}

function* onFetchCategoryVideosStart() {
    yield takeLatest(VIDEOS_ACTION_TYPES.FETCH_CATEGORY_VIDEOS_START, fetchCategoryVideos)
}



export function* videosSagas() {
    yield all([
        call(onFetchPopularVideosStart),
        call(onFetchCategoryVideosStart)
    ])
}