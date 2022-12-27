import React from "react";
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaFacebookSquare} from 'react-icons/fa'

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/ohad-baron-7017bbb3/" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/Ohad-Baron" target="_blank"><FaGithub /></a>
            <a href="https://www.facebook.com/ohad.baron1" target="_blank"><FaFacebookSquare /></a>
        </div>
    )
}

export default HeaderSocials