import { all, call, put, takeLatest } from "redux-saga/effects";

import {
    addCommentFailed,
    addCommentSuccess,
    fetchCommentsFailed,
    fetchCommentsSuccess
} from "./comments.action";

import { getVideoComments } from "../../api/comments/comments.api";
import { addVideoComment } from "../../api/add-comment/addComment.api";

import { COMMENTS_ACTION_TYPES } from "./comments.types";



function* fetchComments({ payload }) {
    try {
        const { data: { items } } = yield call(getVideoComments, payload)
        yield put(fetchCommentsSuccess(items))

    } catch (error) {
        yield put(fetchCommentsFailed(error.message))
    }
}


function* addComment({ payload: { videoId, comment, accessToken } }) {

    const obj = {
        snippet: {
            videoId,
            topLevelComment: {
                snippet: {
                    textOriginal: comment
                }
            }
        }
    }

    try {
        yield call(addVideoComment, obj, accessToken)
        yield put(addCommentSuccess)
        yield setTimeout(() => call(fetchComments, videoId), 3500)

    } catch (error) {
        yield put(addCommentFailed(error.message))
    }
}


function* onFetchCommentsStart() {
    yield takeLatest(COMMENTS_ACTION_TYPES.FETCH_VIDEO_COMMENTS_START, fetchComments)
}

function* onAddCommentStart() {
    yield takeLatest(COMMENTS_ACTION_TYPES.ADD_COMMENT_START, addComment)
}


export function* commentsSagas() {
    yield all([
        call(onFetchCommentsStart),
        call(onAddCommentStart)
    ])
}