import React from "react"
import { Container, Row, Col } from "react-bootstrap"

export default function Footer() {
  return (
    <Container fluid className="text-center">
      <Row>
        <Col lg={6}>
          <p>© Nicolas Coulot 2020</p>
        </Col>
        <Col lg={6}>
          <p>Be well !</p>
        </Col>
      </Row>
    </Container>
  )
}
