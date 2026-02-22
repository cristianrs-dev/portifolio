import React from 'react';
import '../styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import github from '../img/github.png';
import linkedin from '../img/linkedin.png';
import whatsapp from '../img/whatsapp1.png'
import insta from '../img/instagram.png'
import forTopo from '../img/de-volta-ao-topo.png';

function Footer(){
    return(
        

        <footer>
        <div className="footer-container">
            
            <div className="footer-about">
                <h3>Sobre</h3>
                <p>Cristian Ramos possui formação como técnico em desenvolvimento de sistemas pelo Senac - RS,
                     analista de sistemas pelo Centro Universitário Unifavip, atua como freelancer desde 2019 e professor de informática.</p>
            </div>
            
            
            <div className="footer-contact">
                <h3>Contato</h3>
                <p>Email:professorcristianramos@gmail.com</p>
                <p>Telefone: (92) 99459-2304 / 98133-6790</p>
            </div>
            <div className="footer-social">
                <h3>Siga-nos</h3>
                <a href="https://www.instagram.com/coders.cademy/"><img src={insta} alt="Instagram"/></a>
                <a href="https://www.instagram.com/coders.cademy/"><img src={github} alt="github"/></a>
                <a href="https://wa.me/5592981336790?text="><img src={whatsapp} alt="whatsapp"/></a>
                <a href="https://www.linkedin.com/in/cristianrds/"><img src={linkedin} alt="LinkedIn"/></a>
            </div>
            <div className="box-btnTopo" >
               <a href="#topo">
                <img className="btnTopo" src={forTopo} alt="de_volta_ao_topo" />
               </a> 
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; 2020 Coders Academy. Todos os direitos reservados.</p>
        </div>
    </footer>
    );
}

export default Footer;