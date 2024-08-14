import React, { useState } from "react";
import '../styles/App.css';
import IconeNav from '../components/IconeNav';

function MenuMobile(props){
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <IconeNav toggleSidebar={toggleSidebar} />
            <nav className={`sidebar ${isOpen ? 'show' : ''}`} id="sidebar">
                <button id="close-btn" onClick={toggleSidebar}>X</button>
                <ul>
                <li><a href="#servicos">{props.links[0]}</a></li>
                <li><a href="#faq">{props.links[1]}</a></li>
                <li><a href="#contato">{props.links[2]}</a></li>
                <li><a href="#produtos">{props.links[3]}</a></li>
                <li><a href="#contato">{props.links[4]}</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default MenuMobile;
