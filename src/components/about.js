import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"

export default function About() {
  return (
    <Container fluid className="about text-center">
      <Row className="text-center">
        <Col lg={12}>
          <h1>About...</h1>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
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
            blandit volutpat. Laoreet suspendisse interdum consectetur libero
            id. Fringilla phasellus faucibus scelerisque eleifend donec pretium.
            Nec tincidunt praesent semper feugiat. Molestie ac feugiat sed
            lectus vestibulum. Laoreet sit amet cursus sit amet dictum sit amet.
            Nam libero justo laoreet sit amet. Sagittis aliquam malesuada
            bibendum arcu vitae elementum curabitur vitae nunc. At volutpat diam
            ut venenatis tellus in metus vulputate eu. Elementum curabitur vitae
            nunc sed velit dignissim sodales ut. Porttitor eget dolor morbi non
            arcu risus quis varius quam. Cras semper auctor neque vitae tempus
            quam pellentesque nec nam. Habitasse platea dictumst quisque
            sagittis purus sit amet. Tincidunt vitae semper quis lectus nulla.
            Tellus molestie nunc non blandit massa enim nec. Sagittis orci a
            scelerisque purus. Massa sed elementum tempus egestas sed sed. Et
            malesuada fames ac turpis egestas. Mauris a diam maecenas sed enim.
            Sit amet purus gravida quis blandit turpis cursus. In nibh mauris
            cursus mattis molestie a iaculis at erat. Ornare arcu dui vivamus
            arcu felis bibendum ut. Ultrices mi tempus imperdiet nulla
            malesuada. Diam donec adipiscing tristique risus nec. Ornare quam
            viverra orci sagittis eu volutpat odio facilisis. Aliquam ultrices
            sagittis orci a scelerisque purus semper.
          </p>
        </Col>
        <Col lg={6}>
          <Image
            className="about_image"
            src="https://source.unsplash.com/1600x900/?nature,water"
            alt="about image"
            fluid
          />
        </Col>
      </Row>
    </Container>
  )
}
