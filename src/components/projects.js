import React from "react"
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap"
import { VscBroadcast, VscGithub, VscGithubInverted } from "react-icons/vsc"
import { Parallax } from "react-parallax"
import bg_code from "../images/code_bgd.jpg"

export default function Projects() {
  return (
    <Parallax bgImage={bg_code} strength={500}>
      <Container fluid className="projects py-5">
        <Row className="text-center">
          <Col lg={12}>
            <h1>Projects</h1>
          </Col>
        </Row>
        <Row className="pt-5">
          <Col className="card_column" lg={4}>
            <Card className="mb-2">
              <Image
                className="card-img-top"
                src="https://source.unsplash.com/1600x900/?nature,water"
                alt="Project thumbnail"
                fluid
              />
              <Card.Body>
                <Card.Title>Qwiz N' Go</Card.Title>
                <Card.Text>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suo
                    genere perveniant ad extremum; Duo Reges: constructio
                    interrete. Cur iustitia laudatur ?
                  </p>
                  <ul>
                    <li>
                      <small>Database : MongoDB</small>
                    </li>
                    <li>
                      <small>Back : NestJS</small>
                    </li>
                    <li>
                      <small>Front : VueJS</small>
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
              <Card.Footer className="card_footer text-center">
                <Container fluid>
                  <Row fluid>
                    {/* <Col className="px-0" lg={4}> */}
                    <Col className="px-0">
                      <Button
                        href="https://qwiz-go.herokuapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-2"
                        variant="outline-light"
                      >
                        <VscBroadcast size="2em" />
                        <small className="mx-1">Live</small>
                      </Button>
                    </Col>
                    <Col className="px-0">
                      <Button
                        href="https://github.com/NicoMilk/qwizngo_front"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-2"
                        variant="outline-light"
                      >
                        <VscGithubInverted size="2em" />
                        <small className="mx-1">Front</small>
                      </Button>
                    </Col>
                    <Col className="px-0">
                      <Button
                        href="https://github.com/NicoMilk/qwizngo_back"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-2"
                        variant="outline-light"
                      >
                        <VscGithub size="2em" />
                        <small className="mx-1">Back</small>
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </Card.Footer>
            </Card>
          </Col>

          <Col className="card_column" lg={4}>
            <Card className="mb-2">
              <Image
                className="card-img-top"
                src="https://source.unsplash.com/1600x900/?nature,water"
                alt="Project thumbnail"
                fluid
              />
              <Card.Body>
                <Card.Title>Show Cacao</Card.Title>
                <Card.Text>
                  <p>
                    Nos commodius agimus. Erat enim res aperta. Memini vero,
                    inquam; Itaque fecimus. Odium autem et invidiam facile
                    vitabis. Quid me istud rogas ?
                  </p>
                  <ul>
                    <li>
                      <small>Database : MongoDB</small>
                    </li>
                    <li>
                      <small>Back : NestJS</small>
                    </li>
                    <li>
                      <small>Front : VueJS</small>
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
              <Card.Footer className="card_footer text-center">
                <Container fluid>
                  <Row fluid>
                    {/* <Col className="px-0" lg={4}> */}
                    <Col className="px-0">
                      <Button
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-2"
                        variant="outline-light"
                      >
                        <VscBroadcast size="2em" />
                        <small className="mx-1">Live</small>
                      </Button>
                    </Col>
                    <Col className="px-0">
                      <Button
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-2"
                        variant="outline-light"
                      >
                        <VscGithubInverted size="2em" />
                        <small className="mx-1">Front</small>
                      </Button>
                    </Col>
                    <Col className="px-0">
                      <Button
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-2"
                        variant="outline-light"
                      >
                        <VscGithub size="2em" />
                        <small className="mx-1">Back</small>
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </Card.Footer>
            </Card>
          </Col>

          <Col className="card_column" lg={4}>
            <Card className="mb-2">
              <Image
                className="card-img-top"
                src="https://source.unsplash.com/1600x900/?nature,water"
                alt="Project thumbnail"
                fluid
              />
              <Card.Body>
                <Card.Title>Pokedex</Card.Title>
                <Card.Text>
                  <p>
                    Nos commodius agimus. Quare ad ea primum, si videtur; Quid
                    ergo attinet gloriose loqui, nisi constanter loquare? Nihilo
                    magis. Qui-vere falsone, quaerere mittimus-dicitur oculis se
                    privasse; Qui convenit? Sed ille, ut dixi, vitiose. Sed
                    fortuna fortis;
                  </p>
                  <ul>
                    <li>
                      <small>Database : mySQL</small>
                    </li>
                    <li>
                      <small>Back : Laravel</small>
                    </li>
                    <li>
                      <small>Front : VueJS</small>
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
              <Card.Footer className="card_footer text-center">
                <Container fluid>
                  <Row fluid>
                    {/* <Col className="px-0" lg={4}> */}
                    <Col className="px-0">
                      <Button
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-2"
                        variant="outline-light"
                      >
                        <VscBroadcast size="2em" />
                        <small className="mx-1">Live</small>
                      </Button>
                    </Col>
                    <Col className="px-0">
                      <Button
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-2"
                        variant="outline-light"
                      >
                        <VscGithubInverted size="2em" />
                        <small className="mx-1">Front</small>
                      </Button>
                    </Col>
                    <Col className="px-0">
                      <Button
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-2"
                        variant="outline-light"
                      >
                        <VscGithub size="2em" />
                        <small className="mx-1">Back</small>
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>{" "}
    </Parallax>
  )
}
