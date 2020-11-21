import React from "react"
import { Container, Navbar, Nav, Row } from "react-bootstrap"
import { Link } from "react-scroll"
import { VscGithubInverted } from "react-icons/vsc"
import { FaHome, FaLinkedin } from "react-icons/fa"

export default function Navbar3() {
  return (
    <Container fluid className="navbar_container p-0">
      <Row className="align-items-stretch ml-0">
        {/* <Navbar collapseOnSelect className="test p-0"> */}
        <Link
          to="intro"
          activeClass="active"
          className="nav-link mr-1"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <FaHome size="2em" />
          {/* <strong>Nicolas Coulot</strong> */}
        </Link>
        <Link
          to="about"
          activeClass="active"
          className="nav-link mx-1"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          About
        </Link>
        <Link
          to="projects"
          activeClass="active"
          className="nav-link mx-1"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Projets
        </Link>
        <Link
          to="contact"
          activeClass="active"
          className="nav-link mx-1"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Contact
        </Link>
        <Link
          href="https://www.linkedin.com/in/nicolascoulot"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link navbar_social_media_link mx-1"
          variant="outline-light"
        >
          <FaLinkedin size="2em" />
        </Link>
        <Link
          href="https://github.com/NicoMilk/"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link navbar_social_media_link mx-1"
          variant="outline-light"
        >
          <VscGithubInverted size="2em" />
        </Link>
        {/* </Navbar> */}
      </Row>
    </Container>
  )
}
