import { Component } from 'react'

class DeleteComment extends Component {
  state = {
    commentID: this.props.commentID,
    isDeleted: false,
  }

  deleteComment = async (event) => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' +
          this.state.commentID,
        {
          method: 'DELETE',
          body: JSON.stringify(this.state.addComment),
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZWIwNmQ0YmUzZDAwMTU4NDVmY2EiLCJpYXQiOjE2NjkyOTQwNzYsImV4cCI6MTY3MDUwMzY3Nn0.yUXoyDpoZLr_4DRVq3qHa5003DCxWWt5so3fH4CWPIg',
          },
        },
      )
      if (response.ok) {
        this.props.fetchComments()
        alert('Your comment was deleted!')
      }
    } catch (error) {}
  }

  render() {
    return (
      <>
        <span className="delete-comment" onClick={this.deleteComment}>
          Delete
        </span>
      </>
    )
  }
}
export default DeleteComment
