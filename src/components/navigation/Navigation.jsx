import React from "react";
import "./navigaiton.css";
import {AiOutlineHome} from "react-icons/ai";
import {AiOutlineUser} from "react-icons/ai";
import {AiOutlineBook} from "react-icons/ai";
import {AiOutlineMessage} from "react-icons/ai";
import {useState} from "react";

const Navigation = () => {
    const [selectedSection, setSelectedSection] = useState('#')
    return (
        <navigation>
            <a href="#" onClick={ () => setSelectedSection("#")} className={selectedSection === '#' ? 'selected__section' : '' }><AiOutlineHome/></a>
            <a href="#about" onClick={ () => setSelectedSection("#about")} className={selectedSection === '#about' ? 'selected__section' : '' }><AiOutlineUser/></a>
            <a href="#experience" onClick={ () => setSelectedSection("#experience")} className={selectedSection === '#experience' ? 'selected__section' : '' }><AiOutlineBook/></a>
            <a href="#contact" onClick={ () => setSelectedSection("#contact")} className={selectedSection === '#contact' ? 'selected__section' : '' }><AiOutlineMessage/></a>
        </navigation>
    )
}

export default Navigation