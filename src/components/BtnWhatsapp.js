import React from "react";
import '../styles/App.css';
import whatsapp from '../img/whatsapp.png'

function BtnWhatsapp(){
    return(
        <div className="whatsapp-fixo">
            <a href="https://wa.me/5592981336790?" target="_blank" rel="noopener noreferrer" aria-label="Entre em contato pelo WhatsApp">
                <img src={whatsapp} alt="Ícone do WhatsApp"/>
            </a>
        </div>
    );
}
export default BtnWhatsapp;