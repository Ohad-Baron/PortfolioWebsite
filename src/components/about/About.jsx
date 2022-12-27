import React from "react";
import './about.css'
import ME from '../../resources/me-about.jpeg'
import {FaAward} from "react-icons/fa";
import {MdWork} from "react-icons/md";

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className='about__icon'/>
                       <h5>Experience</h5>
                            <small>4+ Years Working</small>
                        </article>
                        <article className="about__card">
                            <MdWork className='about__icon'/>
                            <h5>Current Company</h5>
                            <small>Next Insurance</small>
                        </article>
                    </div>
                    <p>
                        My name is Ohad Baron, I'm a backend software developer based in Israel.
                        <br/>
                        I have 4+ years of well-rounded experience in the computer software industry.
                        <br/>
                        Solving complex problems is my passion, and I love what I do.
                    </p>

                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>

        </section>
    )
}

export default About