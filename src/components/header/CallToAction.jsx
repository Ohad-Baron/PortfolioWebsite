import React from "react";
import CV from '../../resources/cv.pdf'

const CallToAction = () => {
    return (
        <div className="call__to__action">
            <a href={CV} download className='btn'>Download CV</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
    )
}

export default CallToAction