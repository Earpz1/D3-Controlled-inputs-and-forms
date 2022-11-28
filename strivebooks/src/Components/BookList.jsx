import { Container, Row, Col, Form } from 'react-bootstrap'
import SingleBook from './SingleBook'
import { Component } from 'react'
import CommentArea from './CommentArea'

class BookList extends Component {
  state = {
    searchQuery: '',
    books: this.props.ListOfBooks,
    asin: '',
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

  changeAsin = (value) => {
    this.setState({
      asin: { value },
    })
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
          <Col lg={3}>
            <CommentArea
              bookID={this.state.asin}
              changeAsin={this.changeAsin}
            />
          </Col>
          <Row>
            {this.state.books.map((book) => (
              <Col key={book.asin} lg={4}>
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
