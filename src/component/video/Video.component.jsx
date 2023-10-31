import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import moment from "moment/moment"
import numeral from "numeral"
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { AiFillEye } from "react-icons/ai"

import { getVideoDetails } from "../../api/video-details/videosDetails.api"
import { getChannelDetails } from "../../api/channel-details/channelDetails.api"

import "./_videos.scss"



const Video = ({ video, channelScreen }) => {

    const navigate = useNavigate()

    const [views, setViews] = useState(null)
    const [duration, setDuration] = useState(null)
    const [channelIcon, setChannelIcon] = useState(null)

    const seconds = moment.duration(duration).asSeconds()
    const _duration = moment.utc(seconds * 1000).format("mm:ss")

    const { id,
        snippet: {
            channelId,
            channelTitle,
            title,
            publishedAt,
            thumbnails: { medium }
        },
        contentDetails
    } = video

    const _videoId = id?.videoId || contentDetails?.videoId || id

    useEffect(() => {
        (async () => {
            const { data } = await getVideoDetails(_videoId)
            setDuration(data.items[0].contentDetails.duration)
            setViews(data.items[0].statistics.viewCount)
        })()
    }, [_videoId])


    useEffect(() => {
        (async () => {
            const { data } = await getChannelDetails(channelId, "snippet,contentDetails,statistics")
            setChannelIcon(data.items[0].snippet.thumbnails.medium.url)
        })()
    }, [channelId])

    const handlerVideoClick = () => {
        navigate(`/watch/${_videoId}`)
    }


    return (
        <>
            <div className="video" onClick={handlerVideoClick}>
                <div className="video__top">
                    <LazyLoadImage
                        src={medium.url}
                        effect="blur"
                    />
                    <span className="video__duration">{_duration}</span>
                </div>
                <div className="video__title">
                    {title}
                </div>
                <div className="video__details">
                    <span>
                        <AiFillEye /> {numeral(views).format("0.a")} Views •
                    </span>
                    <span>{moment(publishedAt).fromNow()}</span>
                </div>
                {!channelScreen &&
                    <div className="video__channel">
                        <LazyLoadImage
                            src={channelIcon}
                            effect="blur"
                        />
                        <p>{channelTitle}</p>
                    </div>
                }
            </div>
        </>
    )
}

export default Video