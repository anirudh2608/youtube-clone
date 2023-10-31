import { all, call, put, takeLatest } from "redux-saga/effects";

import {
    fetchSearchVideosFailed,
    fetchSearchVideosSuccess
} from "./search-results.action";


import { getSearchVideos } from "../../api/search-videos/searchVideos.api";

import { SEARCH_VIDEOS_ACTION_TYPES } from "./search-results.types";


function* fetchSearchVideos({ payload }) {
    try {
        const { keyword, nextPageToken } = payload

        const { data: { items } } = yield getSearchVideos(keyword, nextPageToken, "video,channel")

        yield put(fetchSearchVideosSuccess(items))

    } catch (error) {
        yield put(fetchSearchVideosFailed(error))
    }
}



function* onFetchSearchVideosStart() {
    yield takeLatest(SEARCH_VIDEOS_ACTION_TYPES.FETCH_SEARCH_VIDEOS_START, fetchSearchVideos)
}


export function* searchVideosSagas() {
    yield all([
        call(onFetchSearchVideosStart)
    ])
}