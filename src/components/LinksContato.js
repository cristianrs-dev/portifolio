import React from "react";
import github from '../img/github.png';
import linkedin  from '../img/linkedin.png';
import '../styles/App.css';

function LinksContato(){
    return(

        
       
            <div className="icones-contato">
                <a href="https://github.com/cristianrs-dev" > <img className="icone" src={github} alt="github"></img>  </a> 
               <a href="https://www.linkedin.com/in/cristianrds/" > <img className="icone" src={linkedin} alt="linkedin"></img> </a> 
             </div>

    
        
        
    );
}
export default LinksContato;