import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import Intro from "../components/intro"
import About from "../components/about"
import Projects from "../components/projects"
import Contact from "../components/contact"

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Nicolas - Full Stack Web Developer </title>
        <link
          rel="canonical"
          href="https://peaceful-cori-c45f86.netlify.app/"
        />
      </Helmet>
      <Container fluid className="px-0">
        <Intro />
        <About />
        <Projects />
        <Contact />
      </Container>
    </Layout>
  )
}
