import { useDispatch, useSelector } from "react-redux"
import "./channel.scss"
import { selectChannelVideos, selectIsLoading } from "../../store/channel-videos/channel-videos.selector"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { fetchChannelVideosStart } from "../../store/channel-videos/channel-videos.action"
import { Col, Container, Row } from "react-bootstrap"
import Video from "../../component/video/Video.component"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import { fetchChannelByIdStart } from "../../store/channel/channel.action"
import numeral from "numeral"
import { selectchannel } from "../../store/channel/channel.selector"

const Channel = () => {

    const { channelId } = useParams()

    const dispatch = useDispatch()

    const channelDetails = useSelector(selectchannel)
    const { snippet, statistics } = channelDetails

    const videos = useSelector(selectChannelVideos)
    const isLoading = useSelector(selectIsLoading)

    useEffect(() => {
        dispatch(fetchChannelVideosStart(channelId))
        dispatch(fetchChannelByIdStart(channelId))
    }, [dispatch,channelId])



    return (
        <>

            <div className='px-5 py-2 my-2 d-flex justify-content-between align-items-center channelHeader'>
                <div className='d-flex align-items-center'>
                    <img src={snippet?.thumbnails?.default?.url} alt='' />

                    <div className='ml-3 channelHeader__details'>
                        <h3>{snippet?.title}</h3>
                        <span>
                            {numeral(statistics?.subscriberCount).format('0.a')}{' '}
                            subscribers
                        </span>
                    </div>
                </div>

                <button>Subscribe</button>
            </div>


            <Container>
                <Row className="mt-2">
                    {
                        !isLoading ?
                            videos?.map(video => (
                                <Col md={4} lg={3}>
                                    <Video video={video} channelScreen />
                                </Col>
                            )) :
                            [...Array(15)].map(() => (
                                <Col md={4} lg={3}>
                                    <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
                                        <Skeleton width='100%' height='140px' />
                                    </SkeletonTheme>
                                </Col>
                            ))
                    }
                </Row>
            </Container>
        </>
    )
}

export default Channel