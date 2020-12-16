import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col, Image } from "react-bootstrap"
import { FaPhp, FaLaravel, FaReact, FaVuejs } from "react-icons/fa"
import { FiDatabase } from "react-icons/fi"
import { SiJavascript, SiMysql, SiMongodb } from "react-icons/si"
import NestJS from "../images/svg/nestjs.svg"

import billboard from "../images/covid_code_billboard.jpg"

export default function About() {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/ab/gmi" } }) {
          nodes {
            frontmatter {
              title
            }
            html
            rawMarkdownBody
          }
        }
      }
    `
  )

  return (
    <Container fluid className="about py-5">
      <Row className="text-center">
        <Col className="" lg={12}>
          <h1>{data.allMarkdownRemark.nodes[0].frontmatter.title}</h1>
        </Col>
      </Row>
      <Row className="content_padding">
        <Col className="text-justify" lg={6}>
          {data.allMarkdownRemark.nodes[0].rawMarkdownBody}
          <Row className="d-flex justify-content-around text-center">
            <Col xs={4}>
              <Row className="justify-content-center mt-3">
                <FaPhp
                  fill="#7377ad"
                  size="4em"
                  data-sal="zoom-out"
                  data-sal-delay="100"
                  data-sal-duration="1000"
                  data-sal-easing="ease"
                  className="about_icon mx-2"
                  alt="php icon"
                />
              </Row>
              <Row className="justify-content-center mt-1">
                <small>PHP</small>
              </Row>
              <Row className="justify-content-center mt-3">
                <FaLaravel
                  fill="#ff2d20"
                  size="4em"
                  data-sal="zoom-out"
                  data-sal-delay="200"
                  data-sal-duration="1000"
                  data-sal-easing="ease"
                  className="about_icon mx-2"
                  alt="laravel icon"
                />
              </Row>
              <Row className="justify-content-center mt-1">
                <small>Laravel</small>
              </Row>
            </Col>
            <Col className="skills_icons_central_column" xs={4}>
              <Row className="justify-content-center mt-3">
                <SiJavascript
                  fill="#e9d44d"
                  size="4em"
                  data-sal="zoom-out"
                  data-sal-delay="300"
                  data-sal-duration="1000"
                  data-sal-easing="ease"
                  className="about_icon mx-2"
                  alt="js icon"
                />
              </Row>
              <Row className="justify-content-center mt-1">
                <small>JavaScript</small>
              </Row>
              <Row className="justify-content-center mt-3">
                <FaReact
                  fill="#61dafb"
                  size="4em"
                  data-sal="zoom-out"
                  data-sal-delay="400"
                  data-sal-duration="1000"
                  data-sal-easing="ease"
                  className="about_icon mx-2"
                  alt="react icon"
                />
              </Row>
              <Row className="justify-content-center mt-1">
                <small>React</small>
              </Row>
              <Row className="justify-content-center mt-3">
                <FaVuejs
                  fill="#41b883"
                  size="4em"
                  data-sal="zoom-out"
                  data-sal-delay="500"
                  data-sal-duration="1000"
                  data-sal-easing="ease"
                  className="about_icon mx-2"
                  alt="vuejs icon"
                />
              </Row>
              <Row className="justify-content-center mt-1">
                <small>VueJS</small>
              </Row>
              <Row className="justify-content-center mt-3">
                <Image
                  data-sal="zoom-out"
                  data-sal-delay="600"
                  data-sal-duration="1000"
                  data-sal-easing="ease"
                  className="about_icon mx-2"
                  src={NestJS}
                  alt="nestjs icon"
                  fluid
                />
              </Row>
              <Row className="justify-content-center mt-1">
                <small>NestJS</small>
              </Row>
            </Col>
            <Col xs={4}>
              <Row className="justify-content-center mt-3">
                <FiDatabase
                  stroke="#e9e9e2"
                  size="4em"
                  data-sal="zoom-out"
                  data-sal-delay="700"
                  data-sal-duration="1000"
                  data-sal-easing="ease"
                  className="about_icon mx-2"
                  alt="database icon"
                />
              </Row>
              <Row className="justify-content-center mt-1">
                <small>Database</small>
              </Row>
              <Row className="justify-content-center mt-3">
                <SiMysql
                  fill="#00758f"
                  size="4em"
                  data-sal="zoom-out"
                  data-sal-delay="800"
                  data-sal-duration="1000"
                  data-sal-easing="ease"
                  className="about_icon mx-2"
                  alt="mysql icon"
                />
              </Row>
              <Row className="justify-content-center mt-1">
                <small>MySQL</small>
              </Row>
              <Row className="justify-content-center mt-3">
                <SiMongodb
                  fill="#10aa50"
                  size="4em"
                  data-sal="zoom-out"
                  data-sal-delay="900"
                  data-sal-duration="1000"
                  data-sal-easing="ease"
                  className="about_icon mx-2"
                  alt="mongodb icon"
                />
              </Row>
              <Row className="justify-content-center mt-1">
                <small>MongoDB</small>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col lg={6}>
          <Image
            data-sal="fade"
            data-sal-duration="2000"
            data-sal-easing="ease"
            className="about_image pt-0 mt-3"
            src={billboard}
            alt="about image"
            fluid
          />
        </Col>
      </Row>
    </Container>
  )
}
