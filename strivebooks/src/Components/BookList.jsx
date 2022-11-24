import { Container, Row, Col, Form } from 'react-bootstrap'
import SingleBook from './SingleBook'
import { Component } from 'react'

class BookList extends Component {
  state = {
    searchQuery: '',
    books: this.props.ListOfBooks,
  }

  FilterBookList = (value) => {
    this.setState({
      searchQuery: value,
    })

    let searchQuery = this.state.searchQuery

    this.setState({
      books: this.state.books.filter(function (book) {
        return book.title.includes(searchQuery)
      }),
    })
    console.log(searchQuery)
    console.log(this.props.ListOfBooks)
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
        <h2>There are currently {this.state.books.length} books in the list</h2>
        <div className="d-flex">
          <Row className="w-100">
            {this.state.books.map((book) => (
              <Col key={book.asin} lg={3}>
                <SingleBook book={book} />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    )
  }
}

export default BookList
