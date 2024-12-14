import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import techxtreek from "../assets/img/projects/techxtreek.png";
import momentify from "../assets/img/projects/Techxtreek2.jpeg";
import mailfilter from "../assets/img/projects/Techxtreek2.jpeg";
import bookmart from "../assets/img/projects/bookmart.png";
import jobportal from "../assets/img/projects/JobPortal.png";
import weather from "../assets/img/projects/Weather.png";
import grocery from "../assets/img/projects/Grocery.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Techxtreek",
      description: "Microblogging site, similar to Twitter and Threads",
      langs: "Next | React | Node | MongoDB",
      imgUrl: techxtreek,
    },
    {
      title: "Job Listing Portal",
      description: "Platform to list and seek jobs",
      langs: "React | Node | Express | MongoDB",
      imgUrl: jobportal,
    },
    {
      title: "Grocery Store",
      description: "Website to view and order groceries",
      langs: "React | Node | Express | MongoDB",
      imgUrl: grocery,
    },
    {
      title: "Momentify",
      description: "Social Media Application",
      langs: "Vue.js | Python [Django]",
      imgUrl: momentify,
    },
    {
      title: "Spam Dectection System",
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
    {
      title: "BookMart",
      description: "e-Commerce Platform for a bookstore",
      langs: "React | Node | Express | MongoDB",
      imgUrl: bookmart,
    },
    {
      title: "Workout Tracker",
      description: "App to manage and track workouts and health",
      langs: "React | Node | Express | MongoDB",
      imgUrl: techxtreek,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div >
                <h2>PROJECTS</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-2 justify-content-center align-items-center" id="pills-tab">
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
      <img className="background-image-right" src={colorSharp2} alt="Background decorative pattern"></img>
    </section>
  )
}
