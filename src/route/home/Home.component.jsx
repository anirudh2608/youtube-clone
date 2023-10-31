import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Col, Container, Row } from "react-bootstrap"

import InfiniteScroll from "react-infinite-scroll-component"

import { fetchCategoryVideosStart, fetchPopularVideosStart } from "../../store/videos/videos.action"

import { selectActiveCategory, selectIsLoading, selectNextPageToken, selectVideos } from "../../store/videos/videos.selector"

import CategoriesBar from "../../component/categories bar/CategoriesBar.component"
import Video from "../../component/video/Video.component"
import SkeletonVideo from "../../component/skeleton/skeletonVideo.component"


const Home = () => {

    const dispatch = useDispatch()

    const isLoading = useSelector(selectIsLoading)
    const nextPageToken = useSelector(selectNextPageToken)
    const activeCategory = useSelector(selectActiveCategory)

    const videos = useSelector(selectVideos)

    useEffect(() => {
        dispatch(fetchPopularVideosStart(nextPageToken))
    }, [dispatch])

    const fetchData = () => {
        if (activeCategory === "All") {
            dispatch(fetchPopularVideosStart(nextPageToken))
        } else {
            dispatch(fetchCategoryVideosStart(activeCategory, nextPageToken))
        }
    }


    return (
        <Container>
            <CategoriesBar />
            <InfiniteScroll
                dataLength={videos.length}
                next={fetchData}
                hasMore={true}
                loader={
                    <div className="spinner-border text-danger d-block mx-auto"></div>
                }
            >
                <Row>
                    {!isLoading ?
                        (videos.map((video) => {
                            const { id } = video
                            return <>
                                <Col key={id} lg={3} md={4} >
                                    <Video video={video} />
                                </Col>
                            </>
                        })) :
                        [...Array(20)].map(() => (
                            <Col lg={3} md={4}>
                                <SkeletonVideo />
                            </Col>
                        ))
                    }

                </Row>
            </InfiniteScroll>
        </Container >
    )
}

export default Home