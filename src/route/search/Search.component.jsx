import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Container } from "react-bootstrap"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"

import { selectNextPageToken } from "../../store/videos/videos.selector"
import { selectIsLoading, selectSearchVideos } from "../../store/search-results/search-results.selector"

import { fetchSearchVideosStart } from "../../store/search-results/search-results.action"

import RelatedVideos from "../../component/related videos/RelatedVideos.component"

import "react-loading-skeleton/dist/skeleton.css";



const Search = () => {

    const dispatch = useDispatch()

    const { query } = useParams()
    const nextPageToken = useSelector(selectNextPageToken)

    const videos = useSelector(selectSearchVideos)
    const isLoading = useSelector(selectIsLoading)

    useEffect(() => {
        dispatch(fetchSearchVideosStart(query, nextPageToken))
    }, [dispatch,query])


    return (
        <Container>
            {!isLoading ?
                videos?.map((video) => (
                    <RelatedVideos video={video} key={video.id.videoId} searchVideo/>)) :
                (
                    <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
                        <Skeleton width='100%' height='160px' count={20} />
                    </SkeletonTheme>
                )

            }
        </Container>
    )
}

export default Search