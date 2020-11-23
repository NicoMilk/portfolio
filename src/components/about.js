import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import { FaPhp, FaLaravel, FaReact, FaVuejs, FaDatabase } from "react-icons/fa"
import { FiDatabase } from "react-icons/fi"
import { SiJavascript, SiMysql, SiMongodb } from "react-icons/si"

import billboard from "../images/covid_code_billboard.jpg"

export default function About() {
  return (
    <Container fluid className="about py-5">
      <Row className="text-center">
        <Col className="" lg={12}>
          <h1>À propos...</h1>
        </Col>
      </Row>
      <Row className="content_padding">
        <Col className="text-justify" lg={6}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec et
            odio pellentesque diam. Habitasse platea dictumst vestibulum rhoncus
            est pellentesque elit. At lectus urna duis convallis convallis
            tellus. Consectetur a erat nam at lectus urna. Enim ut tellus
            elementum sagittis vitae et leo duis ut. Est pellentesque elit
            ullamcorper dignissim cras tincidunt lobortis feugiat. Mattis
            molestie a iaculis at erat pellentesque. Adipiscing elit ut aliquam
            purus sit amet luctus venenatis. Diam maecenas ultricies mi eget
            mauris pharetra. Leo urna molestie at elementum eu. Pulvinar
            elementum integer enim neque volutpat ac tincidunt. Massa ultricies
            mi quis hendrerit dolor. Sed turpis tincidunt id aliquet risus
            feugiat in. Vulputate enim nulla aliquet porttitor lacus luctus
            accumsan tortor. Nec feugiat in fermentum posuere urna nec tincidunt
            praesent. Nulla facilisi etiam dignissim diam quis enim lobortis
            scelerisque fermentum. Eu lobortis elementum nibh tellus molestie
            nunc. Maecenas sed enim ut sem viverra. Vulputate odio ut enim
            blandit volutpat.
          </p>
          <Row className="d-flex justify-content-around text-center">
            <Col xs={4}>
              <Row className="justify-content-center mt-3">
                <FaPhp
                  fill="#7377ad"
                  size="5em"
                  data-sal="zoom-out"
                  data-sal-delay="50"
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
                  size="5em"
                  data-sal="zoom-out"
                  data-sal-delay="100"
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
                  size="5em"
                  data-sal="zoom-out"
                  data-sal-delay="150"
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
                  size="5em"
                  data-sal="zoom-out"
                  data-sal-delay="200"
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
                  size="5em"
                  data-sal="zoom-out"
                  data-sal-delay="250"
                  data-sal-duration="1000"
                  data-sal-easing="ease"
                  className="about_icon mx-2"
                  alt="vuejs icon"
                />
              </Row>
              <Row className="justify-content-center mt-1">
                <small>VueJS</small>
              </Row>
            </Col>
            <Col xs={4}>
              <Row className="justify-content-center mt-3">
                <FiDatabase
                  stroke="#e9e9e2"
                  size="5em"
                  data-sal="zoom-out"
                  data-sal-delay="300"
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
                  size="5em"
                  data-sal="zoom-out"
                  data-sal-delay="350"
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
                  size="5em"
                  data-sal="zoom-out"
                  data-sal-delay="400"
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
            className="about_image"
            src={billboard}
            alt="about image"
            fluid
          />
        </Col>
      </Row>
    </Container>
  )
}
