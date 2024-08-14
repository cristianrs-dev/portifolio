import React from "react";
import '../styles/App.css';
import FotoPerfil from "../components/FotoPerfil";
import TituloProfissional from "../components/TituloProfissional";

function Banner(){
    return(
        <div className="banner">
            <div className="box-banner">
                <FotoPerfil></FotoPerfil>
                <TituloProfissional></TituloProfissional>
            </div>
        </div>
    );
}
export default Banner;