import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
// import Image from "react-bootstrap/Image"
// import BgImage from "gatsby-background-image"
import Img from "gatsby-image"

// import profilePic from "../images/nico_avatar.png"

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
      }
    `
  )

  // const bg_pix = useStaticQuery(
  //   graphql`
  //     query {
  //       intro_bg_pix: file(relativePath: { eq: "IMG_1362.JPG" }) {
  //         childImageSharp {
  //           fluid(maxWidth: 811) {
  //             ...GatsbyImageSharpFluid
  //           }
  //         }
  //       }
  //     }
  //   `
  // )

  return (
    <Container fluid className="intro text-center">
      {/* <BgImage fluid={bg_pix.intro_bg_pix.childImageSharp.fluid}> */}
      <Row>
        <Col className="col1" lg={4}>
          <Img
            className="profile_pix rounded-circle my-2 mx-auto"
            fluid={data.profile_pix.childImageSharp.fluid}
            alt="Profile picture"
          />
          {/* <Image
            className="profile_pix my-2"
            src={profilePic}
            // sizes="50%"
            roundedCircle
            alt="Profile picture"
          /> */}
        </Col>
        <Col className="col2" lg={8}>
          <p>
            Hi ! I'm Nico, and maybe I'm your next junior full stack developper
            too ! Wanna talk about it ?
          </p>
        </Col>
      </Row>
      {/* </BgImage> */}
    </Container>
  )
}
