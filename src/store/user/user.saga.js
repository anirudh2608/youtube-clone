import { all, takeLatest, call, put } from 'redux-saga/effects';

import { USER_ACTION_TYPES } from './user.types';

import { logInSuccess, logInFailed, logOutSuccess, logOutFailed } from './user.action';

import {
    getCurrentUser,
    logInWithGooglePopup,
    logOutUser
} from '../../utils/firebase.utils';


export function* logOut() {
    try {
        yield call(logOutUser)
        yield put(logOutSuccess())
    } catch (error) {
        yield put(logOutFailed(error))
    }
}

export function* logInWithGoogle() {
    try {
        const { user } = yield call(logInWithGooglePopup)
        const accessToken = user.accessToken
        const userDetails = {
            name: user.displayName,
            image: user.photoURL
        }
        yield put(logInSuccess({ accessToken, userDetails }))
    }
    catch (error) {
        yield put(logInFailed(error))
    }
}

export function* isUserAuthenticated() {
    try {
        const authUser = yield call(getCurrentUser)
        if (!authUser) return

        const accessToken = authUser.accessToken
        const userDetails = {
            name: authUser.displayName,
            image: authUser.photoURL
        }

        yield put(logInSuccess({ accessToken, userDetails }))
    }
    catch (error) {
        yield put(logInFailed(error))
    }
}


export function* onGoogleLogInStart() {
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_LOG_IN_START, logInWithGoogle)
}

export function* onCheckUserSession() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onLogOutStart() {
    yield takeLatest(USER_ACTION_TYPES.LOG_OUT_START, logOut)
}

export function* userSagas() {
    yield all([
        call(onCheckUserSession),
        call(onGoogleLogInStart),
        call(onLogOutStart)
    ])
}       