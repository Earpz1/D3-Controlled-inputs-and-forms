import { useEffect } from 'react'
import { useState } from 'react'

const DeleteComment = (props) => {
  const [commentID, setCommentID] = useState(props.commentID)

  useEffect(() => {
    setCommentID(props.commentID)
  }, [props.commentID])

  const deleteComment = async (event) => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' +
          props.commentID,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZWIwNmQ0YmUzZDAwMTU4NDVmY2EiLCJpYXQiOjE2NjkyOTQwNzYsImV4cCI6MTY3MDUwMzY3Nn0.yUXoyDpoZLr_4DRVq3qHa5003DCxWWt5so3fH4CWPIg',
          },
        },
      )
      if (response.ok) {
        props.fetchComments()
        alert('Your comment was deleted!')
      }
    } catch (error) {}
  }

  return (
    <>
      <span className="delete-comment" onClick={deleteComment}>
        Delete
      </span>
    </>
  )
}

export default DeleteComment
