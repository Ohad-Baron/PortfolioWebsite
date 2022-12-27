import React from "react";
import './contact.css'
import {MdOutlineEmail} from "react-icons/md";
import {RiMessengerLine} from "react-icons/ri";
import {BsWhatsapp} from "react-icons/bs";
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_63ypo74', 'template_ogp1yt5', form.current, 'f63UeOChNBLhx10J2')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    };

    return (
        <section id="contact">
            <br/>
            <br/>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__options-icon" />
                        <h4>Email</h4>
                        <h5>ohad.baron1@gmail.com</h5>
                        <a href="mailto:ohad.baron1@gmail.com" target="_blank">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine className="contact__options-icon"/>
                        <h4>Messenger</h4>
                        <h5>Ohad Baron</h5>
                        <a href="https://m.me/ohad.baron1" target="_blank">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className="contact__options-icon"/>
                        <h4>Whatsapp</h4>
                        <h5>+972544969648</h5>
                        <a href="https://api.whatsapp.com/send?phone=0544969648" target="_blank">Send a message</a>
                    </article>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder="Your Full Name" required/>
                    <input type="email" name='email' placeholder="Your Email" required/>
                    <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                    <button type="submit" className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact