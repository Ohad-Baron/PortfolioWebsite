import React from 'react';
import './header.css'
import CallToAction from './CallToAction';
import ProfilePicture from '../../resources/ProfilePictureAllBody.jpeg';
import HeaderSocials from './HeaderSocials'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h4>Hello I'm</h4>
                <h1>Ohad Baron</h1>
                <h5 className="text-light">Senior Software Engineer</h5>
                <CallToAction />
                <HeaderSocials />

                <div className="profile__picture">
                    <img src={ProfilePicture} alt="profilePicture" />
                </div>

                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header