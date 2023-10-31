import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchChannelVideosFailed, fetchChannelVideosSuccess } from "./channel-videos.action";

import { getChannelDetails } from "../../api/channel-details/channelDetails.api";

import { CHANNEL_VIDEOS_ACTION_TYPES } from "./channel-videos.types";
import { getPlaylist } from "../../api/playlist/playlist.api";



function* fetchChannelVideo({ payload }) {
    try {
        const { data: { items } } = yield call(getChannelDetails, payload, "contentDetails")
        const uploadPlaylistId = items[0].contentDetails.relatedPlaylists.uploads

        const { data } = yield call(getPlaylist, uploadPlaylistId)
        yield put(fetchChannelVideosSuccess(data.items))

    } catch (error) {
        yield put(fetchChannelVideosFailed(error.message))
    }
}

function* onFetchChannelVideoStart() {
    yield takeLatest(CHANNEL_VIDEOS_ACTION_TYPES.FETCH_VIDEOS_BY_CHANNEL_START, fetchChannelVideo)
}

export function* channelVideosSagas() {
    yield all([
        call(onFetchChannelVideoStart),
    ])
}