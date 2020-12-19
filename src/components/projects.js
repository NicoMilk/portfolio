import React from "react"
import {
  Container,
  Row,
  Col,
  Card,
  Image,
  Button,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap"
import { VscBroadcast, VscGithub, VscGithubInverted } from "react-icons/vsc"
import { Parallax } from "react-parallax"
import code_bgd3 from "../images/code_bgd3.jpg"
import card3_pix1 from "../images/card3_pix1.png"
import card1_pix1 from "../images/card1_pix1.png"

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
          <Row className="text-center pt-5">
            <Col lg={12}>
              <p>Voici une sélection de travaux de formation ou personnels :</p>
            </Col>
          </Row>
          <Row className="content_padding">
            <Col className="card_column" lg={4}>
              <Card className="mb-2 h-100">
                <Image
                  className="card-img-top"
                  // src="https://source.unsplash.com/1024x576/"
                  src={card1_pix1}
                  alt="Project thumbnail"
                  fluid
                />
                <Card.Body>
                  <Card.Title>Qwiz N' Go</Card.Title>
                  <Card.Text>
                    <p>
                      Exercice en équipe selon un cahier des charges tiers,
                      temps limité.
                    </p>

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
                  // src="https://source.unsplash.com/1024x576/"
                  src="https://source.unsplash.com/9DZY0mO98xU"
                  alt="Project thumbnail"
                  fluid
                />
                <Card.Body>
                  <Card.Title>Show Cacao</Card.Title>
                  <Card.Text>
                    <p>Exercice en équipe, temps limité.</p>

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
                        <OverlayTrigger
                          overlay={
                            <Tooltip id="tooltip-disabled">
                              Pas encore...
                            </Tooltip>
                          }
                        >
                          <span className="d-inline-block">
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
                          </span>
                        </OverlayTrigger>
                      </Col>
                      <Col className="px-0">
                        <Button
                          // disabled
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
                          // disabled
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
                  // src="https://source.unsplash.com/1024x576/"
                  src={card3_pix1}
                  alt="Project thumbnail"
                  fluid
                />
                <Card.Body>
                  <Card.Title>Pokedex</Card.Title>
                  <Card.Text>
                    <p>
                      Exercice en équipe, temps limité, design imposé, orienté
                      mobile.
                    </p>
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
                        {/* Toggle to activate tooltip on live button hover if disabled*/}
                        {/* <OverlayTrigger
                          overlay={
                            <Tooltip id="tooltip-disabled">
                              Pas encore...
                            </Tooltip>
                          }
                        > */}
                        <span className="d-inline-block">
                          <Button
                            // disabled
                            href="https://pokedex-nc.herokuapp.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mx-2"
                            variant="outline-light"
                          >
                            <VscBroadcast size="2em" />
                            <small className="mx-1">Live</small>
                          </Button>
                        </span>
                        {/* </OverlayTrigger> */}
                      </Col>
                      <Col className="px-0">
                        <Button
                          // disabled
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

          <Row className="text-center pt-5">
            <Col lg={12}>
              <h5>Je travaille actuellement sur :</h5>
            </Col>
          </Row>
          {/*  */}
          <Row className="content_padding">
            <Col className="card_column" lg={{ span: 4, offset: 2 }}>
              <Card className="mb-2 h-100">
                <Card.Body>
                  <Card.Text>
                    <p>
                      Refonte complète du site d'une association de secouristes
                      bénévoles
                    </p>
                    <ul>
                      <li>
                        <small>Database : MariaDB</small>
                      </li>
                      <li>
                        <small>Back : Laravel</small>
                      </li>
                      <li>
                        <small>Front : React</small>
                      </li>
                      <li>
                        <small>CSS : Tailwind</small>
                      </li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col className="card_column" lg={4}>
              <Card className="mb-2 h-100">
                <Card.Body>
                  <Card.Text>
                    <p>
                      Simulateur de clignotement de guirlande lumineuse ^^'
                      (algorithme)
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </Parallax>
  )
}
