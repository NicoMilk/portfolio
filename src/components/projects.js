import React from "react"
import { Container, Row, Col, Card, Image } from "react-bootstrap"

export default function Projects() {
  return (
    <Container fluid className="projects">
      <Row className="text-center">
        <Col lg={12}>
          <h1>Projects</h1>
        </Col>
      </Row>
      <Row>
        <Col lg={4}>
          <Card className="mb-2">
            <Image
              className="card-img-top"
              src="https://source.unsplash.com/1600x900/?nature,water"
              alt="Project thumbnail"
              fluid
            />
            <Card.Body>
              <Card.Title>Project 1</Card.Title>
              <Card.Text>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suo
                  genere perveniant ad extremum; Duo Reges: constructio
                  interrete. Cur iustitia laudatur ?
                </p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Row>
                <Col>
                  <p>Live</p>
                </Col>
                <Col>
                  <p>GitHub</p>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        </Col>

        <Col lg={4}>
          <Card className="mb-2">
            <Image
              className="card-img-top"
              src="https://source.unsplash.com/1600x900/?nature,water"
              alt="Project thumbnail"
              fluid
            />
            <Card.Body>
              <Card.Title>Project 2</Card.Title>
              <Card.Text>
                <p>
                  Nos commodius agimus. Erat enim res aperta. Memini vero,
                  inquam; Itaque fecimus. Odium autem et invidiam facile
                  vitabis. Quid me istud rogas ?
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          <Card className="mb-2">
            <Image
              className="card-img-top"
              src="https://source.unsplash.com/1600x900/?nature,water"
              alt="Project thumbnail"
              fluid
            />
            <Card.Body>
              <Card.Title>Project 3</Card.Title>
              <Card.Text>
                <p>
                  Nos commodius agimus. Quare ad ea primum, si videtur; Quid
                  ergo attinet gloriose loqui, nisi constanter loquare? Nihilo
                  magis. Qui-vere falsone, quaerere mittimus-dicitur oculis se
                  privasse; Qui convenit? Sed ille, ut dixi, vitiose. Sed
                  fortuna fortis;{" "}
                </p>{" "}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
