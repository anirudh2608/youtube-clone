import { all, call, put, takeLatest } from "redux-saga/effects";

import {
    fetchRelatedVideosFailed,
    fetchRelatedVideosSuccess
} from "./relatedVideos.action";

import { RELATED_VIDEOS_ACTION_TYPES } from "./relatedVideos.types";
import { getRelatedVideos } from "../../api/related-videos/relatedVideos.api";



function* fetchRelatedVideos({ payload }) {
    try {
        const { data: { items } } = yield call(getRelatedVideos, payload)
        yield put(fetchRelatedVideosSuccess(items))

    } catch (error) {
        yield put(fetchRelatedVideosFailed(error.message))
    }
}


function* onFetchRelatedVideosStart() {
    yield takeLatest(RELATED_VIDEOS_ACTION_TYPES.FETCH_RELATED_VIDEOS_START, fetchRelatedVideos)
}


export function* relatedVideosSagas() {
    yield all([
        call(onFetchRelatedVideosStart),
    ])
}