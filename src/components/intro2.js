import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
// import Image from "react-bootstrap/Image"
import BgImage from "gatsby-background-image"
import Img from "gatsby-image"

import { Parallax } from "react-parallax"
import underwater_bgd from "../images/underwater_bgd.jpg"

// import profilePic from "../images/nico_avatar.png"

export default function Intro2() {
  const data = useStaticQuery(
    graphql`
      query test {
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
      }
    `
  )

  return (
    <Parallax bgImage={underwater_bgd} strength={500}>
      <div className="dimmer_intro">
        <Container
          fluid
          className="intro d-flex align-items-center text-center px-0"
        >
          {/* <BgImage
            className="intro_bg_image"
            fluid={data.intro_bg_pix.childImageSharp.fluid}
          > */}
          <Row>
            <Col lg={4}>
              <Img
                className="profile_pix rounded-circle my-2 mx-auto"
                fluid={data.profile_pix.childImageSharp.fluid}
                alt="Profile picture"
              />
            </Col>
            <Col lg={8}>
              <h1 className="intro_text my-2 mx-auto">
                Hi ! I'm Nico, and I may be your next junior full stack
                developper too ! Wanna talk about it ?
              </h1>
            </Col>
          </Row>
          {/* </BgImage> */}
        </Container>
      </div>
    </Parallax>
  )
}
