import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col, Image } from "react-bootstrap"

import { CgFileDocument } from "react-icons/cg"
import { FaPhp, FaLaravel, FaReact, FaVuejs } from "react-icons/fa"
import { FiDatabase } from "react-icons/fi"
import { SiJavascript, SiMysql, SiMongodb } from "react-icons/si"
import NestJS from "../images/svg/nestjs.svg"
import billboard from "../images/covid_code_billboard.jpg"

export default function About() {
  const data = useStaticQuery(
    graphql`
      query {
        markdownRemark(fileAbsolutePath: { regex: "/about/gmi" }) {
          frontmatter {
            title
            skills
            likeTitle
            like1
            like2
            like3
            dislikeTitle
            dislike1
            dislike2
            dislike3
            mottoTitle
            motto
            mottoAuthor
            guiltyTitle
            guilty
            resume
          }
          html
        }
        file(name: { regex: "/resume/gmi" }, extension: { eq: "pdf" }) {
          publicURL
        }
      }
    `
  )

  return (
    <Container fluid className="about py-5">
      <Row className="text-center">
        <Col lg={12}>
          <h1 className="section_title">
            {data.markdownRemark.frontmatter.title}
          </h1>
        </Col>
      </Row>

      {/* Text */}

      <Row className="content_padding justify-content-md-center">
        <Col lg={8}>
          {/* vvv /!\ React syntax replacement for Javascript's "innerHTML" to inject HTML in the browser DOM  : https://medium.com/better-programming/what-is-dangerouslysetinnerhtml-6d6a98cbc187*/}
          <div
            dangerouslySetInnerHTML={{
              __html: data.markdownRemark.html,
            }}
          />

          {/* Image */}

          <Col lg={{ span: 6, offset: 3 }}>
            <small>
              <code className="fake_comment">{"// Interlude..."}</code>
            </small>
            <Image
              data-sal="fade"
              data-sal-duration="2000"
              data-sal-easing="ease"
              className="about_image pt-0 mt-0"
              src={billboard}
              alt="about image"
              fluid
            />
            <small>
              <code className="fake_comment">
                {
                  "// Vous pouvez poursuivre la lecture, merci de votre compréhension."
                }
              </code>
            </small>
          </Col>

          {/* Like / Dislike */}

          <Row className="text-center">
            <Col lg={6}>
              <h5 className="mt-5">
                {data.markdownRemark.frontmatter.likeTitle} :
              </h5>
              <p className="my-0">{data.markdownRemark.frontmatter.like1}</p>
              <p className="my-0">{data.markdownRemark.frontmatter.like2}</p>
              <p className="my-0">{data.markdownRemark.frontmatter.like3}</p>
            </Col>
            <Col lg={6}>
              <h5 className="mt-5">
                {data.markdownRemark.frontmatter.dislikeTitle} :
              </h5>
              <p className="my-0">{data.markdownRemark.frontmatter.dislike1}</p>
              <p className="my-0">{data.markdownRemark.frontmatter.dislike2}</p>
              <p className="my-0">{data.markdownRemark.frontmatter.dislike3}</p>
            </Col>
          </Row>

          {/* Creed / Guilty pleasure */}

          {/* <Row className="text-center mt-5"> */}
          {/* <Col lg={12}> */}
          <div className="text-center mt-5">
            {/* <h5 className="mt-5">
              {data.markdownRemark.frontmatter.mottoTitle} :
            </h5>
            <blockquote>{data.markdownRemark.frontmatter.motto}</blockquote>
            <small>
              <em>{data.markdownRemark.frontmatter.mottoAuthor}.</em>
            </small> */}
            <h5 className="mt-5">
              {data.markdownRemark.frontmatter.guiltyTitle} :
            </h5>
            <p>{data.markdownRemark.frontmatter.guilty}</p>
          </div>
          {/* </Col> */}
          {/* </Row> */}

          {/* CV */}

          <div className="text-center mt-5">
            <h5 className="mt-5">{data.markdownRemark.frontmatter.resume} :</h5>
          </div>

          <Row className="justify-content-center mt-3">
            <a
              href={data.file.publicURL}
              without
              rel="noreferrer noopener"
              target="_blank"
            >
              <CgFileDocument
                size="5em"
                // className="intro_text mx-2"
                className="resume_icon mx-2"
                alt="pdf resume"
              />
            </a>
          </Row>

          {/* Skills */}

          <h5 className="text-center my-5">
            {data.markdownRemark.frontmatter.skills} :
          </h5>

          <Row className="d-flex justify-content-around text-center">
            <Col xs={4}>
              <Row className="justify-content-center mt-3">
                <FaPhp
                  fill="#7377ad"
                  size="4em"
                  data-sal="zoom-out"
                  data-sal-delay="100"
                  data-sal-duration="1000"
                  data-sal-easing="ease"
                  className="about_icon mx-2"
                  alt="php icon"
                />
              </Row>
              <Row className="justify-content-center mt-1">
                <small>PHP</small>
              </Row>
              <Row className="justify-content-center mt-3">
                <FaLaravel
                  fill="#ff2d20"
                  size="4em"
                  data-sal="zoom-out"
                  data-sal-delay="200"
                  data-sal-duration="1000"
                  data-sal-easing="ease"
                  className="about_icon mx-2"
                  alt="laravel icon"
                />
              </Row>
              <Row className="justify-content-center mt-1">
                <small>Laravel</small>
              </Row>
            </Col>
            <Col className="skills_icons_central_column" xs={4}>
              <Row className="justify-content-center mt-3">
                <SiJavascript
                  fill="#e9d44d"
                  size="4em"
                  data-sal="zoom-out"
                  data-sal-delay="300"
                  data-sal-duration="1000"
                  data-sal-easing="ease"
                  className="about_icon mx-2"
                  alt="js icon"
                />
              </Row>
              <Row className="justify-content-center mt-1">
                <small>JavaScript</small>
              </Row>
              <Row className="justify-content-center mt-3">
                <FaReact
                  fill="#61dafb"
                  size="4em"
                  data-sal="zoom-out"
                  data-sal-delay="400"
                  data-sal-duration="1000"
                  data-sal-easing="ease"
                  className="about_icon mx-2"
                  alt="react icon"
                />
              </Row>
              <Row className="justify-content-center mt-1">
                <small>React</small>
              </Row>
              <Row className="justify-content-center mt-3">
                <FaVuejs
                  fill="#41b883"
                  size="4em"
                  data-sal="zoom-out"
                  data-sal-delay="500"
                  data-sal-duration="1000"
                  data-sal-easing="ease"
                  className="about_icon mx-2"
                  alt="vuejs icon"
                />
              </Row>
              <Row className="justify-content-center mt-1">
                <small>VueJS</small>
              </Row>
              <Row className="justify-content-center mt-3">
                <Image
                  data-sal="zoom-out"
                  data-sal-delay="600"
                  data-sal-duration="1000"
                  data-sal-easing="ease"
                  className="about_icon mx-2"
                  src={NestJS}
                  alt="nestjs icon"
                  fluid
                />
              </Row>
              <Row className="justify-content-center mt-1">
                <small>NestJS</small>
              </Row>
            </Col>
            <Col xs={4}>
              <Row className="justify-content-center mt-3">
                <FiDatabase
                  stroke="#e9e9e2"
                  size="4em"
                  data-sal="zoom-out"
                  data-sal-delay="700"
                  data-sal-duration="1000"
                  data-sal-easing="ease"
                  className="about_icon mx-2"
                  alt="database icon"
                />
              </Row>
              <Row className="justify-content-center mt-1">
                <small>Database</small>
              </Row>
              <Row className="justify-content-center mt-3">
                <SiMysql
                  fill="#00758f"
                  size="4em"
                  data-sal="zoom-out"
                  data-sal-delay="800"
                  data-sal-duration="1000"
                  data-sal-easing="ease"
                  className="about_icon mx-2"
                  alt="mysql icon"
                />
              </Row>
              <Row className="justify-content-center mt-1">
                <small>MySQL</small>
              </Row>
              <Row className="justify-content-center mt-3">
                <SiMongodb
                  fill="#10aa50"
                  size="4em"
                  data-sal="zoom-out"
                  data-sal-delay="900"
                  data-sal-duration="1000"
                  data-sal-easing="ease"
                  className="about_icon mx-2"
                  alt="mongodb icon"
                />
              </Row>
              <Row className="justify-content-center mt-1">
                <small>MongoDB</small>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
