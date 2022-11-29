import CommentsList from './CommentsList'
import AddComment from './AddComment'
import { useState } from 'react'
import { useEffect } from 'react'

const CommentArea = (props) => {
  const [comments, setComments] = useState([])
  const [addComment, setaddComment] = useState(true)

  useEffect(() => {
    fetchComments()
  }, [])

  useEffect(() => {
    fetchComments()
  }, [props.bookID])

  const fetchComments = async () => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' + props.bookID,
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZWIwNmQ0YmUzZDAwMTU4NDVmY2EiLCJpYXQiOjE2NjkyOTQwNzYsImV4cCI6MTY3MDUwMzY3Nn0.yUXoyDpoZLr_4DRVq3qHa5003DCxWWt5so3fH4CWPIg',
          },
        },
      )
      if (response.ok) {
        let commentsList = await response.json()
        setComments(commentsList)
      }
    } catch (error) {}
  }

  return (
    <div>
      <h4>Comments</h4>
      <div className="comment-box">
        <CommentsList
          comments={comments}
          bookID={props.bookID}
          fetchComments={fetchComments}
        />
      </div>
    </div>
  )
}

export default CommentArea
