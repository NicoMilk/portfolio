import React from "react"
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap"

export default function Contact() {
  return (
    <Container fluid className="contact py-5">
      <Row className="text-center">
        <Col lg={12}>
          <h1>Parlons-en !</h1>
        </Col>
      </Row>
      <Row className="pt-5">
        <Col lg={{ span: 6, order: 1 }}>
          <Image
            data-sal="flip-top"
            data-sal-duration="2000"
            data-sal-easing="ease"
            className="contact_image"
            src="https://source.unsplash.com/1600x900/?scuba"
            alt="about image"
            fluid
          />
        </Col>

        <Col lg={{ span: 6, order: 2 }}>
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
      </Row>
    </Container>
  )
}
