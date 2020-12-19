import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import Img from "gatsby-image"
import { BsChevronDoubleDown } from "react-icons/bs"

import { Parallax } from "react-parallax"
import underwater_bgd from "../images/underwater_bgd.jpg"

export default function Intro() {
  const data = useStaticQuery(
    graphql`
      query {
        profile_pix: file(relativePath: { eq: "nico_avatar.png" }) {
          childImageSharp {
            fluid(maxWidth: 811) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        intro_bg_pix: file(relativePath: { eq: "underwater_bgd.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        markdownRemark(frontmatter: { title: { eq: "Intro" } }) {
          frontmatter {
            content
          }
        }
      }
    `
  )

  return (
    // 2eme partie de la requete graphql sert encore avec utilisation de Parallax ???
    <Parallax bgImage={underwater_bgd} strength={500}>
      <div className="dimmer_intro">
        <Container
          fluid
          className="intro d-flex align-items-center text-center px-0"
        >
          <Row>
            <Col lg={4}>
              <Img
                className="profile_pix rounded-circle my-2 mx-auto"
                fluid={data.profile_pix.childImageSharp.fluid}
                alt="Profile picture"
              />
            </Col>
            <Col lg={8}>
              <h2 className="intro_text my-2 mx-auto">
                {/* Salut ! Je suis Nico, développeur web full stack. */}
                {data.markdownRemark.frontmatter.content}
              </h2>
            </Col>
            <Col xs={12}>
              {/* <p>(Work in progress... ^^)</p> */}
              <BsChevronDoubleDown size="2em" />
            </Col>
          </Row>
        </Container>
      </div>
    </Parallax>
  )
}
