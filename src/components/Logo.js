import React from "react";
import '../styles/App.css';

function Logo(props){
    return(
        <div className="logo">
            &lt;{props.logo}/&gt;
        </div>

    );

}

export default Logo;