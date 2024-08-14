import React from "react";
import '../styles/App.css';

function IconeNav({ toggleSidebar }) {
    return (
        <div id="openBtn" className="menuMobile" onClick={toggleSidebar}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
    );
}

export default IconeNav;
