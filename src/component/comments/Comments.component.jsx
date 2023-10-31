import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"

import { addCommentStart, fetchCommentsStart } from "../../store/comments/comments.action"

import { selectComments } from "../../store/comments/comments.selector"

import Comment from "../comment/Comment.component"

import "./_comments.scss"
import { selectAccessToken, selectCurrentUser } from "../../store/user/user.selector"




const Comments = ({ videoId, totalComments }) => {

    const [text, setText] = useState("")

    const dispatch = useDispatch()

    const currentUser = useSelector(selectCurrentUser)
    const photoURL = currentUser?.image

    const accessToken = useSelector(selectAccessToken)
    const comments = useSelector(selectComments)
    const _comments = comments?.map(comment => comment?.snippet?.topLevelComment.snippet)


    useEffect(() => {
        dispatch(fetchCommentsStart(videoId))
    }, [dispatch,videoId])

    const handleComment = (e) => {
        e.preventDefault()

        if (text.length === 0) return

        // dispatch(addCommentStart(videoId, text, accessToken))
        setText("")
    }

    return (
        <div className="comments">
            <p>{`${totalComments} Comments`}</p>
            <div className="my-2 comments__form d-flex w-100">

                <img
                    className='rounded-circle'
                    src={photoURL}
                    alt="" />

                <form
                    onSubmit={handleComment}
                    className="d-flex flex-grow-1">
                    <input
                        type="text"
                        className="flex-grow-1"
                        placeholder="write a comment..."
                        value={text}
                        onChange={e => setText(e.target.value)}
                    />
                    <button className='p-2 border-0'>
                        Comment
                    </button>
                </form>

            </div>
            <div className="comments__list">
                {
                    _comments.map((comment, i) => (
                        <Comment comment={comment} key={i} />
                    ))
                }
            </div>
        </div>
    )
}

export default Comments