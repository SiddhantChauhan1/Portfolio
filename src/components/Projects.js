import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import techxtreek from "../assets/img/projects/techxtreek.png";
import momentify from "../assets/img/projects/techxtreek.png";
import mailfilter from "../assets/img/projects/techxtreek.png";
import bookmart from "../assets/img/projects/techxtreek.png";
import jobportal from "../assets/img/projects/techxtreek.png";
import weather from "../assets/img/projects/techxtreek.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Techxtreek",
      description: "Microblogging site, similar to Twitter and Threads",
      langs: "React | Node | Express | MongoDB",
      imgUrl: techxtreek,
    },
    {
      title: "Momentify",
      description: "Social Media Application",
      langs: "Vue.js | Python [Django]",
      imgUrl: momentify,
    },
    {
      title: "BookMart",
      description: "e-Commerce Platform for a bookstore",
      langs: "React | Node | Express | MongoDB",
      imgUrl: bookmart,
    },
    {
      title: "Job Listing Portal",
      description: "Platform to list and seek jobs",
      langs: "React | Node | Express | MongoDB",
      imgUrl: jobportal,
    },
    {
      title: "Mail Spam Detection System",
      description: "Filters Spam mail using AI/ML",
      langs: "Python",
      imgUrl: mailfilter,
    },
    {
      title: "Weather Forecaster",
      description: "App to check details about weather conditions",
      langs: "React JS",
      imgUrl: weather,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div >
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  </Nav>
                  <Tab.Content id="slideInUp" >
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
