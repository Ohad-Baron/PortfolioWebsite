import React from "react";
import './experience.css'
import {BsPatchCheckFill} from "react-icons/bs";

const Experience = () => {
    return (<section id="experience">
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>

        <div className="container experience__container">
            <div className="experience__skills">
                <h3>Development Skills</h3>
                <div className="experience__content">
                    <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon'/>
                        <div>
                            <h4>Java</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon'/>
                        <div>
                            <h4>Kotlin</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon'/>
                        <div>
                            <h4>C#</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon'/>
                        <div>
                            <h4>MySQL</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon'/>
                        <div>
                            <h4>React</h4>
                            <small className='text-light'>Beginner</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon'/>
                        <div>
                            <h4>HTML</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon'/>
                        <div>
                            <h4>Java Script</h4>
                            <small className='text-light'>Beginner</small>
                        </div>
                    </article>
                </div>
            </div>
            {/* END OF BACKEND */}
            <div className="experience__technologies">
                <h3>Tools</h3>
                <div className="experience__content">
                    <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon'/>
                        <div>
                            <h4>AWS</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon'/>
                        <div>
                            <h4>Docker</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon'/>
                        <div>
                            <h4>Grafana</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon'/>
                        <div>
                            <h4>Git</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon'/>
                        <div>
                            <h4>IntelliJ IDEA</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon'/>
                        <div>
                            <h4>Eclipse</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>)
}

export default Experience