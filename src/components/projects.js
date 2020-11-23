import React from "react"
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap"
import { VscBroadcast, VscGithub, VscGithubInverted } from "react-icons/vsc"
import { Parallax } from "react-parallax"
import code_bgd3 from "../images/code_bgd3.jpg"

export default function Projects() {
  return (
    <Parallax bgImage={code_bgd3} strength={500}>
      <div className="dimmer_projects">
        <Container fluid className="projects py-5">
          <Row className="text-center">
            <Col lg={12}>
              <h1>Projets</h1>
            </Col>
          </Row>
          <Row className="text-center">
            <Col lg={12}>
              <p>Voici une sélection de travaux de formation ou personnels.</p>
            </Col>
          </Row>
          <Row className="content_padding">
            <Col className="card_column" lg={4}>
              <Card className="mb-2 h-100">
                <Image
                  className="card-img-top"
                  src="https://source.unsplash.com/1024x576/"
                  alt="Project thumbnail"
                  fluid
                />
                <Card.Body>
                  <Card.Title>Qwiz N' Go</Card.Title>
                  <Card.Text>
                    <p>Jeu de QCM chronométrés sur le code.</p>
                    <p>
                      Favoris, ranking et commentaire, bonus, suggestion de
                      nouveau quiz, tableau des scores, statistiques admin...
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
              <Card className="mb-2 h-100">
                <Image
                  className="card-img-top"
                  src="https://source.unsplash.com/1024x576/"
                  alt="Project thumbnail"
                  fluid
                />
                <Card.Body>
                  <Card.Title>Show Cacao</Card.Title>
                  <Card.Text>
                    <p>Site de billetterie en ligne.</p>
                    <p>
                      Recherche multicritères, gestion de favoris avec alerte,
                      génération de QRcode...
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
                          disabled
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
                          disabled
                          href="https://github.com/NicoMilk/showcacao_front"
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
                          disabled
                          href="https://github.com/NicoMilk/showcacao_back"
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
              <Card className="mb-2 h-100">
                <Image
                  className="card-img-top"
                  src="https://source.unsplash.com/1024x576/"
                  alt="Project thumbnail"
                  fluid
                />
                <Card.Body>
                  <Card.Title>Pokedex</Card.Title>
                  <Card.Text>
                    <p>
                      Encyclopédie des 150 premiers monstres avec leurs
                      caractéristiques.
                    </p>
                    <p>
                      Gestion d'équipe, gain automatique, système d'échange...
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
                          disabled
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
                          disabled
                          href="https://github.com/NicoMilk/pokedex"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mx-2"
                          variant="outline-light"
                        >
                          <VscGithubInverted size="2em" />
                          <small className="mx-1">Code</small>
                        </Button>
                      </Col>
                      {/* <Col className="px-0">
                      <Button
                       disabled
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-2"
                        variant="outline-light"
                      >
                        <VscGithub size="2em" />
                        <small className="mx-1">Back</small>
                      </Button>
                    </Col> */}
                    </Row>
                  </Container>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </Parallax>
  )
}
