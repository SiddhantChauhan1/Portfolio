import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };

  return (
    <section className="contact" id="connect">
  <Container>
    <Row className="align-items-center">
      <Col size={12} md={6}>
        <img src={contactImg} alt="Contact Us" />
      </Col>
      <Col size={12} md={6}>
        <h2>Contact me.</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <Row>
            <Col size={12} className="px-1">
              <input
                type="text"
                value={formDetails.Name}
                placeholder="Your Name"
                onChange={(e) => onFormUpdate('firstName', e.target.value)}
              />
            </Col>
          </Row>

          {/* Email Field */}
          <Row>
            <Col size={12} className="px-1">
              <input
                type="email"
                value={formDetails.email}
                placeholder="Email Address"
                onChange={(e) => onFormUpdate('email', e.target.value)}
              />
            </Col>
          </Row>

          {/* Message Field */}
          <Row>
            <Col size={12} className="px-1">
              <textarea
                rows="6"
                value={formDetails.message}
                placeholder="Message"
                onChange={(e) => onFormUpdate('message', e.target.value)}
              ></textarea>
            </Col>
          </Row>

          {/* Submit Button */}
          <Row>
            <Col size={12} className="px-1">
              <button type="submit">
                <span>{buttonText}</span>
              </button>
            </Col>
          </Row>

          {/* Status Message */}
          {status.message && (
            <Row>
              <Col>
                <p className={status.success === false ? "danger" : "success"}>
                  {status.message}
                </p>
              </Col>
            </Row>
          )}
        </form>
      </Col>
    </Row>
  </Container>
</section>

  )
}
