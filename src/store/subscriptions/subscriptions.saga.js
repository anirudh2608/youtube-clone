import { all, call, put, takeLatest } from "redux-saga/effects";

import {
    fetchSubscriptionsFailed,
    fetchSubscriptionsStart
} from "./subscriptions.action";

import { SUBSCRIPTIONS_ACTION_TYPES } from "./subscriptions.types"

import { getSubscriptions } from "../../api/subscriptions/subscriptions.api";


function* fetchSubscriptionsVideos({ payload }) {
    try {

        const { data: { items } } = yield getSubscriptions(payload)

        yield put(fetchSubscriptionsStart(items))

    } catch (error) {
        yield put(fetchSubscriptionsFailed(error))
    }
}



function* onFetchSubscriptionsStart() {
    yield takeLatest(SUBSCRIPTIONS_ACTION_TYPES.FETCH_SUBSCRIPTIONS_START, fetchSubscriptionsVideos)
}


export function* subscriptionsSagas() {
    yield all([
        call(onFetchSubscriptionsStart)
    ])
}