import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap"
import conversation from "../images/svg/undraw_conversation_h12g.svg"

export default function Contact() {
  const data = useStaticQuery(
    graphql`
      query {
        markdownRemark(fileAbsolutePath: { regex: "/contact/gmi" }) {
          frontmatter {
            title
            field_name
            field_email
            field_message
            button
          }
        }
      }
    `
  )

  return (
    <Container fluid className="contact py-5">
      <Row className="text-center">
        <Col lg={12}>
          <h1>{data.markdownRemark.frontmatter.title}</h1>
        </Col>
      </Row>
      <Row className="content_padding">
        <Col lg={{ span: 6, order: 2 }}>
          <Form
            name="contact_v1"
            method="post"
            data-netlify="true"
            className="form"
            onSubmit="submit"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact_v1" />
            <div hidden>
              <label>
                Don't fill this out : <input name="bot-field" />
              </label>
            </div>
            <Form.Group controlId="name">
              <Form.Label>
                {data.markdownRemark.frontmatter.field_name}
              </Form.Label>
              <Form.Control type="text" name="name" required />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>
                {data.markdownRemark.frontmatter.field_email}
              </Form.Label>
              <Form.Control type="email" name="email" required />
            </Form.Group>

            <Form.Group controlId="message">
              <Form.Label>
                {data.markdownRemark.frontmatter.field_message}
              </Form.Label>
              <Form.Control as="textarea" rows="10" name="message" required />
            </Form.Group>

            <Button className="btn_submit" type="submit" block>
              {data.markdownRemark.frontmatter.button}
            </Button>
          </Form>
        </Col>
        <Col lg={{ span: 6, order: 1 }}>
          <Image
            data-sal="fade"
            data-sal-duration="2000"
            data-sal-easing="ease"
            className="contact_image"
            src={conversation}
            alt="contact image"
            fluid
          />
        </Col>
      </Row>
    </Container>
  )
}
