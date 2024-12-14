import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

import c from "../assets/img/langs/c.svg";
import cpp from "../assets/img/langs/cpp.svg";
import python from "../assets/img/langs/python.svg";
import java from "../assets/img/langs/java.svg";
import javascript from "../assets/img/langs/javascript.svg";
import typescript from "../assets/img/langs/typescript.svg";

import nextjs from "../assets/img/langs/nextjs.svg";
import vue from "../assets/img/langs/vue.svg";
import react from "../assets/img/langs/react.svg";
import html from "../assets/img/langs/html5.svg";
import css from "../assets/img/langs/css3.svg";
import tailwind from "../assets/img/langs/tailwind.svg";

import nodejs from "../assets/img/langs/nodejs.svg";
import express from "../assets/img/langs/express.svg";
import django from "../assets/img/langs/django.svg";
import postman from "../assets/img/langs/postman.svg"
import mongodb from "../assets/img/langs/mongodb.svg";
import sql from "../assets/img/langs/sql.svg";

export const Skills = () => {

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h1>TECHNICAL SKILLS</h1>
              
              <h2>Languages</h2>
              <div className="skill-items">
                <div className="item">
                  <img src={c} alt="C Logo" />
                  <h5>C</h5>
                </div>
                <div className="item">
                  <img src={cpp} alt="C++ Logo" />
                  <h5>C++</h5>
                </div>
                <div className="item">
                  <img src={python} alt="Python Logo" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={java} alt="Java Logo" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={javascript} alt="JavaScript Logo" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={typescript} alt="TypeScript Logo" />
                  <h5>TypeScript</h5>
                </div>
              </div>
              
              <h2>Front end</h2>
              <div className="skill-items">
                <div className="item">
                  <img src={react} alt="React.js Logo" />
                  <h5>React.js</h5>
                </div>
                <div className="item">
                  <img src={nextjs} alt="Next.js Logo" />
                  <h5>Next.js</h5>
                </div>
                <div className="item">
                  <img src={vue} alt="Vue.js Logo" />
                  <h5>Vue.js</h5>
                </div>
                <div className="item">
                  <img src={html} alt="HTML5 Logo" />
                  <h5>HTML5</h5>
                </div>
                <div className="item">
                  <img src={css} alt="CSS3 Logo" />
                  <h5>CSS3</h5>
                </div>
                <div className="item">
                  <img src={tailwind} alt="Tailwind CSS Logo" />
                  <h5>Tailwind CSS</h5>
                </div>
              </div>

              <h2>Backend & Database</h2>
              <div className="skill-items">
                <div className="item">
                  <img src={nodejs} alt="Node.js Logo" />
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <img src={express} alt="Express.js Logo" />
                  <h5>Express.js</h5>
                </div>
                <div className="item">
                  <img src={django} alt="Django Logo" />
                  <h5>Django</h5>
                </div>
                <div className="item">
                  <img src={postman} alt="Postman Logo" />
                  <h5>Postman API</h5>
                </div>
                <div className="item">
                  <img src={mongodb} alt="MongoDB Logo" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={sql} alt="SQL Logo" />
                  <h5>SQL</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background decorative pattern" />
    </section>
  );
};
