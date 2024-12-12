import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

import python from "../assets/img/langs/python.svg";
import cpp from "../assets/img/langs/cpp.svg";
import c from "../assets/img/langs/c.svg";
import javascript from "../assets/img/langs/javascript.svg";
import java from "../assets/img/langs/java.svg";

import nextjs from "../assets/img/langs/nextjs.svg";
import vue from "../assets/img/langs/vue.svg";
import react from "../assets/img/langs/react.svg";
import html from "../assets/img/langs/html5.svg";
import css from "../assets/img/langs/css3.svg";
import tailwind from "../assets/img/langs/tailwind.svg";

import nodejs from "../assets/img/langs/nodejs.svg";
import express from "../assets/img/langs/express.svg";
import django from "../assets/img/langs/django.svg";

import mongodb from "../assets/img/langs/mongodb.svg";
import sql from "../assets/img/langs/sql.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
            <h1>TECHNICAL SKILLS</h1>
              <br /><br /><br />
              <h2>Languages</h2>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={cpp} alt="Image" />
                  <h5>C++</h5>
                </div>
                <div className="item">
                  <img src={python} alt="Image" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={javascript} alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={java} alt="Image" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={c} alt="Image" />
                  <h5>C</h5>
                </div>
              </Carousel>
              <br /><br /><br />
              <h2>Front end</h2>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={react} alt="Image" />
                  <h5>React.js</h5>
                </div>
                <div className="item">
                  <img src={nextjs} alt="Image" />
                  <h5>Next.js</h5>
                </div>
                <div className="item">
                  <img src={vue} alt="Image" />
                  <h5>vue.js</h5>
                </div>
                <div className="item">
                  <img src={html} alt="Image" />
                  <h5>HTML5</h5>
                </div>
                <div className="item">
                  <img src={css} alt="Image" />
                  <h5>CSS3</h5>
                </div>
                <div className="item">
                  <img src={tailwind} alt="Image" />
                  <h5>Tailwind CSS</h5>
                </div>
              </Carousel>
              <br /><br /><br />
              <h2>Backend & Database</h2>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={nodejs} alt="Image" />
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <img src={express} alt="Image" />
                  <h5>Express JS</h5>
                </div>
                <div className="item">
                  <img src={django} alt="Image" />
                  <h5>Django</h5>
                </div>
                <div className="item">
                  <img src={mongodb} alt="Image" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={sql} alt="Image" />
                  <h5>SQL</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
