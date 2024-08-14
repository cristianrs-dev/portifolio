import React from "react";
import '../styles/App.css';

function MenuDesktop(props){
    return(
      
        <div>
            <nav className="navbar">
            <ul className="nav-list">
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
export default MenuDesktop;