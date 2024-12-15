import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import mailicon from "../assets/img/mailicon.svg"
import linkedin from "../assets/img/linkedinblack.svg"
import './Contact.css';

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_4ig3pbo', 'template_8s72kl8', form.current, {
                publicKey: 'IoauRi_8l6bXJOaK6',
            })
        e.target.reset()
    };

    return (
        <section className="contact" id="contact">
            <h1> Connect with me! </h1>
            <div className="contact-section">
                {/* Left */}
                <div className="contact-cards">
                    <div className="contact-card">
                        <a href="mailto:siddhantchauhan003@gmail.com">
                            <img src={mailicon} alt="mail" className="cardicon" />
                            <h4> Email </h4>
                            <p> siddhantchauhan003@gmail.com </p>
                        </a>
                    </div>

                    <div className="contact-card">
                        <a href="https://linkedin.com/in/siddhantc01" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="linkedin" className="cardicon" />
                            <h4> Linkedin </h4>
                            <p>linkedin.com/in/siddhantc01</p>
                        </a>
                    </div>
                </div>

                {/* Right */}
                <div className="contact-right">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="formfield">
                            <label className="contactformlabel">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="contactforminput"
                                placeholder="Your Name"
                            />
                        </div>

                        <div className="formfield">
                            <label className="contactformlabel">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="contactforminput"
                                placeholder="Your email address"
                            />
                        </div>

                        <div className="formfield">
                            <label className="contactformlabel">Message</label>
                            <textarea
                                cols="30"
                                rows="10"
                                name="message"
                                className="contactforminput"
                                placeholder="Enter your message"
                            />
                        </div>

                        {/* Submit Button */}
                        <button type="submit">
                            <span> Send </span>
                        </button>
                    </form>
                </div>
            </div>
        </section>

    )
}
