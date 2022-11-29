import { Container, Row, Col, Form } from 'react-bootstrap'
import SingleBook from './SingleBook'
import CommentArea from './CommentArea'
import { useState } from 'react'
import { useEffect } from 'react'

const BookList = (props) => {
  const [searchQuery, setsearchQuery] = useState('')
  const [books, setbooks] = useState(props.ListOfBooks)
  const [asin, setasin] = useState()
  const [isSelected, setisSelected] = useState(false)

  const FilterBookList = (value) => {
    setsearchQuery(value)

    //Filter the books based on the search
    setbooks(
      books.filter((book) => {
        return book.title.includes(searchQuery)
      }),
    )
  }

  // This functon is passed to SingleBook
  const changeAsin = (asin) => {
    setasin(asin)
    setisSelected(true)
  }

  return (
    <Container fluid>
      <Form.Group>
        <Form.Control
          className="mt-5"
          size="lg"
          type="text"
          placeholder="Search Books"
          value={searchQuery}
          onChange={(event) => FilterBookList(event.target.value)}
        />
      </Form.Group>
      <h2>There are currently {books.length} books in the list</h2>
      <div className="d-flex">
        {isSelected ? (
          <>
            <Col lg={3}>
              <CommentArea bookID={asin} />{' '}
            </Col>
          </>
        ) : (
          ''
        )}

        <Row>
          {books.map((book) => (
            <Col key={book.asin} lg={3}>
              <SingleBook book={book} changeAsin={changeAsin} />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  )
}

export default BookList
