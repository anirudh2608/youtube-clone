import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Col, Row } from "react-bootstrap"

import { fetchVideoByIdStart } from "../../store/watchVideo/watch-video.action"
import { fetchRelatedVideosStart } from "../../store/related-videos/relatedVideos.action"

import { selectVideo } from "../../store/watchVideo/watch-video.selector"
import { selectIsLoading, selectRelatedVideos } from "../../store/related-videos/relatedVideos.selector"

import VideoData from "../../component/video-data/VideoData.component"
import Comments from "../../component/comments/Comments.component"
import RelatedVideos from "../../component/related videos/RelatedVideos.component"

import Skeleton, { SkeletonTheme } from "react-loading-skeleton"

import "./_watch-screen.scss"



const WatchScreen = () => {

    const { id } = useParams()
    const dispatch = useDispatch()

    const selectedVideo = useSelector(selectVideo)

    const relatedVideosLoading = useSelector(selectIsLoading)
    const relatedVideos = useSelector(selectRelatedVideos)

    useEffect(() => {
        dispatch(fetchVideoByIdStart(id))
    }, [dispatch,id])

    
    useEffect(() => {
        if (selectVideo)
            dispatch(fetchRelatedVideosStart(selectVideo?.snippet?.categoryId))
    }, [dispatch,selectedVideo])

    return (
        <Row>

            <Col lg={8} >
                <div className="watchScreen__player">
                    <iframe
                        src={`https://www.youtube.com/embed/${id}`}
                        title={selectedVideo?.snippet?.title}
                        allowFullScreen
                        width="100%"
                        height="100%"
                        frameborder="0"
                    ></iframe>
                </div>

                {selectedVideo?.snippet ?
                    <VideoData video={selectedVideo} videoId={id} />
                    :
                    <h6>momo</h6>}
                <Comments videoId={id} totalComments={selectedVideo?.statistics?.commentCount} />
            </Col>

            <Col lg={4} >
                {!relatedVideosLoading ?
                    relatedVideos?.map((video) =>
                        <RelatedVideos key={video.id.videoId} video={video} />
                    ) :
                    <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
                        <Skeleton width="100%" height="130px" count={15} />
                    </SkeletonTheme>
                }
            </Col>

        </Row>
    )
}

export default WatchScreen 