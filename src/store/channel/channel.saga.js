import { all, call, put, takeLatest } from "redux-saga/effects";

import {
    fetchChannelByIdSuccess,
    fetchChannelByIdFailed,
    fetchSubscriptionStatusSuccess,
    fetchSubscriptionStatusFailed
} from "./channel.action";

import { getChannelDetails } from "../../api/channel-details/channelDetails.api";

import { CHANNEL_ACTION_TYPES } from "./channel.types";
import { getChannelSubscription } from "../../api/channel-subscription/channelSubscription.api";



function* fetchChannelById({ payload }) {
    try {
        const { data: { items } } = yield call(getChannelDetails, payload,"snippet,contentDetails,statistics")
        yield put(fetchChannelByIdSuccess(items[0]))

    } catch (error) {
        yield put(fetchChannelByIdFailed(error.message))
    }
}

function* fetchSubcriptionStatus({ payload: { channelId, accessToken } }) {
    try {
        const { data } = yield call(getChannelSubscription, channelId, accessToken)
        yield console.log(data)
        // yield put(fetchChannelByIdSuccess())
    } catch (error) {
        yield put(fetchSubscriptionStatusFailed(error))
    }
}

function* onFetchChannelByIdStart() {
    yield takeLatest(CHANNEL_ACTION_TYPES.FETCH_CHANNEL_BY_ID_START, fetchChannelById)
}

function* onFetchSubcriptionStatusStart() {
    yield takeLatest(CHANNEL_ACTION_TYPES.FETCH_SUBSCRIPTION_STATUS_START,fetchSubcriptionStatus)
}

export function* channelSagas() {
    yield all([
        call(onFetchChannelByIdStart),
        call(onFetchSubcriptionStatusStart),
    ])
}