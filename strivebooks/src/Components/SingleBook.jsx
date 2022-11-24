import { Card, Button } from 'react-bootstrap'
import { Component } from 'react'
import CommentArea from './CommentArea'

class SingleBook extends Component {
  state = {
    isSelected: false,
  }

  bookSelected = (event) => {
    if (this.state.isSelected === true) {
      this.setState({
        isSelected: false,
      })
    } else {
      this.setState({
        isSelected: true,
      })
    }
  }

  render() {
    return (
      <Card className="mt-3">
        <Card.Img
          onClick={this.bookSelected}
          variant="top"
          src={this.props.book.img}
          className="cardImg"
        />
        <Card.Body className={this.state.isSelected ? 'cardSelected' : ''}>
          {this.state.isSelected ? (
            <>
              <CommentArea bookID={this.props.book.asin} />
            </>
          ) : (
            ''
          )}
          <div className={this.state.isSelected ? 'd-none' : ''}>
            <Card.Title>{this.props.book.title}</Card.Title>
            <Card.Text>This is a {this.props.book.category} book.</Card.Text>
            <Button onClick={this.bookSelected} variant="primary">
              Buy now: ${this.props.book.price}
            </Button>
          </div>
        </Card.Body>
      </Card>
    )
  }
}

export default SingleBook
