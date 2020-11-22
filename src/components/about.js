import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"

export default function About() {
  return (
    <Container fluid className="about py-5">
      <Row className="text-center">
        <Col className="" lg={12}>
          <h1>À propos...</h1>
        </Col>
      </Row>
      <Row className="pt-5">
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
        </Col>
        <Col lg={6}>
          <Image
            data-sal="flip-right"
            data-sal-duration="2000"
            data-sal-easing="ease"
            className="about_image"
            src="https://source.unsplash.com/1600x900/?scuba"
            alt="about image"
            fluid
          />
        </Col>
      </Row>
    </Container>
  )
}
