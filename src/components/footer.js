import React from "react"
import { Container, Row, Col } from "react-bootstrap"

export default function Footer() {
  return (
    <Container fluid className="text-center">
      <Row className="">
        <Col className="" lg={6}>
          <p className="">© Nicolas Coulot 2020</p>
        </Col>
        <Col className="" lg={6}>
          <p>Be well !</p>
        </Col>
      </Row>
    </Container>
  )
}
