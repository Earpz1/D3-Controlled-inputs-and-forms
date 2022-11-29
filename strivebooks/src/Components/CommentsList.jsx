import AddComment from './AddComment'
import DeleteComment from './DeleteComment'
import { useState } from 'react'

const CommentsList = (props) => {
  const [newCommentadded, setnewCommentadded] = useState(false)
  const [newComment, setnewComment] = useState()

  const commentAdded = (value) => {
    setnewComment(value)
  }

  return (
    <>
      {props.comments.map((comment) => (
        <p key={comment._id}>
          {comment.comment}
          <br />
          {comment.rate} / 5
          <br />
          <DeleteComment
            fetchComments={props.fetchComments}
            commentID={comment._id}
          />
        </p>
      ))}
      <AddComment fetchComments={props.fetchComments} bookID={props.bookID} />
    </>
  )
}

export default CommentsList
