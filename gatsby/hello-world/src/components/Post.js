import React from "react"

import { Card, Button } from "react-bootstrap"

export default props => {
  return (
    <Card>
      <Card.Img variant="top" src="gatsby.jpeg" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.excerpt}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}
