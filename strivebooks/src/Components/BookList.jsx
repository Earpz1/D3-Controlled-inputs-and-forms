import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import SingleBook from './SingleBook'
import { Component } from 'react'

class BookList extends Component {
  Books = this.props.ListOfBooks

  state = {
    searchQuery: '',
  }

  FilterBookList = (value) => {
    this.setState({
      searchQuery: value,
    })

    const searchQuery = this.state.searchQuery

    this.Books = this.props.ListOfBooks.filter(function (el) {
      return el.title.includes(searchQuery)
    })

    console.log(this.Books)

    return this.Books
  }

  render() {
    return (
      <Container fluid>
        <Form.Group>
          <Form.Control
            className="mt-5"
            size="lg"
            type="text"
            placeholder="Search Books"
            value={this.state.searchQuery}
            onChange={(event) => this.FilterBookList(event.target.value)}
          />
        </Form.Group>
        <h2>There are currently {this.Books.length} books in the list</h2>

        <Row className="w-100">
          {this.Books.map((book) => (
            <Col key={book.asin} lg={2}>
              <SingleBook book={book} />
            </Col>
          ))}
        </Row>
      </Container>
    )
  }
}

export default BookList
