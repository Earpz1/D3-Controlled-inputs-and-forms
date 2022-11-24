import { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

class AddComment extends Component {
  state = {
    showForm: false,
    commentAdded: false,
    addComment: {
      comment: '',
      rate: '1',
      elementId: this.props.bookID,
    },
  }

  handleChange = (value, fieldToSet) => {
    this.setState({
      addComment: {
        ...this.state.addComment,
        [fieldToSet]: value,
      },
    })
  }

  formControl = () => {
    if (this.state.showForm === true) {
      this.setState({
        showForm: false,
      })
    } else {
      this.setState({
        showForm: true,
      })
    }
  }

  submitComment = async (event) => {
    this.setState({
      showForm: false,
    })

    this.props.fetchComments()

    event.preventDefault()
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/',
        {
          method: 'POST',
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
        alert('Your comment was added!')
      }
    } catch (error) {}
  }

  render() {
    return (
      <>
        <p className="add-comment" onClick={this.formControl}>
          Add a comment
        </p>
        {this.state.showForm && (
          <Form onSubmit={this.submitComment}>
            <Form.Group>
              <Form.Label>Rating</Form.Label>
              <Form.Control
                onChange={(event) =>
                  this.handleChange(event.target.value, 'rate')
                }
                as="select"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Comments</Form.Label>
              <Form.Control
                onChange={(event) =>
                  this.handleChange(event.target.value, 'comment')
                }
                as="textarea"
                rows={3}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        )}
      </>
    )
  }
}
export default AddComment
