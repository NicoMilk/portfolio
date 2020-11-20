import React from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"

export default function Contact() {
  return (
    <Container fluid className="contact">
      <Row className="text-center">
        <Col lg={12}>
          <h1>Parlons-en !</h1>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Nom</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            {/* <Form.Group controlId="firstName">
              <Form.Label>Prénom</Form.Label>
              <Form.Control type="text" />
            </Form.Group> */}
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required />
            </Form.Group>

            <Form.Group controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows="5" required />
            </Form.Group>

            <Button type="submit">Envoyer</Button>
          </Form>
        </Col>
        <Col lg={6}>An image will take place here</Col>
      </Row>
    </Container>
  )
}
