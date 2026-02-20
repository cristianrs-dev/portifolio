import React from "react";
import '../styles/App.css';
import Logo from "../components/Logo";
import MenuDesktop from "../components/MenuDesktop";
import MenuMobile from "./MenuMobile";
import BtnWhatsapp from "./BtnWhatsapp";

function Header(){
    const links=["Home","Sobre","Front-end","Back-end","Testes"]
    return(
        <header>
            <div id="topo" className="header" >
            <Logo logo="Meu portfolio" ></Logo>
            <MenuMobile links={links} ></MenuMobile>
            <MenuDesktop links={links}></MenuDesktop>
            <BtnWhatsapp></BtnWhatsapp>
            </div>
        </header>
    );
}

export default Header;