import { all, call, put, takeLatest } from "redux-saga/effects";

import {
     fetchVideoByIdSuccess,
     fetchVideoByIdFailed 
    } from "./watch-video.action";

import { getVideosById } from "../../api/video-by-id/videoById.api";

import { WATCH_VIDEO_ACTION_TYPES } from "./watch-video.types";



function* fetchVideoById({ payload }) {
    try {
        const { data:{items} } = yield call(getVideosById, payload)
        yield put(fetchVideoByIdSuccess(items[0]))

    } catch (error) {
        yield put(fetchVideoByIdFailed(error.message))
    }
}


function* onFetchVideoByIdStart() {
    yield takeLatest(WATCH_VIDEO_ACTION_TYPES.FETCH_VIDEO_BY_ID_START, fetchVideoById)
}


export function* watchVideosSagas() {
    yield all([
        call(onFetchVideoByIdStart)
    ])
}