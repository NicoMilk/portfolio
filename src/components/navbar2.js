import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

// const ListLink = props => (
//   <li style={{ display: `inline-block`, marginRight: `1rem` }}>
//     <Link to={props.to}>{props.children}</Link>
//   </li>
// )

export default function Navbar2() {
  return (
    <Container fluid className="navbar">
      <Link
        href="#intro"
        to="intro"
        // activeClass="active"
        // className="nav-link"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <strong>Nicolas Coulot</strong>
      </Link>

      <Link
        href="#about"
        to="about"
        // activeClass="active"
        // className="nav-link"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        About
      </Link>

      <Link
        href="#projects"
        to="projects"
        // activeClass="active"
        // className="nav-link"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Projets
      </Link>

      <Link
        href="#contact"
        to="contact"
        // activeClass="active"
        // className="nav-link"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Contact
      </Link>
    </Container>
  )
}
