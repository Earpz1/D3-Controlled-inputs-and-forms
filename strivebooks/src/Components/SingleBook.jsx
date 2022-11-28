import { Card, Button } from 'react-bootstrap'
import { Component } from 'react'
import CommentArea from './CommentArea'

class SingleBook extends Component {
  state = {
    isSelected: false,
  }

  render() {
    return (
      <Card className="mt-3">
        <Card.Img
          onClick={() => this.props.changeAsin(this.props.book.asin)}
          variant="top"
          src={this.props.book.img}
          className="cardImg"
          value={this.props.book.asin}
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
