import React from 'react';
import '../styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import pageConteudo from '../img/paginaConteudo.gif';
import landing from '../img/landingPage.png';
import hotelNorte from '../img/hotelNorte.gif';
import banc from '../img/valorBanc.gif';
import appPay from '../img/appPay.gif'
import crud from '../img/crudStore.gif';
import html from '../img/html-5.png';
import css from '../img/css.png';
import js from '../img/js.png';
import bootstrap from '../img/bootstrap.png';
import figma from '../img/figma.png';
import champ from '../img/mailchamp.png';
import calcImc from '../img/calcIMC.PNG';

function FrontEnd(){
    return(

        <div className='frontEnd' >
        
        <a href="https://cristianrs-dev.github.io/Pagina-de-Conteudo/">
            <div className='item-card' >
                <div className='card-imagem' >
                        
                        <img className='imagem-projeto'  src={pageConteudo} alt="pagina conteudo"/> 
                </div>  
                <div className='card-texto'>
            
                        <h5 className='titulo-card'>Página de conteúdo</h5>
                        <p>Projeto desenvolvido no curso full stack web aplicando conceitos básicos de html e css</p>
                        <img className='skill' src={html} alt='HTML'/>
                        <img className='skill' src={css} alt='CSS'/>
                </div>
            </div>
            </a>

        
            


        <a href="https://cristianrs-dev.github.io/Landing-page/">
            <div className='item-card' >
                <div className='card-imagem' >
                        
                        <img className='imagem-projeto'  src={landing} alt="pagina conteudo"/> 
                </div>  
                <div className='card-texto'>
            
                        <h5 className='titulo-card'>Landing Page</h5>
                        <p>Projeto desenvolvido no curso full stack web aplicando conceitos básicos de html, css e mailchimp</p>
                        <img className='skill' src={html} alt='HTML'/>
                        <img className='skill' src={css} alt='CSS'/>
                        <img className='skill' src={js} alt='javascript'/>
                        <img className='skill skill-champ' src={champ} alt='mailchamp'/>
                </div>
            </div>
            </a>

            

            <a href="https://cristianrs-dev.github.io/calculadora_IMC/">
            <div className='item-card' >
                <div className='card-imagem' >
                        
                        <img className='imagem-projeto'  src={calcImc} alt="pagina conteudo"/> 
                </div>  
                <div className='card-texto'>
            
                        <h5 className='titulo-card'>Calculadora IMC</h5>
                        <p>Projeto pessoal desenvolvido com objetivo em aplicar os conceitos básicos de formulário
                            html, conceitos básicos de javascript e as regras de negócio da calculadora imc.
                        </p>
                        <img className='skill' src={bootstrap} alt='Bootstrap'/>
                        <img className='skill' src={js} alt='javascript'/>
                        <img className='skill' src={figma} alt='figma'/>
                </div>
            </div>
            </a>


            <a href="https://cristianrs-dev.github.io/appPay/">
            <div className='item-card' >
                <div className='card-imagem' >
                        
                        <img className='imagem-projeto'  src={appPay} alt="pagina conteudo"/> 
                </div>  
                <div className='card-texto'>
            
                        <h5 className='titulo-card'>App Pay</h5>
                        <p>Projeto pessoal desenvolvido durante o curso técnico em desenvolvimento de sistemas onde fomos desafiados
                             a criar um aplicativo de pagamento desde a concepção do template usando figma</p>
                        <img className='skill' src={bootstrap} alt='Bootstrap'/>
                        <img className='skill' src={js} alt='javascript'/>
                        <img className='skill' src={figma} alt='figma'/>
                </div>
            </div>
            </a>


            <a href="https://cristianrs-dev.github.io/hotel_do_norte/">
            <div className='item-card' >
                <div className='card-imagem' >
                        
                        <img className='imagem-projeto'  src={hotelNorte} alt="pagina conteudo"/> 
                </div>  
                <div className='card-texto'>
            
                        <h5 className='titulo-card'>Site Hotel do Norte</h5>
                        <p>Projeto pessoal desenvolvido durante o curso técnico em desenvolvimento de sistemas
                             onde fomos desafiados a criar uma homepage para um hotel  desde a concepção do template usando figma.
                        </p>
                        <img className='skill' src={bootstrap} alt='Bootstrap'/>
                        <img className='skill' src={js} alt='javascript'/>
                        <img className='skill' src={figma} alt='figma'/>
                </div>
            </div>
            </a>

            <a href="https://cristianrs-dev.github.io/ValorBanc/">
            <div className='item-card' >
                <div className='card-imagem' >
                        
                        <img className='imagem-projeto'  src={banc} alt="pagina conteudo"/> 
                </div>  
                <div className='card-texto'>
            
                        <h5 className='titulo-card'>Site Banc</h5>
                        <p>Projeto pessoal desenvolvido durante o curso técnico em desenvolvimento de sistemas
                             onde fomos desafiados a criar uma homepage com o tema empresa de emprestimos
                              desde a concepção do template usando figma.
                        </p>
                        <img className='skill' src={bootstrap} alt='Bootstrap'/>
                        <img className='skill' src={js} alt='javascript'/>
                        <img className='skill' src={figma} alt='figma'/>
                </div>
            </div>
            </a>

            <a href=" https://cristianrs-dev.github.io/Plano_de_aula-Crud-localstorage/">
            <div className='item-card' >
                <div className='card-imagem' >
                        
                        <img className='imagem-projeto'  src={crud} alt="pagina conteudo"/> 
                </div>  
                <div className='card-texto'>
            
                        <h5 className='titulo-card'>Crud-LocalStorage</h5>
                        <p>Projeto pessoal onde foram aplicados conceitos de bootstrap, javascript e LocalStorage
                        </p>
                        <img className='skill' src={bootstrap} alt='Bootstrap'/>
                        <img className='skill' src={js} alt='javascript'/>
                </div>
            </div>
            </a>



        </div>

        
        

    );
}

export default FrontEnd;