import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer";
import { videosReducer } from "./videos/videos.reducer";
import { watchVideoReducer } from "./watchVideo/watch-video.reducer";
import { channelReducer } from "./channel/channel.reducer";
import { commentsReducer } from "./comments/comments.reducer";
import { relatedVideosReducer } from "./related-videos/relatedVideos.reducer";
import { searchVideosReducer } from "./search-results/search-results.reducer";
import { subscriptionsReducer } from "./subscriptions/subscriptions.reducer";
import { channelVideosReducer } from "./channel-videos/channel-videos.reducer";

export const rootReducer = combineReducers({
    user: userReducer,
    videos: videosReducer,
    video: watchVideoReducer,
    channel: channelReducer,
    comments: commentsReducer,
    relatedVideos: relatedVideosReducer,
    searchVideos: searchVideosReducer,
    subscriptions: subscriptionsReducer,
    channelVideos:channelVideosReducer
})