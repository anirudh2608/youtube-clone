import { useEffect } from "react"
import "./Subscriptions.scss"
import { useDispatch, useSelector } from "react-redux"
import { selectAccessToken } from "../../store/user/user.selector"
import { fetchSubscriptionsStart } from "../../store/subscriptions/subscriptions.action"
import { selectIsLoading, selectSubscriptions } from "../../store/subscriptions/subscriptions.selector"
import { Container } from "react-bootstrap"
import RelatedVideos from "../../component/related videos/RelatedVideos.component"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"

const Subscriptions = () => {

    const dispatch = useDispatch()

    const accessToken = useSelector(selectAccessToken)

    const subscriptions = useSelector(selectSubscriptions)
    const isLoading = useSelector(selectIsLoading)

    useEffect(() => {
        dispatch(fetchSubscriptionsStart(accessToken))
    }, [dispatch,accessToken])

    return (
        <Container fluid>
            {!isLoading ?
                subscriptions?.map((video) => (
                    <RelatedVideos video={video} key={video.id} subscription />
                )) : (
                    <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
                        <Skeleton width='100%' height='160px' count={20} />
                    </SkeletonTheme>
                )
            }
        </Container>
    )
}

export default Subscriptions