import { Card, Button } from 'react-bootstrap'
import { Component } from 'react'
import MyBadge from './MyBadge'

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
      <Card onClick={this.bookSelected} className="mt-3">
        <Card.Img variant="top" src={this.props.book.img} className="cardImg" />
        <Card.Body className={this.state.isSelected ? 'cardSelected' : ''}>
          <Card.Title>{this.props.book.title}</Card.Title>
          <Card.Text>This is a {this.props.book.category} book.</Card.Text>
          <Button onClick={this.bookSelected} variant="primary">
            Buy now: ${this.props.book.price}
          </Button>
        </Card.Body>
      </Card>
    )
  }
}

export default SingleBook
