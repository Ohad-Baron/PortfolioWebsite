import React from "react";
import './footer.css'
import {FaFacebookF} from "react-icons/fa";
import {FiInstagram} from "react-icons/fi";

const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">Ohad Baron</a>
            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.facebook.com/ohad.baron1" target="_blank"><FaFacebookF/></a>
                <a href="https://www.instagram.com/ohad_baron/" target="_blank"><FiInstagram/></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Ohad Baron. All rights reserved</small>
            </div>
        </footer>
    )
}

export default Footer