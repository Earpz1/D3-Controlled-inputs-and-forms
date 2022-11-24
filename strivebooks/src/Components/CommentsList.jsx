import { Component } from 'react'
import AddComment from './AddComment'
import DeleteComment from './DeleteComment'

class CommentsList extends Component {
  state = {
    newCommentadded: false,
  }

  commentAdded = (value) => {
    this.setState({
      newComment: value,
    })
  }
  render() {
    return (
      <>
        {this.props.comments.map((comment) => (
          <p key={comment._id}>
            {comment.comment}
            <br />
            {comment.rate} / 5
            <br />
            <DeleteComment
              fetchComments={this.props.fetchComments}
              commentID={comment._id}
            />
          </p>
        ))}
        <AddComment
          fetchComments={this.props.fetchComments}
          bookID={this.props.bookID}
        />
      </>
    )
  }
}

export default CommentsList
