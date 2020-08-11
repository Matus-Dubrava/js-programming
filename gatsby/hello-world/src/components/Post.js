import React from "react"
import { Link } from "gatsby"

import { Card } from "react-bootstrap"

export default props => {
  return (
    <Card>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.excerpt}</Card.Text>
        <Link to={props.readMore}>Read More</Link>
      </Card.Body>
    </Card>
  )
}
