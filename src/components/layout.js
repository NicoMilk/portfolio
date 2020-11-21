import React from "react"
// import { Link } from "gatsby"
// import Navbar from "../components/navbar"
import Navbar2 from "../components/navbar2"
import Footer from "../components/footer"
// import { Container, Row, Col } from "react-bootstrap"

// const ListLink = props => (
//   <li style={{ display: `inline-block`, marginRight: `1rem` }}>
//     <Link to={props.to}>{props.children}</Link>
//   </li>
// )

export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, padding: `0 1rem` }}>
      <header style={{ marginBottom: `1.5rem` }}>
        <Navbar2 />
        {/* <Navbar /> */}
        {/* <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>MySweetSite</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul> */}
      </header>
      {children}
      <footer>
        <Footer />
        {/* <Container fluid className="text-center">
          <Row>
            <Col id="col1" lg={6}>
              <p>© Nicolas Coulot 2020</p>
            </Col>
            <Col id="col2" lg={6}>
              <p>Be well !</p>
            </Col>
          </Row>
        </Container> */}
      </footer>
    </div>
  )
}
