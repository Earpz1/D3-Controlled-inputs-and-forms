import { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'

const AddComment = (props) => {
  const [showForm, setshowForm] = useState(false)
  const [commentAdded, setcommentAdded] = useState(false)
  const [addComment, setaddComment] = useState({
    comment: '',
    rate: '1',
    elementId: props.bookID,
  })

  const handleChange = (value, fieldToSet) => {
    setaddComment({ ...addComment, [fieldToSet]: value })
  }

  const formControl = () => {
    if (showForm === true) {
      setshowForm(false)
    } else {
      setshowForm(true)
    }
  }

  const submitComment = async (event) => {
    setshowForm(false)

    props.fetchComments()

    event.preventDefault()
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/',
        {
          method: 'POST',
          body: JSON.stringify(addComment),
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZWIwNmQ0YmUzZDAwMTU4NDVmY2EiLCJpYXQiOjE2NjkyOTQwNzYsImV4cCI6MTY3MDUwMzY3Nn0.yUXoyDpoZLr_4DRVq3qHa5003DCxWWt5so3fH4CWPIg',
          },
        },
      )
      if (response.ok) {
        props.fetchComments()
        alert('Your comment was added!')
      }
    } catch (error) {}
  }

  return (
    <>
      <p className="add-comment" onClick={formControl}>
        Add a comment
      </p>
      {showForm && (
        <Form onSubmit={submitComment}>
          <Form.Group>
            <Form.Label>Rating</Form.Label>
            <Form.Control
              onChange={(event) => handleChange(event.target.value, 'rate')}
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
              onChange={(event) => handleChange(event.target.value, 'comment')}
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
export default AddComment
