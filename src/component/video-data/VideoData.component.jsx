import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import numeral from "numeral"
import moment from "moment"

import { MdThumbUp, MdThumbDown } from "react-icons/md"
import ShowMoreText from "react-show-more-text"

import { fetchChannelByIdStart, fetchSubscriptionStatusStart } from "../../store/channel/channel.action"

import "./_video-data.scss"
import { selectchannel } from "../../store/channel/channel.selector"
import { selectAccessToken } from "../../store/user/user.selector"
import { Helmet } from "react-helmet"

const VideoData = ({ video: { snippet, statistics }, videoId }) => {

    const dispatch = useDispatch()

    const { title, publishedAt, description, channelId, channelTitle } = snippet
    const { viewCount, likeCount, dislikeCount } = statistics

    const accessToken = useSelector(selectAccessToken)
    const { snippet: channelSnippet, statistics: channelStatistics } = useSelector(selectchannel)


    useEffect(() => {
        dispatch(fetchChannelByIdStart(channelId))
        // dispatch(fetchSubscriptionStatusStart(channelId,accessToken))
    }, [dispatch,channelId, accessToken])

    return (
        <div className="videoData py-2">

            <Helmet title={title} description={description} />

            <div className="videoData__top">
                <h5>{title}</h5>
                <div className="py-1 d-flex justify-content-between align-items-center">
                    <span>
                        {numeral(viewCount).format("0.a")} Views •
                        {moment(publishedAt).fromNow()}
                    </span>

                    <div>
                        <span className="">
                            <MdThumbUp size={26} /> {numeral(likeCount).format("0.a")}
                        </span>

                        <span className="m-3">
                            <MdThumbDown size={26} /> {numeral(dislikeCount).format("0.a")}
                        </span>
                    </div>
                </div>
            </div>

            <div className="py-3 my-2 videoData__channel d-flex justify-content-between align-items-center">
                <div className="d-flex">

                    <img src={channelSnippet?.thumbnails?.default?.url}
                        alt=""
                        className="rounded-circle"
                    />

                    <div className="d-flex flex-column">
                        <span>{channelTitle}</span>
                        <span>{numeral(channelStatistics?.subscriberCount).format("0.a")} Subscribers</span>
                    </div>

                </div>

                <button className="btn border-0 p-2 m-2">
                    Subscribe
                </button>

            </div>

            <div className="videoData__description">
                <ShowMoreText
                    lines={3}
                    more="SHOW MORE"
                    less="SHOW LESS"
                    anchorClass="showMoreText"
                    expanded={false}
                >
                    {description}     </ShowMoreText>
            </div>
        </div>
    )
}

export default VideoData