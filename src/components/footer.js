import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

export default function Footer() {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
          }
        }
        markdownRemark(fileAbsolutePath: { regex: "/footer/gmi" }) {
          frontmatter {
            greeting
          }
        }
      }
    `
  )

  return (
    <Container fluid>
      <Row>
        <Col lg={6}>
          <p className="text-center">
            © {data.site.siteMetadata.author} {new Date().getFullYear()}
          </p>
        </Col>
        <Col lg={6}>
          <p className="text-center">
            {data.markdownRemark.frontmatter.greeting}
          </p>
        </Col>
      </Row>
    </Container>
  )
}
