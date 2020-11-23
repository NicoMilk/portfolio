import React from "react"
import { Container, Navbar, Nav } from "react-bootstrap"
import { Link } from "react-scroll"
import { VscGithubInverted } from "react-icons/vsc"
import { FaHome, FaLinkedin } from "react-icons/fa"

export default function Navigation() {
  return (
    <Container fluid className="navbar_container p-0">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        fixed="top"
        className="navbar align-items-stretch pb-0"
      >
        {/* <Navbar.Brand href="#home">Nicolas Coulot</Navbar.Brand> */}
        <Link
          href="#intro"
          to="intro"
          activeClass="active"
          className="nav-link"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <FaHome size="2em" />
          {/* <strong>Nicolas Coulot</strong> */}
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="#about">À Propos</Nav.Link> */}
            {/* <Nav.Link href="#projects">Projets</Nav.Link> */}
            {/* <Nav.Link href="#contact"> Contact </Nav.Link> */}

            <Link
              href="#about"
              to="about"
              activeClass="active"
              className="nav-link"
              spy={true}
              smooth={true}
              offset={-55}
              duration={500}
            >
              About
            </Link>
            <Link
              href="#projects"
              to="projects"
              activeClass="active"
              className="nav-link"
              spy={true}
              smooth={true}
              offset={-55}
              duration={500}
            >
              Projets
            </Link>
            <Link
              href="#contact"
              to="contact"
              activeClass="active"
              className="nav-link"
              spy={true}
              smooth={true}
              offset={-55}
              duration={500}
            >
              Contact
            </Link>
            <a
              href="https://www.linkedin.com/in/nicolascoulot"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link mx-2"
              variant="outline-light"
            >
              <FaLinkedin size="2em" />
            </a>
            <a
              href="https://github.com/NicoMilk/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link mx-2"
              variant="outline-light"
            >
              <VscGithubInverted size="2em" />
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  )
}
