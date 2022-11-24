import { Component } from 'react'
import CommentsList from './CommentsList'
import AddComment from './AddComment'

class CommentArea extends Component {
  state = {
    comments: [],
    addComment: true,
  }
  componentDidMount() {
    this.fetchComments()
  }
  fetchComments = async () => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' +
          this.props.bookID,
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZWIwNmQ0YmUzZDAwMTU4NDVmY2EiLCJpYXQiOjE2NjkyOTQwNzYsImV4cCI6MTY3MDUwMzY3Nn0.yUXoyDpoZLr_4DRVq3qHa5003DCxWWt5so3fH4CWPIg',
          },
        },
      )
      if (response.ok) {
        let commentsList = await response.json()

        this.setState({
          comments: commentsList,
        })
      }
    } catch (error) {}
  }

  render() {
    return (
      <div>
        <h4>Comments</h4>
        <div className="comment-box">
          <CommentsList
            comments={this.state.comments}
            bookID={this.props.bookID}
            fetchComments={this.fetchComments}
          />
        </div>
      </div>
    )
  }
}

export default CommentArea
