import { all, call } from 'redux-saga/effects'

import { userSagas } from './user/user.saga'
import { videosSagas } from './videos/videos.saga'
import { watchVideosSagas } from './watchVideo/watch-video.saga'
import { channelSagas } from './channel/channel.saga'
import { commentsSagas } from './comments/comments.saga'
import { relatedVideosSagas } from './related-videos/relatedVideos.saga'
import { searchVideosSagas } from './search-results/search-results.saga'
import { subscriptionsSagas } from './subscriptions/subscriptions.saga'
import { channelVideosSagas } from './channel-videos/channel-videos.saga'

export function* rootSaga() {
    yield all([
        call(userSagas),
        call(videosSagas),
        call(watchVideosSagas),
        call(channelSagas),
        call(commentsSagas),
        call(relatedVideosSagas),
        call(searchVideosSagas),
        call(subscriptionsSagas),
        call(channelVideosSagas)
    ])
}