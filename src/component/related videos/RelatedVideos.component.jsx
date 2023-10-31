import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Col, Row } from 'react-bootstrap';
import moment from "moment/moment"
import numeral from "numeral"
import { AiFillEye } from "react-icons/ai"

import baseAPI from '../../api/baseApi';

import "./_related-videos.scss"



const RelatedVideos = ({ video: { id, snippet, contentDetails }, searchVideo, subscription }) => {

    const navigate = useNavigate()

    const { videoId, kind } = id

    const {
        title,
        publishedAt,
        description,
        thumbnails: { medium },
        channelTitle,
        channelId,
        resourceId
    } = snippet

    const isVideo = !(kind === 'youtube#channel' || subscription)

    const [duration, setDuration] = useState()
    const [views, setViews] = useState()
    const [channelIcon, setChannelIcon] = useState(null)

    const seconds = moment.duration(duration).asSeconds()
    const _duration = moment.utc(seconds * 1000).format("mm:ss")


    useEffect(() => {
        if (isVideo)
            (async () => {
                const { data: { items } } = await baseAPI("/videos", {
                    params: {
                        part: "contentDetails,statistics",
                        id: videoId
                    }
                })
                setDuration(items[0].contentDetails.duration)
                setViews(items[0].statistics.viewCount)
            })()
    }, [videoId, isVideo])


    useEffect(() => {
        (async () => {
            const { data: { items } } = await baseAPI('/channels', {
                params: {
                    part: 'snippet',
                    id: channelId,
                }
            })

            setChannelIcon(items[0].snippet.thumbnails.default)
        })()
    }, [channelId])

    const _channelId = resourceId?.channelId || channelId

    const handleWatchVideo = () => {
        isVideo
            ? navigate(`/watch/${videoId}`)
            :
            navigate(`/channel/${_channelId}`)
    }

    const thumbnail = !isVideo && 'RelatedVideos__thumbnail-channel'

    return (
        <Row className='RelatedVideos m-1 py-2  align-items-center' onClick={handleWatchVideo}>
            <Col xs={6} md={searchVideo || subscription ? 4 : 6} className='RelatedVideos__left'>
                <LazyLoadImage
                    src={medium?.url}
                    effect='blur'
                    className={`RelatedVideos__thumbnail ${thumbnail}`}
                    wrapperClassName='RelatedVideos__thumbnail-wrapper'
                />
                {isVideo && <span className='RelatedVideos__duration'>{_duration}</span>}

            </Col>

            <Col xs={6} md={searchVideo || subscription ? 8 : 6} className='RelatedVideos__right p-0'>
                <p className="RelatedVideos__title mb-1">
                    {title}
                </p>

                {isVideo && <div className="RelatedVideos__details">
                    <AiFillEye /> {numeral(views).format("0.a")} Views •
                    {moment(publishedAt).fromNow()}
                </div>
                }

                {
                    (searchVideo || subscription) && (
                        isVideo && <p className="mt-1">
                            {description}
                        </p>
                    )
                }

                <div className="RelatedVideos__channel d-flex align-items-center my-1">

                    {isVideo &&
                        <LazyLoadImage
                            src={channelIcon?.url}
                            effect='blur'
                        />
                    }

                    <p className='mb-0'>
                        {channelTitle}
                    </p>
                </div>
                
                {subscription &&
                    <p className='mt-2'>

                        {contentDetails.totalItemCount} Videos

                    </p>
                }
            </Col>
        </Row>

    )
}

export default RelatedVideos