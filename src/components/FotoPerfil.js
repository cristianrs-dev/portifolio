import React from "react";
import perfil from '../img/perfil.jpg';
import '../styles/App.css';

function FotoPerfil(){
    return(
        <img className="foto-perfil" src={perfil} alt="foto perfil" ></img>
    );
}
export default FotoPerfil;