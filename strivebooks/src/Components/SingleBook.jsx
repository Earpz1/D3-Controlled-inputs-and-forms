import { Card, Button } from 'react-bootstrap'
import { Component } from 'react'
import CommentArea from './CommentArea'
import { useState } from 'react'

const SingleBook = (props) => {
  const [isSelected, setisSelected] = useState(false)

  return (
    <Card className="mt-3">
      <Card.Img
        onClick={() => props.changeAsin(props.book.asin)}
        variant="top"
        src={props.book.img}
        className="cardImg"
        value={props.book.asin}
      />
      <Card.Body className={isSelected ? 'cardSelected' : ''}>
        {isSelected ? (
          <>
            <CommentArea bookID={props.book.asin} />
          </>
        ) : (
          ''
        )}
        <div className={isSelected ? 'd-none' : ''}>
          <Card.Title>{props.book.title}</Card.Title>
          <Card.Text>This is a {props.book.category} book.</Card.Text>
          <Button onClick={props.bookSelected} variant="primary">
            Buy now: ${props.book.price}
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default SingleBook
