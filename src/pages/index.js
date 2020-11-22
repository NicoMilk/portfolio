import React from "react"
import Layout from "../components/layout"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"

import Intro from "../components/intro"
import Intro2 from "../components/intro2"
import About from "../components/about"
import Projects from "../components/projects"
import Contact from "../components/contact"

export default function Home() {
  return (
    <Layout>
      <Container fluid className="px-0">
        <Intro2 />
        <About />
        <Projects />
        <Contact />
      </Container>
    </Layout>
  )
}
