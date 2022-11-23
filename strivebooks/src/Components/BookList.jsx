import { Container, Row, Col, Form } from 'react-bootstrap'
import SingleBook from './SingleBook'
import { Component } from 'react'

class BookList extends Component {
  state = {
    searchQuery: '',
    Books: this.props.ListOfBooks,
  }

  FilterBookList = (value) => {
    this.setState({
      searchQuery: value,
    })

    const searchQuery = this.state.searchQuery

    this.setState({
      Books: this.state.Books.filter(function (book) {
        return book.title.includes(searchQuery)
      }),
    })
    console.log(searchQuery)
    console.log(this.state.Books)
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
        <h2>There are currently {this.state.Books.length} books in the list</h2>

        <Row className="w-100">
          {this.state.Books.map((book) => (
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
