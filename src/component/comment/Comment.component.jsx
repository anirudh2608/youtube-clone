import moment from "moment"

import "./_comment.scss"

const Comment = ({ comment }) => {

    const { textDisplay, authorDisplayName, authorProfileImageUrl, publishedAt } = comment

    return (
        <div className="p-2 comment d-flex">
            <img
                src={authorProfileImageUrl}
                alt={authorDisplayName}
                className='rounded-circle'
            />
            <div className="comment__body">
                <p className="mb-1 comment__header">
                    {authorDisplayName} • {moment(publishedAt).fromNow()}
                </p>
                <p className='mb-0'>{textDisplay}</p>
            </div>
        </div>
    )
}

export default Comment